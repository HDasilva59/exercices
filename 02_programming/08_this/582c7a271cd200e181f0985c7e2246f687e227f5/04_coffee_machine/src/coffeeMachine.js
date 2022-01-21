const machine = {
  litersOfCoffee: 10,
  fillWithLitersOfCoffee: function (coffee) {
    this.litersOfCoffee = this.litersOfCoffee + coffee;
  },

  expresso: function () {
    if (this.litersOfCoffee >= 0.08) {
      this.litersOfCoffee = this.litersOfCoffee - 0.08;
      console.log(`${this.litersOfCoffee}`);
      return true;
    } else {
      console.log("There is not enough Liters of coffee in this machine");
      return false;
    }
  },

  longCoffee: function () {
    if (this.litersOfCoffee >= 0.15) {
      this.litersOfCoffee = this.litersOfCoffee - 0.15;
      return true;
    } else {
      console.log("There is not enough Liters of coffee in this machine");
      return false;
    }
  },

};

module.exports = machine;
