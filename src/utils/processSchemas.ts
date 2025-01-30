import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

// Handle __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, "../../src"); // Adjust if needed
const schemaDir = path.join(__dirname, "../../schema"); // Adjust if needed

// Function to replace `jsonSchema(...)` annotations in all TypeScript files
function replaceSchemaInFiles(directory: string) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      replaceSchemaInFiles(filePath); // Recursively process subdirectories
    } else if (file.endsWith(".ts") || file.endsWith(".tsx")) {

      let fileContent = fs.readFileSync(filePath, "utf-8");
      const updatedContent = replaceSchemaAnnotations(fileContent);

      if (updatedContent !== fileContent) {
        fs.writeFileSync(filePath, updatedContent, "utf-8");
      }
    }
  });
}

// Function to process file content and replace `jsonSchema(...)` annotations
function replaceSchemaAnnotations(fileContent: string): string {

  // Matches "jsonSchema(Name)\n schema: ..." and replaces schema value with "hello"
  const schemaRegex = /(jsonSchema\(\w+\))\s*\n\s*(schema:\s*)({}|\{[^}]*\}|\S+)(,?)/g;
  let match;
  const schemaAnnotationRegex = /jsonSchema\((\w+)\)/;

  while ((match = schemaRegex.exec(fileContent)) !== null) {
    const schemaAnnotation = match[1]; // Extract annotation (e.g., "jsonSchema(LeaderboardProgressT)")
    const schemaProperty = match[2]; // Extract property assignment (e.g., "schema:")
    // const trailingComma = match[4] ?? ""; // Preserve the comma if there was one
    
    const schemaName = schemaAnnotation.match(schemaAnnotationRegex)![1];

    console.log(`📌 Found annotation: ${schemaName}`);
    const allSchemas = fetchSchemas();
    const value = JSON.stringify(allSchemas[schemaName])
    // Ensure we replace only the schema value, keeping the rest intact
    const replacement = `${schemaAnnotation}\n${schemaProperty} \`${value}\`,`;

    // Replace schema property value
    fileContent = fileContent.replace(match[0], replacement);
  }
  return fileContent;
}

// Run the script to replace schemas in all files
replaceSchemaInFiles(sourceDir);


// Function to fetch all schemas from /schema/ folder
function fetchSchemas(): Record<string, any> {
  if (!fs.existsSync(schemaDir)) {
    console.error("❌ Schema directory not found:", schemaDir);
    return {};
  }

  const schemas: Record<string, any> = {};
  const schemaFiles = fs.readdirSync(schemaDir).filter(file => file.endsWith(".schema.json"));

  console.log(`📂 Found ${schemaFiles.length} schema files`);

  for (const file of schemaFiles) {
    const schemaName = path.basename(file, ".schema.json"); // Extract name without extension
    const schemaPath = path.join(schemaDir, file);

    try {
      const schemaData = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));
      schemas[schemaName] = schemaData;
      console.log(`✅ Loaded schema: ${schemaName}`);
    } catch (error) {
      console.error(`❌ Failed to load schema: ${schemaName}`, error);
    }
  }

  return schemas;
}

// Test fetching schemas
