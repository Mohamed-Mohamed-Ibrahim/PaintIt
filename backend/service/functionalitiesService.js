const factory = require("./shapeFactory");
const Shape = require("../model/Shape").Shape;
const actionSequenceService = require("./actionSequenceService")

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
    shape.setId(data.id);
  }
  console.log(shape);

  res.end();
};

const deleteShape = (req, res) => {
  return shape;
};

const copyShape = (req, res) => {
  return shape;
};

const changeShape = (req, res) => {
  return shape;
};

module.exports = {
  setShape,
  getShape,
  deleteShape,
  copyShape,
  changeShape,
};
