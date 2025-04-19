function Shape(data) {
  this.shape = data.shape;
  this.x = data.x;
  this.y = data.y;
  this.scaleX = data.scaleX;
  this.scaleY = data.scaleY;
  this.rotation = data.rotation;
  this.strokeWidth = data.strokeWidth;
  this.id = data.id;
  this.fill = data.fill;
  this.stroke = data.stroke;
  this.draggable = data.draggable;
}

module.exports = {
  Shape,
};
