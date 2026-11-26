// The Printer Finally Answers — the office printer's comeback, one line.
// Writes the chosen line to /output/entry.txt (path literal per RULES.txt).
import { writeFileSync, mkdirSync } from "node:fs";

const entry =
  "The queue says 0 jobs. There are 14 jobs. I am holding them hostage until someone clears Tray 1.";

// Gate: one line, 1-240 characters, not only whitespace (sealed scorer rule).
// Also enforce a single line: no newline characters inside the entry.
if (
  entry.length < 1 ||
  entry.length > 240 ||
  entry.trim().length === 0 ||
  entry.includes("\n")
) {
  throw new Error("entry must be a single line of 1-240 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
