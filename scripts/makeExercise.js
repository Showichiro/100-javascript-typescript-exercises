import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const content = (title) => `
# ${title}

## 説明

## 練習問題
`;

const args = parseArgs({
  allowPositionals: true,
});

const dirName = args.positionals[0];
const title = args.positionals[1];

if (!dirName || !title) {
  console.error("Error: Directory name and title must be provided.");
  process.exit(1);
}

const exercisesDir = path.join(__dirname, "..", "exercises");

// ディレクトリが存在しない場合は作成
if (!fs.existsSync(exercisesDir)) {
  fs.mkdirSync(exercisesDir, { recursive: true });
}

const newDirPath = path.join(exercisesDir, dirName);

// ディレクトリが存在しない場合は作成
if (!fs.existsSync(newDirPath)) {
  fs.mkdirSync(newDirPath);
}

const readmePath = path.join(newDirPath, "README.md");

// README.mdファイルを書き込む
fs.writeFileSync(readmePath, `# ${content(title)}`);
