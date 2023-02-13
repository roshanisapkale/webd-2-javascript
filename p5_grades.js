let marks = prompt("Enter marks")
marks = Number.parseInt(marks)
if(marks<0||marks>100)
  console.log("Invalid")
else
{
  if(marks<25)
  console.log("Grade : F")
else if(marks>=25 & marks<=45)
  console.log("Grade : E")
else if(marks>=45 & marks<=50)
  console.log("Grade : D")
else if(marks>=50 & marks<=60)
  console.log("Grade : C")
else if(marks>=60 & marks<=80)
  console.log("Grade : B")
else
  console.log("Grade : A")
}