const factory = require("./shapeFactory");
const Shape = require("../model/Shape").Shape;
const actionSequenceService = require("./actionSequenceService");

let shape = null;

const getShape = (req, res) => {
  return shape;
};

const setShape = (req, res) => {
  console.log(123);
  const data = req.body;

  //   console.log(data);

  if (data.shape != null) {
    shape = new Shape(data);
  } else {
    shape.id = data.id;
  }
  console.log(shape);

  res.end();
};

const deleteShape = (req, res) => {
  let latestState = actionSequenceService.getLatestState();

  latestState.filter((x) => {
    x.id != shape.id;
  });

  actionSequenceService.setLatestState(latestState);

  res.end();
};

const copyShape = (req, res) => {
  let latestState = actionSequenceService.getLatestState();

  latestState.push(structuredClone(shape));

  actionSequenceService.setLatestState(latestState);

  res.end();
};

const changeShape = (req, res) => {
  let latestState = actionSequenceService.getLatestState();

  latestState.filter((x) => {
    x.id != shape.id;
  });

  latestState.push(shape);

  actionSequenceService.setLatestState(latestState);

  res.end();
};

module.exports = {
  setShape,
  getShape,
  deleteShape,
  copyShape,
  changeShape,
};
