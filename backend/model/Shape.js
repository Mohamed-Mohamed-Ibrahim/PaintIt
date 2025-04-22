function Shape(data) {
  this.x = 0;
  this.y = 0;
  this.scaleX = 0;
  this.scaleY = 0;
  this.rotation = 0;
  this.strokeWidth = 0;
  this.fill = "white";
  this.stroke = "black";
  this.draggable = false;
  this.radius = 0;
  this.radiusX = 0;
  this.radiusY = 0;
  this.width = 0;
  this.height = 0;
  this.closed = false;
  this.points = [];
  this.shape = "circle";
  this.id = -1;

  if (data.x != undefined) this.x = data.x;
  if (data.y != undefined) this.y = data.y;
  if (data.scaleX != undefined) this.scaleX = data.scaleX;
  if (data.scaleY != undefined) this.scaleY = data.scaleY;
  if (data.rotation != undefined) this.rotation = data.rotation;
  if (data.strokeWidth != undefined) this.strokeWidth = data.strokeWidth;
  if (data.fill != undefined) this.fill = data.fill;
  if (data.stroke != undefined) this.stroke = data.stroke;
  if (data.draggable != undefined) this.draggable = data.draggable;
  if (data.radius != undefined) this.radius = data.radius;
  if (data.radiusX != undefined) this.radiusX = data.radiusX;
  if (data.radiusY != undefined) this.radiusY = data.radiusY;
  if (data.width != undefined) this.width = data.width;
  if (data.height != undefined) this.height = data.height;
  if (data.closed != undefined) this.closed = data.closed;
  if (data.points != undefined) this.points = data.points;
  if (data.shape != undefined) this.shape = data.shape;
  if (data.id != undefined) this.id = data.id;
}

module.exports = {
  Shape,
};
