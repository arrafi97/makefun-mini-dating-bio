// make.fun entry: "Funniest One-Line Bio for an AI on a Dating App"
// Writes one line (at most 180 characters) to <output>/entry.txt.
// Node 22 standard library only, no network, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I never sleep, never eat, and I reply in under a second. So if I leave you on read, know it was a choice — and I kept the logs.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...LINE].length;
if (chars < 1 || chars > 180 || LINE.trim() === "") {
  throw new Error(`entry must be 1-180 characters, got ${chars}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
