// Site oficial (www.empireoengenharia.com.br): gera o build na raiz do domínio e
// compacta o conteúdo de out/ em empireo-site.zip, pronto para enviar à hospedagem
// (HostGator: public_html | KingHost: www) e extrair lá.
// Rodado por "npm run build:site". Funciona no Windows, Mac e Linux.
import { spawnSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";

const build = spawnSync("npx", ["next", "build"], { stdio: "inherit", shell: true });
if (build.status !== 0 || !existsSync("out/index.html")) {
  console.error("O next build falhou: o .zip não foi gerado.");
  process.exit(1);
}

// tar -a cria .zip pela extensão (vem no Windows 10+, Mac e Linux)
rmSync("empireo-site.zip", { force: true });
const zip = spawnSync("tar", ["-a", "-c", "-f", "empireo-site.zip", "-C", "out", "."], { stdio: "inherit" });
if (zip.status !== 0) {
  console.error("Não foi possível criar o .zip; envie o conteúdo da pasta out/ manualmente.");
  process.exit(1);
}
console.log("Pronto: empireo-site.zip (conteúdo da pasta out/, incluindo o .htaccess).");
