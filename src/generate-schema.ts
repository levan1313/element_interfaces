import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

// ✅ Define __dirname manually in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Folder where JSON schemas will be stored
const outputFolder = path.resolve(__dirname, "../schema");

// Ensure the schema folder exists
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Define interfaces to generate schemas for
const interfaces = [
  { file: "src/types/balance.type.ts", interface: "BalancesListResponseI" },
  { file: "src/types/leaderboard.type.ts", interface: "LeaderboardProgressResponseT" },
  { file: "src/types/promotion.type.ts", interface: "PromotionResponseT" },
];

interfaces.forEach(({ interface: interfaceName }) => {
  const outputFile = path.join(outputFolder, `${interfaceName}.schema.json`);
  console.log(`Generating schema for ${interfaceName}...`);

  try {
    execSync(
      `npx typescript-json-schema tsconfig.json ${interfaceName} --out ${outputFile} --module esnext`,
      { stdio: "inherit" }
    );
    console.log(`✅ Schema generated: ${outputFile}`);
  } catch (error) {
    console.error(`❌ Error generating schema for ${interfaceName}:`, error);
  }
});

console.log("🎉 JSON Schema generation complete!");
