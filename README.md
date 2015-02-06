# Rectangle

<img src="https://travis-ci.org/robballou/rectangle.svg?branch=master" />

Do things with rectangles in JavaScript.



```javascript
var Rectangle = require('rectangle');

// create rectangles with the Rectangle class:
//
//   new Rectangle(x, y, width, height)

// create a 2x2 rectangle at 1,1
var rect1 = new Rectangle(1, 1, 2, 2);

// check if the rect contains a point
if (rect1.containsPoint(2, 2)) {
  // do stuff
}

// check if two rectangles intersect
var rect2 = new Rectangle(-10, -10, 1, 1);

// nope
rect1.intersects(rect2);

// yes!
var rect3 = new Rectangle(2, 2, 4, 4);
rect1.intersects(rect3);
```

## See also

* https://github.com/rahatarmanahmed/rectangle-node
