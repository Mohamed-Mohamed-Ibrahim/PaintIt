const factory = require("./shapeFactory");
const saveloadService = require("./saveloadService");
const Shape = require("../model/Shape").Shape;
const actionSequenceService = require("./actionSequenceService");

let shape = null;
let loadFilePath = null;

const getShape = (req, res) => {
  return shape;
};

const setShape = (req, res) => {
  console.log(123);
  const data = req.body;
  // console.log(data);
  if (data.shape != null) {
    shape = new Shape(data);
  } else {
    shape.id = data.id;
  }
  // console;
  console.log(shape);

  res.end();
};

const deleteShape = (req, res) => {
  let latestState = structuredClone(actionSequenceService.getLatestState());

  latestState = latestState.filter((x) => x.id != shape.id);

  actionSequenceService.setLatestState(latestState);

  res.end();
};

const copyShape = (req, res) => {
  let latestState = structuredClone(actionSequenceService.getLatestState());
  console.log(shape);
  latestState.push(structuredClone(shape));

  actionSequenceService.setLatestState(latestState);

  res.end();
};

const changeShape = (req, res) => {
  let latestState = structuredClone(actionSequenceService.getLatestState());
  latestState = latestState.filter((x) => x.id != shape.id);

  latestState.push(shape);
  actionSequenceService.setLatestState(latestState);
  res.end();
};

const saveProgram = (saveLoc, format, res) => {
  let tmp = [
    {
      x: 550.7652206420898,
      y: 211.60870361328125,
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
      points: [],
      shape: "circle",
      id: 1,
    },
    {
      x: 1379.7652206420898,
      y: 348.60870361328125,
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
      points: [],
      shape: "circle",
      id: 2,
    },
    {
      x: 817.7652206420898,
      y: 570.6087036132812,
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
      points: [],
      shape: "circle",
      id: 3,
    },
  ];
  if (saveLoc == null) return;

  if (format == 1) {
    save.saveJson(actionSequenceController.getLatestState(), saveLoc + ".json");
    // saveloadService.saveJson(tmp, saveLoc + ".json");
  } else if (format == 2) {
    saveloadService.saveXML(
      actionSequenceController.getLatestState(),
      saveLoc + ".xml"
    );
    // saveloadService.saveXML(tmp, saveLoc + ".xml");
  } else if (format == 3) {
    saveloadService.saveJson(
      actionSequenceController.getLatestState(),
      saveLoc + ".json"
    );
    saveloadService.saveXML(
      actionSequenceController.getLatestState(),
      saveLoc + ".xml"
    );
  }

  res.end();
};

const SetLoadFile = (userLoadFilePath, res) => {
  loadFilePath = userLoadFilePath;
  res.end();
};

const loadProgram = (res) => {
  let loadFilePath = "D:/Life/projects/PaintIt/okok.json";
  if (loadFilePath.includes(".json")) {
    const state = saveloadService.loadJson(loadFilePath);
    actionSequenceService.setLatestState(state);
    console.log(state);
  } else if (loadFilePath.includes(".xml")) {
    saveloadService.loadXML(loadFilePath);
  }
  loadFilePath = null;
  res.end();
};

module.exports = {
  setShape,
  getShape,
  deleteShape,
  copyShape,
  changeShape,
  saveProgram,
  SetLoadFile,
  loadProgram,
};
// [
//   {
//     "@type": "circle",
//     shape: "circle",
//     x: 257.1833650396126,
//     y: 205.43704834130372,
//     scaleX: 0,
//     scaleY: 0,
//     rotation: 0,
//     strokeWidth: 2,
//     id: "1",
//     fill: "white",
//     stroke: "black",
//     draggable: false,
//     points: null,
//     radius: 123,
//     radiusX: 0,
//     radiusY: 0,
//     width: 0,
//     height: 0,
//     closed: false,
//   },
//   {
//     "@type": "circle",
//     shape: "circle",
//     x: 960.1854301228639,
//     y: 448.4397268098102,
//     scaleX: 0,
//     scaleY: 0,
//     rotation: 0,
//     strokeWidth: 2,
//     id: "2",
//     fill: "white",
//     stroke: "black",
//     draggable: false,
//     points: null,
//     radius: 123,
//     radiusX: 0,
//     radiusY: 0,
//     width: 0,
//     height: 0,
//     closed: false,
//   },
// ][
//   ({
//     shape: "circle",
//     x: 361.1836705426825,
//     y: 279.4378640066102,
//     strokeWidth: 2,
//     id: 1,
//     fill: "white",
//     stroke: "black",
//   },
//   {
//     shape: "circle",
//     x: 1024.185618124753,
//     y: 570.4410715553155,
//     strokeWidth: 2,
//     id: 2,
//     fill: "white",
//     stroke: "black",
//   })
// ];
