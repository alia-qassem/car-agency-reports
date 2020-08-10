const assert = require('chai').assert;
const Suv = require('../src/vehicle/Suv.js');
const FourXFour = require('../src/vehicle/Fourxfour.js');
const Sedan = require('../src/vehicle/Sedan.js');
const Rental = require('../src/Rental.js');
const Customer = require('../src/Customer.js');

describe('The Statement should:', () => {
  it('Match current behavior', () => {

    let blueHonda = new Sedan('Blue Honda 2008');
    let greyJeep = new FourXFour('Grey Jeep 2013');
    let RedSunny = new Sedan('Red Sunny 2014');
    let BlueBMW = new Suv('Blue X3 2017');

    let hondaRental = new Rental(blueHonda, 431, 4, false);
    let jeepRental = new Rental(greyJeep, 744, 4, false);
    let sunnnyRental = new Rental(RedSunny, 591, 3, true);
    let x3Rental = new Rental(BlueBMW, 240, 5, false);

    let virginGates = new Customer('Virgin Gates');
    let sharmDreams = new Customer('Sharm Dreams');

    virginGates.addRental(hondaRental);
    virginGates.addRental(jeepRental);
    virginGates.addRental(sunnnyRental);

    sharmDreams.addRental(x3Rental);

    assert.equal(virginGates.statement(), "Rental Record for:Virgin Gates\n\t\"Blue Honda 2008\"\tLE 912.00\n\t\"Grey Jeep 2013\"\tLE 850.00\n\t\"Red Sunny 2014\"\tLE 1268.96\nAmount owed is LE 3030.96\nYou earned: 4 new Reward Points\n\n");
    assert.equal(sharmDreams.statement(), "Rental Record for:Sharm Dreams\n\t\"Blue X3 2017\"\tLE 760.00\nAmount owed is LE 760.00\nYou earned: 1 new Reward Points\n\n");

  });
});
