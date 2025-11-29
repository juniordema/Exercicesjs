
 class cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    getVolume() {
        let volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        return volume.toFixed(4);
    }
}
let cyl = new cylinder(10, 20);
console.log("volume of cylinder:" + cyl.getVolume());
