// const items = [
//   { name: "bike", price: 100 },
//   { name: "tv", price: 1000 },
//   { name: "book", price: 10 },
//   { name: "table", price: 50 },
//   { name: "computer", price: 110 },
//   { name: "chair", price: 300 },
// ];

// for (let item of items) {
//   console.log(item);
// }

const array = [
  { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
  { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
  { name: "A. Curry", profession: "kikvorsman", age: 32 },
  { name: "F. Vonk", profession: "slangenmelker", age: 36 },
  { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
  { name: "Dr.Evil", profession: "digital overlord", age: 56 },
];

for (let person of array) {
  // console.log("Dit is de gehele persoon: ", [array]);
  console.log("Naam van de persoon: " + person.name);
  let birthYear = 2021 - person.age;
  console.log("Geboortejaar: " + birthYear);
  console.log(person.name + " is een " + person.profession + " van beroep.");

  if ((oldPerson = person.age >= 50)) {
    console.log(person.name + " is ouder dan 50");
  }
}
