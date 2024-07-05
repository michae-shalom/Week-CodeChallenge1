in this code challenge were are tasked with creating a function that calculates students grades. The question is as below
//Challenge 1: Student Grade Generator (Toy Problem)
challenge 1
Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

To begin
I will use the function keyword to define a function called studentGradeGenerator with no parameters within the brackets. Inside the function body, I will create two variables using the 'const'. The first variable will be assigned PROMPT function- that prompts the user/student/teacher to enter marks in the range between 0 and 100
the Second variable should convert the input into a number
Still within the function body, I should have a way of validating the input. As such, I must pass the condition using the logical operator or (!!). The essence of validation is because, someone may input a figure which is a string for instance, or even a number outside the range for instance -1 or 120 or 13000. These numbers will not fall within our expected input and should therefore, throw an error message and prompt the user to review what they keyed in. Once I validate our input, can go ahead and pass conditionals statements using the if, else if and else that return the grades corresponding to the marks that the user will input. Within the conditionals, we will have return functions, returning the grade based on what is input. The grades with range from A-E depending on the score in the range of 0-100. 

Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.


   Notes

For this second challenge, my goal is to write a program for detecting car speeds above speef limits, giving drivers the demerit points. Again, a prompt module will help when the callback is passed. So after defining the function with a name speedDetector, within it we create a variable for the promppt that asks the user to ennter their car speed. 

to be included alo are the variables declared using the const, to define the speed limit and the demerit point threshold. 

Using conditional statemnets, pass arguments to check the the speedLimit and either proceed to calculet the demerit points. At points above 12, the return should give the license is suspended. Pass the function call by using the alert fucntion. 

reference
MDN docs JS
W3schools js
Canvas-Functions
references used
https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt from MDN docs Js
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
