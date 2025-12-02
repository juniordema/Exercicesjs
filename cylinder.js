class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        let cylinderVolume = Math.PI * Math.pow(this.radius, 2) * this.height;
        return cylinderVolume.toFixed(4);
    }
}

let myCylinder = new Cylinder(10, 20);
console.log("Volume of cylinder: " + myCylinder.getVolume());
