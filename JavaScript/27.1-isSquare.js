function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Square.prototype.isSquare = function () {
    if (this.a !== this.b)
        return false;
    if(this.a !== this.c)
        return false;
    if(this.a !== this.d)
        return false;
    return true;
}

const squ1 = new Square(1, 2, 3, 4);
const squ2 = new Square(1, 1, 1, 1);

console.log(squ1.isSquare());
console.log(squ2.isSquare());