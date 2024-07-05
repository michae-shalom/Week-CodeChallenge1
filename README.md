in this code challenge were are tasked with creating a function that calculates students grades. The question is as below
//Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

To begin
I will use the function keyword to define a function called studentGradeGenerator with no parameters within the brackets. Inside the function body, I will create two variables using the 'const'. The first variable will be assigned PROMPT function- that prompts the user/student/teacher to enter marks in the range between 0 and 100
the Second variable should convert the input into a number
Still within the function body, I should have a way of validating the input. As such, I must pass the condition using the logical operator or (!!). The essence of validation is because, someone may input a figure which is a string for instance, or even a number outside the range for instance -1 or 120 or 13000. These numbers will not fall within our expected input and should therefore, throw an error message and prompt the user to review what they keyed in. Once I validate our input, can go ahead and pass conditionals statements using the if, else if and else that return the grades corresponding to the marks that the user will input. Within the conditionals, we will have return functions, returning the grade based on what is input. The grades with range from A-E depending on the score in the range of 0-100. 

references used
https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt from MDN docs Js
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
