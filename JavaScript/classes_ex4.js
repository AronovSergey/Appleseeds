class Point {
    constructor(_x, _y){
        this.x = _x;
        this.y = _y;
    }

    getX() { return this.x; }
    getY() { return this.y; }
    addToX(_x) { this.x += _x; }
    addToY(_y) { this.y += _y; }
    setX(_x) { this.x = _x; }
    setY(_y) { this.y = _y; }
    setY(_y) { this.y = _y; }
    addPoint(point) {
        this.x = point.getX();
        this.y = point.getY();
    }
    isSame(point) {
        if(this.x === point.getX() && this.y === point.getY())
            return true;
        return false;
    }
    print() { console.log(`x : ${this.x}, y : ${this.y}`); }
}


class PointWorld {
    constructor() {
        this.list = [];
    }

    add(point) {
        this.list.push(point);
    }

    sortByY() {
        return this.list.slice().sort((a, b) => a.getY() - b.getY());
    }

    getUnique() {
        let result = this.list.slice();
        for(let i = 0; i < result.length - 1; i++){
            for(let j = i + 1; j < result.length; j++){
                if(result[i].isSame(result[j])){
                    result.splice(j, 1);
                }
            }
        }
        return result;
    }

    sumOfX() {
        if(this.list.length === 0) return 0;
        let result = this.list[0].getX();
        for(let i = 1; i < this.list.length; i++)
            result += this.list[i].getX();
        return result;
    }

    indexOfPoint(point){
        for(let i = 0; i < this.list.length; i++){
            if(point.isSame(this.list[i]))
                return i;
        }   
        return false;
    }
}


const pointWorld = new PointWorld();
pointWorld.add(new Point(4, 7));
pointWorld.add(new Point(6, 2));
pointWorld.add(new Point(11, 12));
pointWorld.add(new Point(11, 12));
pointWorld.add(new Point(4, 7));
pointWorld.add(new Point(1, 1));

// console.log(pointWorld.sortByY());

// console.log(pointWorld.getUnique());

// console.log(pointWorld.sumOfX());

const point = new Point(11, 12);
const point2 = new Point(8, 7);
console.log(pointWorld.indexOfPoint(point));
console.log(pointWorld.indexOfPoint(point2));

