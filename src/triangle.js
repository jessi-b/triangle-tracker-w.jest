//business logic

export default function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
};

Triangle.prototype.checkType = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  } else if ((this.side1 !== this.side2) && (this.side1 !== this.side3) && (this.side2 !== this.side3)) {
    return "scalene triangle";
  } else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
    return "equilateral triangle"
  } else {
    return "isosceles triangle";
  } 
};



// if ((side1 &&  side2 && side3 >= 1) && (side1 === side2) && (side2 === side3)) {
//   $("#equilateral").show();
// } else if ((side1 && side2 && side3 >= 1) && (side1 + side2) <= side3) {
//   $("#not-triangle").show();
// } else if ((side1 && side2 && side3 >= 1) && (side1 + side3) <= side2) {
//   $("#not-triangle").show();
// } else if ((side1 && side2 && side3 >= 1) && (side2 + side3) <= side1) {
//   $("#not-triangle").show();
// } else if ((side1 && side2 && side3 >= 1) && (side1 === side2) && (side1 !== side3)) {
//   $("#isosceles").show();
// } else if ((side1 && side2 && side3 >= 1) && (side2 === side3) && (side2 !== side1)) { 
//   $("#isosceles").show();
// } else if ((side1 && side2 && side3 >= 1) && (side3 === side1) && (side3 !== side2)) { 
//   $("#isosceles").show();
// } else if ((side1 && side2 && side3 >= 1) && (side1 !== side2) && (side2 !== side3)) {
//   $("#scalene").show();
// } else {
//   $("#invalid").show();
// }