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
  for (let i = 0; i < lines.length - 1; i++) {
    state.push(new Shape(JSON.parse(lines[i])));
  }
  return state;
};

const loadXML = (loadFilePath) => {
  let state = [];
  const data = fs.readFileSync(loadFilePath, "utf8");
  const lines = data.split("\r\n");
  for (let i = 0; i < lines.length - 1; i++) {
    state.push(
      cleanShape(new Shape(tools.xml2js(lines[i], { compact: true }).shape))
    );
  }
  return state;
};

function cleanShape(shape) {
  let tmp = [];
  Object.values(shape.points).forEach((x) => tmp.push(parseFloat(x._text)));

  return {
    x: parseFloat(shape.x._text),
    y: parseFloat(shape.y._text),
    scaleX: parseFloat(shape.scaleX._text),
    scaleY: parseFloat(shape.scaleY._text),
    rotation: parseFloat(shape.rotation._text),
    strokeWidth: parseFloat(shape.strokeWidth._text),
    fill: shape.fill._text,
    stroke: shape.stroke._text,
    draggable: shape.draggable._text === "true",
    radius: parseFloat(shape.radius._text),
    radiusX: parseFloat(shape.radiusX._text),
    radiusY: parseFloat(shape.radiusY._text),
    width: parseFloat(shape.width._text),
    height: parseFloat(shape.height._text),
    closed: shape.closed._text === "true",
    points: tmp,
    shape: shape.shape._text,
    id: parseInt(shape.id._text),
  };
}

module.exports = {
  loadJson,
  loadXML,
  saveJson,
  saveXML,
};
