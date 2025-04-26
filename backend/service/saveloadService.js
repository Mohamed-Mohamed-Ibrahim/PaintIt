const tools = require("xml-js");
const fs = require("fs");
const lineReader = require("line-reader");
const Shape = require("../model/Shape").Shape;

const saveJson = (program, saveLoc) => {
  //   console.log(program);
  //   fs.writeFile(saveLoc, null, { flag: "w" });

  fs.writeFileSync(saveLoc, "", { flag: "w" });

  program.forEach((shape) => {
    fs.writeFile(
      saveLoc,
      JSON.stringify(shape) + "\r\n",
      { flag: "a" },
      (error) => {
        // throwing the error
        // in case of a writing problem
        if (error) {
          // logging the error
          console.error(error);

          throw error;
        }
      }
    );
  });
};

const saveXML = (program, saveLoc) => {
  fs.writeFileSync(saveLoc, "", { flag: "w" });

  program.forEach((shape) => {
    fs.writeFile(
      saveLoc,
      tools.js2xml(
        { shape },
        {
          compact: true,
        }
      ) + "\r\n",
      { flag: "a" },
      (error) => {
        // throwing the error
        // in case of a writing problem
        if (error) {
          // logging the error
          console.error(error);

          throw error;
        }
      }
    );
  });
};

const loadJson = (loadFilePath) => {
  let state = [];
  const data = fs.readFileSync(loadFilePath, "utf8");
  const lines = data.split("\r\n");
  for (let i=0; i<lines.length-1; i++) {
    state.push(new Shape(JSON.parse(lines[i])));
  }
  return state;
};

const loadXML = async (loadFilePath) => {
  let state = [];
  await lineReader.eachLine(loadFilePath, (line, last) => {
    console.log(new Shape(JSON.parse(line)));
    state.push(new Shape(JSON.parse(line)));
  });
  console.log(state);
};

module.exports = {
  loadJson,
  loadXML,
  saveJson,
  saveXML,
};
