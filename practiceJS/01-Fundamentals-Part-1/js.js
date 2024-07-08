let js = "amazing";

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

("Phu");
console.log("Phu");
console.log(23);

let firstName = "dai ca Phu";
console.log(firstName);
console.log(firstName);
console.log(firstName);
// let firstNamePerson = "Phu";
// let first_name_person = "Phu";
// let FirstNamePerson = "Phu";
// let firstnameperson = "Phu";

// Variable name conventions
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
// let job1 = "programmer";

//loi khi khai bao bien
// let 3years = 3;
// let phu&dai = "phu dai";
// let new = 27;

//loi khi khai bao bien
// let function = 27;
// let for = 27;
// let let = 27;
// let return = 27;
// let if = 27;
// let else = 27;
//  let switch = 27;
// let case = 27;

//Cach khac phuc
let function1 = 27;
let for1 = 27;
let let1 = 27;
let return1 = 27;
let if1 = 27;
let else1 = 27;
let switch1 = 27;
let case1 = 27;
// let new1 = 27;

let person = "phu";

let PI = 3.1415;
console.log(PI);

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";
// let job1 = "programmer";
//  let job2 = "teacher";

console.log(myFirstJob);
console.log(myCurrentJob);

//values and variables

let country = "Vietnam";
let continent = "Asia";
let population = 100000000;
console.log(country);
console.log(continent);
console.log(population);

//data types
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);

//let, const and var
language = "Vietnamese";
const country1 = "Vietnam";
const continent1 = "Asia";
const isIsland1 = false;
// country1 = "USA";
// error
// isIsland1 = true;
// error
console.log(country1);
console.log(continent1);
console.log(isIsland1);

//Basic operators

console.log(population / 2);
population++;
console.log(population);
console.log(population > 60000000);
console.log(population < 33000000);
const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language;
console.log(description1);
//String and template literals
const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);
//taking decisions: if/else statements
if (population > 33000000) {
  console.log(`${country}'s population is above average`);
}
//Type conversion and coercion
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
//Equality operators: == vs. ===
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// //later : this helps us prevent bugs
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// }
// if (numNeighbours > 1) {
//   console.log("More than 1 border");
// }
// if (numNeighbours === 0) {
//   console.log("No borders");
// }
//Logical operators
language === "English" && population < 50000000 && !isIsland;
if (language === "English" && population < 50000000 && !isIsland) {
  console.log(`You should live in ${country} :)`);
}

//The switch statement

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

//The conditional (Ternary) operator
console.log(
  `${country}'s population is ${
    population > 33000000 ? "above" : "below"
  } average`
);

// let jsIsFun = true;
// console.log(jsIsFun);
// console.log(typeof jsIsFun);
// console.log(typeof true);
// console.log(typeof "Phu");

//Noice that we don't have to declare the type of the variable
// jsIsFun = "Yes!";
// console.log(typeof jsIsFun);
let year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

//let const and var
let age = 30;
age = 31;
const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

//Basic operators
//Math operators
const now = 2024;
const agePhu = now - 2003;
const ageSarah = now - 2018;
console.log(agePhu, ageSarah);

const firstName1 = "Phu";
const lastName = "Dai";
console.log(firstName1 + " " + lastName);

//Assignment operators
let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++;
// x--;
console.log(agePhu > ageSarah);
console.log(ageSarah >= 18);
console.log(now - 2003 > now - 2018);
//String

const firstName2 = "Phu";
const job2 = "teacher";
const birthYear2 = 2003;
const year2 = 2024;

const phu =
  "I'm " +
  firstName2 +
  ", a " +
  (year2 - birthYear2) +
  " years old " +
  job2 +
  "!";
console.log(phu);
//False string ?
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);

//Template literals
const phuNew = `I'm ${firstName2}, a ${year2 - birthYear2} years old ${job2}!`;
