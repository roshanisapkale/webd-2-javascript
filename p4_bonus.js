let salary = parseInt(prompt("Enter your salary:"));
let yearsOfService = parseInt(prompt("Enter your years of service:"));
if (yearsOfService > 5) {
  let bonus = salary * 10/100;
  let totalSalary = salary + bonus;
  console.log("Your net bonus is: " + bonus);
  console.log("Your total salary is: " + totalSalary);
}else {
  console.log("Sorry, No bonus.");
}
