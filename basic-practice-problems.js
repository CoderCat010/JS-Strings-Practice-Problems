//-----> Print a given string.
// let str = 'hello world!';
// console.log(str);


//-----> Access the first character of a string.
// let x = 'fhdfh';
// console.log(x[0]);


//-----> Reverse a string.
// let x = 'abcde';
// let y = x.split('').reverse().join()

// console.log(y);


//------> get the substrings of a string.
// let str = 'jsisjdsjd';
// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }


//------> convert to hours and minutes 
/*
    * input: totalMinutes = 130
    * output: '2h 10m'
*/
// let totalMinutes = 130;
// let hours = Math.floor(totalMinutes / 60);
// let minutes = totalMinutes % 60;
// console.log(hours+'h '+ 'and ' + minutes+'m');


//-----> Given a salary as a string, calculate and print the final salary as a string.
/*
    * 10% tax
    * 5% bonus
    * Input: "50000"  
    * Output: "47500"
*/
// let totaSalary = '50000';
// let forTax = totaSalary * 0.1;
// let afterTax = totaSalary - forTax;

// let bonus = totaSalary * 0.05;
// let finalSalary = afterTax + bonus;

// console.log(finalSalary.toString());


//-----> A user writes a sentence in a text box, your task is to convert the sentence into an array of words.
/*
    * Words are separated by spaces
    * Ignore extra spaces
    * Input: "I love programming"
    * Output: ["I", "love", "programming"]
*/
// let inputStr = "I love programming";
// let outputStr = inputStr.split(" ")
// console.log(outputStr);


//-----> Given a full name string, print only initial substring of each words of string. 
/*
    * Input: "Ayatul Orin Megh"
    * Output: "AOM"
*/
// let inputStr = "Ayatul Orin Megh";
// let getValue = '';
// let modifiedStr = inputStr.split(" ")
// console.log(modifiedStr);

// for(let i = 0; i < modifiedStr.length; i++){
//     getValue += modifiedStr[i][0];
// }
// console.log(getValue);
















