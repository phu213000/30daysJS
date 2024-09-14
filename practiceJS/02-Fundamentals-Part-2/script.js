// // "user strict";

// // let hasDriversLicense = false;

// // const passTest = true;

// // if (passTest) hasDriversLicense = true;
// // if (hasDriversLicense) console.log("I can drive :D");

// // // const interface = "Audio";
// // // const private = 534;

// // function logger() {
// //   console.log("My name is Jonas");
// // }
// // //calling // running // invoking fucntion

// // logger();
// // logger();
// // logger();

// // function fuirtProcessor(apples, oranges) {
// //   console.log(apples, oranges);
// //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //   return juice;
// // }

// // const appleJuice = fuirtProcessor(4, 0);
// // console.log(appleJuice);

// // const appleOrangeJuice = fuirtProcessor(2, 4);
// // console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }

// const age = calcAge1(2003);
// console.log(age);

// const calcAge2 = function (birthYear) {

//   return 2024 - birthYear;
// };

// const age2 = calcAge2(2003);
// console.log(age2);

//Arrow function

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(2003);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(2003, "Jonas"));
// console.log(yearsUntilRetirement(2004, "Phu"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fuirtProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} organes. `;
//   return juice;
// }

// console.log(fuirtProcessor(2, 3));
// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// const yearsUntilRetirement = function (birthDay, firstName) {
//   const age = 2024 - birthDay;
//   const retirement = 65 - age;

//   // **Sửa lỗi: Đúng vị trí đóng ngoặc của khối if**
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     // **Đóng ngoặc else đúng vị trí**
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(2003, "Phu Ho"));
// console.log(yearsUntilRetirement(1950, "Phu 2k3"));

// const myFriend1 = `Lala`;
// const myFriend2 = `Lili`;
// const myFriend3 = `Lolo`;

// const friends = [`Lala`, `Lili`, `Lolo`];
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = `Lulu`;
// console.log(friends);
// const years = new Array(2003, 2004, 2005, 2006);

// Create Mark and John objects with properties and methods

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// // Calculate BMI for both
// mark.calcBMI();
// john.calcBMI();

// // Compare BMIs
// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// } else {
//   console.log(
//     `${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`
//   );
// }

// const phu = {
//   fullName: `Ho Truong Minh Phu`,
//   height: 1.7,
//   mass: 100,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const tu = {
//   fullName: "Nguyen Thi Cam Tu",
//   height: 1.6,
//   mass: 50,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// tu.calcBMI();
// phu.calcBMI();
// if (phu.bmi > tu.bmi) {
//   console.log(
//     ` ${phu.fullName}  has BMI (${phu.bmi}) is higher than ${tu.fullName}  has BMI (${tu.bmi})`
//   );
// } else if (tu.bmi > phu.bmi) {
//   console.log(
//     ` ${tu.fullName}  has BMI (${tu.bmi}) is higher than ${phu.fullName}  has BMI (${phu.bmi})`
//   );
// } else {
//   console.log(
//     ` ${tu.fullName}  has BMI (${tu.bmi}) is equal as  ${phu.fullName}  has BMI (${phu.bmi})`
//   );
// }

// console.log(`Lifting weight repetition 1 🤼‍♂️`);
// console.log(`Lifting weight repetition 2 🤼‍♂️`);
// console.log(`Lifting weight repetition 3 🤼‍♂️`);
// console.log(`Lifting weight repetition 4 🤼‍♂️`);
// console.log(`Lifting weight repetition 5 🤼‍♂️`);

// console.log(`Lifting weight repetition 6 🤼‍♂️`);
// console.log(`Lifting weight repetition 7 🤼‍♂️`);
// console.log(`Lifting weight repetition 8 🤼‍♂️`);
// console.log(`Lifting weight repetition 9 🤼‍♂️`);
// console.log(`Lifting weight repetition 10 🤼‍♂️`);

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight rep ${rep}`);
}
