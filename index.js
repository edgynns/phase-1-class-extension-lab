class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
    
    get countSides() {
      return this.sides.length;
    }
    
    get perimeter() {
      return this.sides.reduce((total, side) => total + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      return (
        this.sides[0] + this.sides[1] > this.sides[2] &&
        this.sides[1] + this.sides[2] > this.sides[0] &&
        this.sides[0] + this.sides[2] > this.sides[1]
      );
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      const side = this.sides[0];
      return this.countSides === 4 && this.sides.every(s => s === side);
    }
    
    get area() {
      return this.sides[0] * this.sides[0];
    }
  }