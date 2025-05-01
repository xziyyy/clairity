
const fs = require("fs");
const chalk = require("chalk");
const util = require("util");

async function insertText(textToInsert) {
  const teksReferensi = "switch (command) {";

  fs.readFile("./connect/xZiyy.js", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const posisiReferensi = data.indexOf("switch (command) {");

    if (posisiReferensi === -1) {
      console.error("Teks referensi tidak ditemukan dalam file.");
      return;
    }

    const newData =
      data.slice(0, posisiReferensi + teksReferensi.length) +
      "\n" +
      textToInsert +
      data.slice(posisiReferensi + teksReferensi.length);

    fs.writeFile("./connect/xZiyy.js", newData, "utf8", (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Teks berhasil dimasukkan ke dalam file.");
      }
    });
  });
}

module.exports.insertText = insertText;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});