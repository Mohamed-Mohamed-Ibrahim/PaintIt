const Shape = require("./Shape").Shape;

function Circle(data) {
  this.shape = new Shape(data);
}

module.exports = {
  Circle,
};
