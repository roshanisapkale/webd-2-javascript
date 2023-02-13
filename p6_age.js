let age1 = parseInt(prompt("Enter the age of person 1:"));
let age2 = parseInt(prompt("Enter the age of person 2:"));
let age3 = parseInt(prompt("Enter the age of person 3:"));
let oldest = age1;
let youngest = age1;
if (age2 > oldest) {
  oldest = age2;
}
if (age3 > oldest) {
  oldest = age3;
}
if (age2 < youngest) {
  youngest = age2;
}
if (age3 < youngest) {
  youngest = age3;
}
console.log("The youngest person is " + youngest + " years old.");
console.log("The oldest person is " + oldest + " years old.");
