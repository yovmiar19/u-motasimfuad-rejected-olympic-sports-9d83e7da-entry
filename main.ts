// One rejected Olympic sport, written as a single broadcast-style line.
import { mkdirSync, writeFileSync } from "node:fs";

function buildLine(): string {
  const event = "Synchronized Parallel Parking:";
  const action = "Norway's van slid in with four centimetres to spare,";
  const twist = "and the judges are still arguing about the indicator.";
  return [event, action, twist].join(" ");
}

const line = buildLine();

// The scorer gate requires exactly one line of 1-200 characters,
// so reject anything outside that range before writing the file.
if (line.length > 200 || line.length < 1 || line.includes("\n")) {
  throw new Error(`Invalid entry length: ${line.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, line, "utf8");
console.log(line);
