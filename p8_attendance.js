let classesHeld = parseInt(prompt("Enter the no. of classes held:"));
let classesAttended = parseInt(prompt("Enter the no. of classes attended:"));
let attendancePercentage = (classesAttended / classesHeld) * 100;
console.log(`Attendance Percentage: ${attendancePercentage}%`);
if (attendancePercentage < 75) {
  console.log("Not Allowed");
} else {
  console.log("Allowed");
}