const tools = require("xml-js");
const Shape = require("./model/Shape").Shape;
const input = [
  {
    x: 774.8608703613281,
    y: 211.43711447632856,
    scaleX: 0,
    scaleY: 0,
    rotation: 0,
    strokeWidth: 2,
    fill: "white",
    stroke: "black",
    draggable: false,
    radius: 123,
    radiusX: 0,
    radiusY: 0,
    width: 0,
    height: 0,
    closed: false,
    points: null,
    shape: "circle",
    id: 1,
  },
  {
    x: 0,
    y: 0,
    scaleX: 0,
    scaleY: 0,
    rotation: 0,
    strokeWidth: 2,
    fill: "white",
    stroke: "black",
    draggable: false,
    radius: 0,
    radiusX: 0,
    radiusY: 0,
    width: 0,
    height: 0,
    closed: true,
    points: [
      794.8608703613281, 200.436993228783, 1117.8608703613281,
      444.43968271979367, 585.8608703613281, 580.4411817803569,
    ],
    shape: "triangle",
    id: "2",
  },
];
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

// const input = {
//   x: 1459.8608703613281,
//   y: 523.4405534976208,
//   scaleX: 0,
//   scaleY: 0,
//   rotation: 0,
//   strokeWidth: 2,
//   fill: "white",
//   stroke: "black",
//   draggable: false,
//   radius: 123,
//   radiusX: 0,
//   radiusY: 0,
//   width: 0,
//   height: 0,
//   closed: false,
//   points: null,
//   shape: "circle",
//   id: 2,
// };

let tmp = [];

input.forEach((shape) =>
  tmp.push(
    tools.js2xml(
      { shape },
      {
        compact: true,
      }
    )
  )
);

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
    points: tmp, // original has an empty object
    shape: shape.shape._text,
    id: parseInt(shape.id._text),
  };
}

console.log(tmp);
let res = [];
tmp.forEach((shape) => {
  let ok = new Shape(tools.xml2js(shape, { compact: true }).shape);
  console.log(ok);
  ok = cleanShape(ok);
  res.push(ok);
});

console.log(res);
