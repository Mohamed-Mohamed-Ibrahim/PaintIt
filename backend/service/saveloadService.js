const tools = require("xml-js");
const fs = require("fs");

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
      tools.js2xml({ shape }) + "\r\n",
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

const loadJson = (program, saveLoc) => {
  program.forEach((shape) => {
    fs.re(saveLoc, tools.js2xml({ shape }), (error) => {
      // throwing the error
      // in case of a writing problem
      if (error) {
        // logging the error
        console.error(error);

        throw error;
      }
    });
  });
};

const loadXML = (program, saveLoc) => {
  program.array.forEach((shape) => {
    fs.writeFile(saveLoc, tools.js2xml({ shape }), (error) => {
      // throwing the error
      // in case of a writing problem
      if (error) {
        // logging the error
        console.error(error);

        throw error;
      }
    });
  });
};

module.exports = {
  loadJson,
  loadXML,
  saveJson,
  saveXML,
};
