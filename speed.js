 //the function definition and within the function body we will create a variable for prompt
 function speedDetector() {
    
    //create a prompt interface
    const speed = prompt("Enter the speed of the car:");

    //the parseInt function for coverting input string to integers
    const speedNumber = parseInt(speed, 10);
  
    //input validator. An error should be thrown if an invalid number is keyed
    if (isNaN(speedNumber) || speedNumber < 0) {
      return "Invalid speed entered. Please enter a valid number.";
    }
  //variables defining the named..
    const speedLimit = 70;
    const demeritPointThreshold = 5;

  //check speed limits if less of equal to specified limit
    if (speedNumber <= speedLimit) {
      return "Ok";
    } else {
      const demeritPoints = Math.floor((speedNumber - speedLimit) / demeritPointThreshold);

      //calculating the demerit points
      if (demeritPoints > 12) {
        return "License suspended";
      } else {
        return `Points: ${demeritPoints}`;
      }
    }
  }
//instead of console.log we use the alert function
  alert(speedDetector());
  