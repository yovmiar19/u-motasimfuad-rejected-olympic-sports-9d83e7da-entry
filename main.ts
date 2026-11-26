// Rejected Olympic Sports — one-liner entry.
//
// The program writes exactly one line of text to /output/entry.txt:
// a made-up Olympic event, real enough to sound like a broadcast,
// absurd enough to be funny. Nothing else is written.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Synchronized Parallel Parking: Norway's van slid in with four centimetres to spare, and the judges are still arguing about the indicator.";

// The gate allows 1 to 200 characters on a single line. Refuse to write
// anything that would fail it instead of silently producing a bad entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line is ${LINE.length} characters; gate needs 1-200 on one line`);
}

const outPath = process.env.MAKEFUN_OUTPUT_DIR
  ? `${process.env.MAKEFUN_OUTPUT_DIR}/entry.txt`
  : "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
