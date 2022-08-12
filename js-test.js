
///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                        Javascript Helpers                                         //
///////////////////////////////////////////////////////////////////////////////////////////////////////

function calulatePrice(price, taxes, description) {
  taxes = taxes ?? .07; // Same as || except handles if taxes is undefined, zero is not considered false.
  description = description || 'Golf Equipment';
  const total = Math.round((price * (1 + taxes)) * 100) / 100;

  // Style each variable in the console log.
  console.log(`%c ${description} %c Price: $${price}, %c Tax: ${taxes}, %c Total with tax: $${total}`,
  "font-weight: bold; color: red",
  "color: cyan",
  "color: magenta",
  "color: green");
}

calulatePrice('234.56', .06, 'Wilson Golf Driver');
calulatePrice('234.56', 0, 'Wilson Tee');
calulatePrice('234.56', undefined, 'Wilson Golf Gloves');

class Person {
  constructor(name, address, hobbies) {
    this.name = name;
    this.address = address;
    this.hobbies = hobbies;
  }

  print() {
    console.log(JSON.stringify(this));
  }
}

function printPersonStreet(person) {
  // Make sure the values exist.
  console.log(person?.address?.street);
}

const joeDude = new Person(
  "Joe",
  { street: "123 main street", city: "New Smyrna" },
  ["Surfing, SUP", "Cycling"]
);

console.log(joeDude.print());

// Does the attribute exist and if so is it an array?
console.log(joeDude.hobbies?.[0]);

// Does printName exist and is it a function?
console.log(joeDude.printName?.());

printPersonStreet(joeDude);

const personName = "Austin Powers";
const favoriteFood = "Fish and Chips";

// The normal way to initialize an object.
// const foo = {
//   theName: personName,
//   theFavoriteFood: favoriteFood
// }

// Easy way to initialize an object.
const foo = {
  personName,
  favoriteFood
}

console.log("foo: " + JSON.stringify(foo));

const hasFavoriteFood = foo.favoriteFood ? foo.favoriteFood : "No favorite food found.";

console.log("Has favorite food: " + hasFavoriteFood);

// Style the button here.
const button = document.querySelector("[id='myButton']");
button.style.backgroundColor = "green";
