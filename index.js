//start by defining the function
function studentGradeGenerator() {

  //this part is to promt the user to enter their marks
    const marks = prompt("Enter student marks (between 0 and 100):");

    //the parseInt will return integer after taking strings
    const scores = parseInt(marks);

//input validator that will ensure an error is trhown if we input values outside the range
    if (scores > 100 || scores < 0 || isNaN(scores)) {
      return "Invalid marks entered. Please enter a number between 0 and 100.";
    }

    //the conditional statements to categorize/return grades based on the scores input by the user
    if (scores > 79) {
      return "Grade: A";
    } else if (scores >= 60) {
      return "Grade: B";
    } else if (scores >= 50) {
      return "Grade: C";
    } else if (scores >= 40) {
      return "Grade: D";
    } else {
      return "Grade: E";
    }
  
  }
//the elert function will ensure afetr we input the score and click okay, we will get feedback promptly on the screen. The function call 
  alert(studentGradeGenerator());

