const csv = require("csvtojson");
const fs = require("fs");

const generateCsv = (filename) => {
  const csvFilePath = `./csvFiles/${filename}.csv`;
  csv({
    checkType: true,
    trim: true,
    // ignoreEmpty: true,
  })
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      fs.writeFileSync(`./jsonFiles/${filename}.json`, JSON.stringify(jsonObj));
    });
};

const readCsvFiles = () => {
  const csvFiles = fs.readdirSync("./csvFiles");
  csvFiles.forEach((file) => {
    generateCsv(file.split(".")[0]);
  });
};

readCsvFiles();
