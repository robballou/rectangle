/**
 * Rectangle class
 */
var Rectangle = function(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
};

module.exports = Rectangle;


Rectangle.prototype.bottom = function() {
  return this.y + this.height;
};

Rectangle.prototype.bottomLeft = function() {
  return [this.x, this.y + this.height];
};

Rectangle.prototype.bottomRight = function() {
  return [this.x + this.height, this.y + this.height];
};

Rectangle.prototype.containsPoint = function(x, y) {
  return x >= this.x && x <= (this.x + this.width) &&
    y >= this.y && y <= (this.y + this.height);
};

Rectangle.prototype.intersects = function(otherRectangle) {
  return !(otherRectangle.left() > this.right() ||
           otherRectangle.right() < this.left() ||
           otherRectangle.top() > this.bottom() ||
           otherRectangle.bottom() < this.top());
};

Rectangle.prototype.left = function() {
  return this.x;
};

Rectangle.prototype.right = function() {
  return this.x + this.width;
};

Rectangle.prototype.top = function() {
  return this.y;
};

Rectangle.prototype.topLeft = function() {
  return [this.x + this.width, this.y];
};

Rectangle.prototype.topRight = function() {
  return [this.x, this.y];
};

/**
 * Convert a geographic bounding box to a Rectangle.
 *
 *     southwest_lng,southwest_lat,northeast_lng,northeast_lat
 *
 * Or:
 *
 *     min Longitude , min Latitude , max Longitude , max Latitude
 */
Rectangle.boundingBoxToRectangle = function() {
  var bboxCoordinates;
  if (arguments.length === 1) {
    try {
      bboxCoordinates = arguments[0].split(',').map(parseFloat);
    }
    catch (err) {
      bboxCoordinates = arguments[0];
    }
  }
  else if (arguments.length === 4) {
    bboxCoordinates = [arguments[0], arguments[1], arguments[2], arguments[3]];
  }

  if (bboxCoordinates) {
    var
      x = bboxCoordinates[0],
      y = bboxCoordinates[3],
      w = Math.abs(bboxCoordinates[0] - bboxCoordinates[2]),
      h = Math.abs(bboxCoordinates[1] - bboxCoordinates[3]);
    return new Rectangle(x, y, w, h);
  }

  return false;
};
