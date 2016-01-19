describe ("triangle", function() {
  it ("is an equilateral triangle if all three sides are equal", function(){
    expect (triangle(10,10,10)).to.equal(true);
  });

  it ("is a scalene triangle if no sides are equal", function() {
    expect (triangle(10,9,8)).to.equal(true);
  });

  it ("is an isosceles triangle if two sides are equal", function() {
    expect (triangle(10,10,15)).to.equal(true);
  });

  it ("is not a triangle if the sum of the lengths of two sides, is less than or equal to the length of the third side", function() {
    expect (triangle(10,10,30)).to.equal(false);
  });
});
