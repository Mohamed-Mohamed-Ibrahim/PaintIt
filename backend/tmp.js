const tools = require("xml-js");
const tools2 = require("simple-xml-to-json");

// const input = [
//   {
//     x: 774.8608703613281,
//     y: 211.43711447632856,
//     scaleX: 0,
//     scaleY: 0,
//     rotation: 0,
//     strokeWidth: 2,
//     fill: "white",
//     stroke: "black",
//     draggable: false,
//     radius: 123,
//     radiusX: 0,
//     radiusY: 0,
//     width: 0,
//     height: 0,
//     closed: false,
//     points: null,
//     shape: "circle",
//     id: 1,
//   },
//   {
//     x: 1459.8608703613281,
//     y: 523.4405534976208,
//     scaleX: 0,
//     scaleY: 0,
//     rotation: 0,
//     strokeWidth: 2,
//     fill: "white",
//     stroke: "black",
//     draggable: false,
//     radius: 123,
//     radiusX: 0,
//     radiusY: 0,
//     width: 0,
//     height: 0,
//     closed: false,
//     points: null,
//     shape: "circle",
//     id: 2,
//   },
// ];
// console.log(input);
// const xml = [];
// input.forEach((x) =>
//   xml.push(
//     tools.js2xml(x, {
//       compact: true,
//     })
//   )
// );
// console.log(xml);
// const json = [];
// xml.forEach((x) =>
//   json.push(
//     tools.xml2js(x, {
//       compact: true,
//     })
//   )
// );
// console.log(json);

const input =   {
    x: 1459.8608703613281,
    y: 523.4405534976208,
    scaleX: 0,
    scaleY: 0,
    // rotation: 0,
    // strokeWidth: 2,
    // fill: "white",
    // stroke: "black",
    // draggable: false,
    // radius: 123,
    // radiusX: 0,
    // radiusY: 0,
    // width: 0,
    // height: 0,
    // closed: false,
    // points: null,
    // shape: "circle",
    // id: 2,
  };

let tmp = null;
tmp = tools.js2xml({input}, {
  compact: true});
console.log(tmp);

console.log(
  tools.xml2js(tmp, { compact: true })
);
