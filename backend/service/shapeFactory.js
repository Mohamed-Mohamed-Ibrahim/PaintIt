const Circle = require("../entity/Circle").Circle;

const getShape = (data) => {
  switch (data.shape) {
    case "circle":
      return new Circle(data);
    // case "square":
    //   return new Square(data);
    // case "rectangle":
    //   return new Rectangle(data);
    // case "ellipse":
    //   return new Ellipse(data);
    // case "line":
    //   return new SegmentLine(data);
    // case "triangle":
    //   return new Triangle(data);
    default:
      return null;
  }
};

module.exports = {
  getShape,
};
