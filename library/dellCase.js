
const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

async function dellCase(filePath, caseNameToRemove) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Terjadi kesalahan:", err);
      return;
    }

    const regex = new RegExp(
      `case\\s+'${caseNameToRemove}':[\\s\\S]*?break`,
      "g",
    );
    const modifiedData = data.replace(regex, "");

    fs.writeFile(filePath, modifiedData, "utf8", (err) => {
      if (err) {
        console.error("Terjadi kesalahan saat menulis file:", err);
        return;
      }

      console.log(
        `Teks dari case '${caseNameToRemove}' telah dihapus dari file.`,
      );
    });
  });
}

module.exports.dellCase = dellCase;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});