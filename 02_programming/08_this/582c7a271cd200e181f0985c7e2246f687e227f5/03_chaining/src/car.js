// Complete and add needed car properties:

const car = {
  speed: 0,
  distance: 0,
  distanceTampon: 0,
  setTimeHours: [],
  speedArray: [],
  start: function() {
    this.speed = 0;
    this.distance = 0;
    this.setTimeHours = [];
    this.speedArray = [];
    this.distanceTampon = 0;
    return car;
  },
  changeSpeed: function(nion){
    this.speedArray.push(nion);
    return car;
  },
  drive: function(minutes){
    this.setTimeHours.push(minutes);
    return car;
  },
  showDistance: function(){
    let i = 0;
    while (i < this.setTimeHours.length){
      console.log(i, this.setTimeHours[i], this.speedArray[i]);
      this.distanceTampon = this.setTimeHours[i] / 60 * this.speedArray[i];
      this.distance = this.distance + this.distanceTampon;
      console.log(this.distance, this.distanceTampon);
      i++;
    }
    console.log(`${this.distance} Km`);
    return car;
  }
};
module.exports = car;
