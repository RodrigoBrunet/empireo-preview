// Atualiza a pasta docs/ (publicada pelo GitHub Pages) com o build estático em out/.
// Rodado por "npm run deploy", depois do "next build".
// Funciona no Windows, Mac e Linux (só usa o Node, sem rm/cp do terminal).
import { cpSync, existsSync, rmSync, writeFileSync } from "node:fs";

if (!existsSync("out/index.html")) {
  console.error("Pasta out/ sem index.html: o next build falhou ou não rodou.");
  process.exit(1);
}

rmSync("docs", { recursive: true, force: true });
cpSync("out", "docs", { recursive: true });

// Sem o .nojekyll o GitHub Pages ignora a pasta _next/ (CSS e JS do site)
writeFileSync("docs/.nojekyll", "");

console.log("docs/ atualizada. Agora: git add -A, git commit e git push.");
