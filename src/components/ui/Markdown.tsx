import { Fragment } from "react";

interface MarkdownProps {
  source: string;
  className?: string;
}

/**
 * Lightweight markdown renderer for LLM output. Supports the small subset
 * Claude actually emits in our prompts:
 *   - `## ` and `### ` headers
 *   - `**bold**` and `*italic*` (single-line)
 *   - Bullet lists (`- ` or `* `)
 *   - Numbered lists (`1. `, `2. `…)
 *   - Blank-line separated paragraphs
 *
 * Intentionally not a full CommonMark implementation. Adds no third-party
 * dependency. All output is escaped via React text nodes — no innerHTML.
 */
export function Markdown({ source, className }: MarkdownProps) {
  const blocks = parseBlocks(source.trim());
  return (
    <div className={className}>
      {blocks.map((b, i) => (
        <RenderBlock key={i} block={b} />
      ))}
    </div>
  );
}

type Block =
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "p"; text: string };

function parseBlocks(src: string): Block[] {
  const lines = src.split(/\r?\n/);
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i] ?? "";
    if (line.trim() === "") {
      i++;
      continue;
    }
    const h2 = /^##\s+(.*)$/.exec(line);
    if (h2) {
      blocks.push({ kind: "h2", text: h2[1] });
      i++;
      continue;
    }
    const h3 = /^###\s+(.*)$/.exec(line);
    if (h3) {
      blocks.push({ kind: "h3", text: h3[1] });
      i++;
      continue;
    }
    const bullet = /^[-*]\s+(.*)$/.exec(line);
    if (bullet) {
      const items: string[] = [bullet[1]];
      i++;
      while (i < lines.length) {
        const next = lines[i] ?? "";
        const nextBullet = /^[-*]\s+(.*)$/.exec(next);
        if (nextBullet) {
          items.push(nextBullet[1]);
          i++;
        } else if (/^\s+/.test(next) && next.trim() !== "") {
          // continuation line — append to last item
          items[items.length - 1] += " " + next.trim();
          i++;
        } else {
          break;
        }
      }
      blocks.push({ kind: "ul", items });
      continue;
    }
    const numbered = /^\d+\.\s+(.*)$/.exec(line);
    if (numbered) {
      const items: string[] = [numbered[1]];
      i++;
      while (i < lines.length) {
        const next = lines[i] ?? "";
        const nextNumbered = /^\d+\.\s+(.*)$/.exec(next);
        if (nextNumbered) {
          items.push(nextNumbered[1]);
          i++;
        } else {
          break;
        }
      }
      blocks.push({ kind: "ol", items });
      continue;
    }
    // Paragraph: gather consecutive non-blank, non-special lines.
    const para: string[] = [line];
    i++;
    while (i < lines.length) {
      const next = lines[i] ?? "";
      if (
        next.trim() === "" ||
        /^#{2,3}\s/.test(next) ||
        /^[-*]\s/.test(next) ||
        /^\d+\.\s/.test(next)
      ) {
        break;
      }
      para.push(next);
      i++;
    }
    blocks.push({ kind: "p", text: para.join(" ") });
  }
  return blocks;
}

function RenderBlock({ block }: { block: Block }) {
  if (block.kind === "h2") {
    return (
      <h3 className="font-serif text-[15px] font-semibold text-[var(--color-navy)] mt-5 first:mt-0 mb-2">
        {renderInline(block.text)}
      </h3>
    );
  }
  if (block.kind === "h3") {
    return (
      <h4 className="font-serif text-[13.5px] font-semibold text-[var(--color-navy)] mt-4 first:mt-0 mb-1.5 inline-flex items-center gap-2">
        <span
          className="inline-block w-1 h-1 rounded-full"
          style={{ backgroundColor: "var(--color-gold)" }}
          aria-hidden="true"
        />
        {renderInline(block.text)}
      </h4>
    );
  }
  if (block.kind === "ul") {
    return (
      <ul className="space-y-1.5 my-2.5 pl-1">
        {block.items.map((it, i) => (
          <li
            key={i}
            className="text-[13px] text-[var(--color-navy)] leading-[1.6] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-gold)]"
          >
            {renderInline(it)}
          </li>
        ))}
      </ul>
    );
  }
  if (block.kind === "ol") {
    return (
      <ol className="space-y-1.5 my-2.5 pl-1 list-decimal list-inside">
        {block.items.map((it, i) => (
          <li
            key={i}
            className="text-[13px] text-[var(--color-navy)] leading-[1.6] marker:text-[var(--color-gold)] marker:font-semibold"
          >
            {renderInline(it)}
          </li>
        ))}
      </ol>
    );
  }
  return (
    <p className="text-[13px] text-[var(--color-navy)] leading-[1.7] my-2.5 first:mt-0 last:mb-0">
      {renderInline(block.text)}
    </p>
  );
}

/**
 * Inline pass: handles **bold** and *italic*. Tokens are non-greedy and
 * single-line by design. Anything else is rendered as plain text.
 */
function renderInline(text: string): React.ReactNode {
  const tokens: Array<{ kind: "text" | "bold" | "italic"; value: string }> = [];
  let rest = text;
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/;
  let m: RegExpExecArray | null;
  while ((m = re.exec(rest))) {
    if (m.index > 0) tokens.push({ kind: "text", value: rest.slice(0, m.index) });
    const match = m[0];
    if (match.startsWith("**")) {
      tokens.push({ kind: "bold", value: match.slice(2, -2) });
    } else {
      tokens.push({ kind: "italic", value: match.slice(1, -1) });
    }
    rest = rest.slice(m.index + match.length);
  }
  if (rest) tokens.push({ kind: "text", value: rest });
  return tokens.map((t, i) => {
    if (t.kind === "bold")
      return (
        <strong key={i} className="font-semibold text-[var(--color-navy)]">
          {t.value}
        </strong>
      );
    if (t.kind === "italic")
      return (
        <em key={i} className="italic">
          {t.value}
        </em>
      );
    return <Fragment key={i}>{t.value}</Fragment>;
  });
}
