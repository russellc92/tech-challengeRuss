let assert = require('assert');
const classifyText = require('./classifyText');

let options1 = { subWordInclusive: false, caseSensitive: true };
let options2 = { subWordInclusive: true, caseSensitive: false };
let options3 = { subWordInclusive: true, caseSensitive: true };
let options4 = { subWordInclusive: false, caseSensitive: false };

// alert, Alert
let setenceA =
  "This symbol is intended to alert the user to the presence of uninsulated dangerous voltage within the product's enclosure that may be of sufficient magnitude to constitute a risk of electric shock to persons";
let setenceB =
  "This symbol is intended to Alert the user to the presence of uninsulated dangerous voltage within the product's enclosure that may be of sufficient magnitude to constitute a risk of electric shock to persons";

// alert, Nothing
// Alert, Nothing
let setenceC =
  "This symbol is intended to alert the user to the presence of uninsulated dangerous voltage within the product's enclosure that Nothing may be of sufficient magnitude to constitute a risk of electric shock to persons";
let setenceD =
  "This symbol is intended to Alert the user to the presence of uninsulated dangerous voltage within the product's enclosure that Nothing may be of sufficient magnitude to constitute a risk of electric shock to persons";

// alert, nothing
let setenceE =
  "This symbol is intended to alert the user to the presence of uninsulated dangerous voltage within the product's enclosure that nothing may be of sufficient magnitude to constitute a risk of electric shock to persons";
// Alert, Nothing
let setenceF =
  "This symbol is intended to Alert the user to the presence of uninsulated dangerous voltage within the product's enclosure that Nothing may be of sufficient magnitude to constitute a risk of electric shock to persons";
// Alert, nothing
let setenceG =
  "This symbol is intended to Alert the user to the presence of uninsulated dangerous voltage within the product's enclosure that nothing may be of sufficient magnitude to constitute a risk of electric shock to persons";

// Alert, 'Critical', 'Immediate', 'Important', 'Urgent', 'Warning
// Nothing
let setenceH =
  "This symbol is intended to give Immediate Alert the user to Alert. the presence of Critical uninsulated Alert dangerous Nothing voltage within the product's Important enclosure that nothing may be of sufficient magnitude to Warning constitute a risk of electric shock to Urgent persons";

let setenceI = 'Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing';

// alert, Alert, 'Critical', 'Immediate', 'Important', 'Urgent', 'Warning
// Nothing
let setenceJ =
  "This symbol is intended to give Immediate Alert the user to alert. the presence of Critical uninsulated Alert dangerous Nothing voltage within the product's Important enclosure that nothing may be of sufficient magnitude to Warning constitute a risk of electric shock to Urgent persons";

let tets = 'Alert Alert Alert alert Nothing nothing nothing nothing nothing nothing nothing';
const run = () => {
  let a = classifyText(tets, options1);
  console.log(a);
  //assert(false);
};

run();
