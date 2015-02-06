var should = require('should'),
  rectangle = require('../index.js');

describe('boundingBoxToRectangle', function() {

  describe('converts simple bounding box', function() {

    it('list', function() {
      var rect = rectangle.boundingBoxToRectangle(
        // swx,swy,nex,ney
        5.625000,42.629917,26.894531,52.599711
      );

      rect.x.should.equal(5.625);
      rect.y.should.equal(52.599711);

      // width = |swx - nex|
      rect.width.should.equal(Math.abs(5.625 - 26.894531));

      // height = |swy - ney|
      rect.height.should.equal(Math.abs(42.629917 - 52.599711));
    });

    it('string', function() {
      var rect = rectangle.boundingBoxToRectangle(
        // swx,swy,nex,ney
        '5.625000,42.629917,26.894531,52.599711'
      );

      rect.x.should.equal(5.625);
      rect.y.should.equal(52.599711);

      // width = |swx - nex|
      rect.width.should.equal(Math.abs(5.625 - 26.894531));

      // height = |swy - ney|
      rect.height.should.equal(Math.abs(42.629917 - 52.599711));
    });

    it('array', function() {
      var rect = rectangle.boundingBoxToRectangle(
        // swx,swy,nex,ney
        [5.625000,42.629917,26.894531,52.599711]
      );

      rect.x.should.equal(5.625);
      rect.y.should.equal(52.599711);

      // width = |swx - nex|
      rect.width.should.equal(Math.abs(5.625 - 26.894531));

      // height = |swy - ney|
      rect.height.should.equal(Math.abs(42.629917 - 52.599711));
    });

  });

});

describe('Rectangle', function() {
  describe('.containsPoint()', function() {
    it('finds if a Rectangle contains a point', function() {
      new rectangle(2, 2, 4, 4).containsPoint(3, 3).should.be.ok;
    });

    it('finds if a Rectangle contains a point equal to x,y', function() {
      new rectangle(2, 2, 4, 4).containsPoint(2, 2).should.be.ok;
    });

    it('finds if a Rectangle contains a point equal to bottomRight', function() {
      new rectangle(2, 2, 4, 4).containsPoint(6, 6).should.be.ok;
    });

    it('finds if a Rectangle does not contain a point', function() {
      new rectangle(2, 2, 4, 4).containsPoint(-10, -10).should.not.be.ok;
    });
  });

  describe('.intersects()', function() {
    it('finds if Rectangles intersect', function() {
      var rect1 = new rectangle(2, 2, 2, 2),
        rect2 = new rectangle(3, 3, 2, 2);

      rect1.intersects(rect2).should.be.ok;
    });

    it('finds if equal Rectangles intersect', function() {
      var rect1 = new rectangle(2, 2, 2, 2),
        rect2 = new rectangle(2, 2, 2, 2);

      rect1.intersects(rect2).should.be.ok;
    });

    it('finds if one Rectangle contains another', function() {
      var rect1 = new rectangle(2, 2, 4, 4),
        rect2 = new rectangle(3, 3, 1, 1);

      rect1.intersects(rect2).should.be.ok;
    });

    it('finds if Rectangles do not intersect', function() {
      var rect1 = new rectangle(2, 2, 2, 2),
        rect2 = new rectangle(5, 3, 2, 2);

      rect1.intersects(rect2).should.not.be.ok;
    });
  });
});
