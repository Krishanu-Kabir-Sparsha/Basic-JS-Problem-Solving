//____________________________________________________01________________________________________________________________________________//
// Question 1 is completed. html and js now are connected in line 15 of index.html file. 


//____________________________________________________02________________________________________________________________________________//

// Question 2: How to Write Variables in Javascript? Write at least 3 Variables. 
// Ans: Usually to write variables in JavaScript, there are three keywords used. Which are; var , let and const. I will give individual examples for them. 

//using var;
// var roll = 10;
// var fullName = "Allu Arjun";
// var section = 'C';
// console.log(fullName, section, roll);

//using let;
// let age = 50;
// let fullName = "Mohsin Khan";
// let salary = 50000.500
// let follow = true; 
// console.log(fullName, age, salary, follow);

//using const; const will let the variable to set as a const and never can change. 
// const firstNumber = 40.54;
// const secondNumber = 45.94;
// console.log(firstNumber,secondNumber);


//_____________________________________________________03_______________________________________________________________________________//

//Question 3: What is the difference between let, var, and const variables?
//Ans:- From Following the answer of question 2; my following process will indicate the differences between these three variables.

// const firstNumber = 40.54; 
// const firstNumber = 40.15454874; can't possible to override.
//console.log("firstNumber"); will print 40.54;

// let number = 15;
// let number = 10; can't possible to override.

// let number1 = 15;
// let number2 = 20;
// console.log(number1,number2);
// This is now printable. 

//once a const is called, then it can not be override. But it is possible using var. But also var is backdated. let is mostly used now on. 

// var firstName = "Kabir"; 
// var firstName = "Sparsha"; 
// var firstName = "New Name"; 
// console.log(firstName); 

//This will let the console to always print the latest one. So it will be override, which is not possible with using let, const. Even Though unlike var; let and const does not allow to write the same variable name on declaring variable. But modifying the value for a variable is possible. for that we shall write -

// let firstNumber = 55;
// firstNumber= 44;
// console.log(firstNumber); 
//This will print 44;

//However, make sure we should always use let to declare any variables instead of using var!  


//_____________________________________________________04_______________________________________________________________________________//

// Question 4: Suppose you want to print your name on the console. How do you write that?  
// Ans: I can print it by multiple ways. I can do it by calling variables, also just using the console.log() I can print easily. There could be many more ways. 

//console.log("My Name"); 
// My name is now printed on the console. 

// What if I wanted to print it on my web? Then I had to write the following command. knowing my html as a document, 

// document.write("My Name");
// My name is now printed on the webpage.


//_____________________________________________________05______________________________________________________________________________//

// Question 5: Suppose you want to print your name on the alert box. How do you write that?
//Ans:- I will write the following code. The multiple times I refresh my page, this alert box will pop up.. 

//alert("My Name");


//_____________________________________________________06_______________________________________________________________________________//

// Question 6: Take- two variables, the first number, and the second number, and then print their sum on the console.
//Ans:-

//#Method 1
// let first_number = 55;
// let second_number = 45;
// let sum = first_number + second_number;
// console.log(sum); 
// This wil print their sum which is 100.

//#Method 2
// let firstNumber = 55;
// let secondNumber = 45;
// let thirdNumber = 50;
// console.log(firstNumber + secondNumber + thirdNumber);
// This wil print their sum which is 100.
// Other Mathematical equations can be done by these too. 

// Assignment Completion // 



