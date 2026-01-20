//-----> Check if a string is empty or not.
// let x = "cjd";
// if(x == ''){
//     console.log('true');
// }else{
//     console.log('false');
// }



//-----> Check if a string starts with a given substring.
// let str = 'oecdicmmc';
// let subStr = 'o';

// if(str[0] == subStr){
//     console.log('true');
// }else{
//     console.log('false');
// }



//-----> Given a string input "25", check if it is a valid age: 
/*
    * Must be a number and 
    * Between 1–120
*/
// let str = 25;

// if(typeof str === 'number' && str > 1 && str <= 120){
//     console.log('yes! its valid');
// }else{
//     console.log('please give a number');
// }



//-----> Your online shop applies discounts dynamically. calculate Price and discount percentage and print as string.

/*
    * Calculate final price after discount.
    * Input: "1200", "10"
    * Output: "1080"
*/
// let price = 1200;
// let totalPrice;

// if(price > 1000){
//     let discount = price * 0.1;
//     totalPrice = price - discount;
//     console.log(totalPrice);
// }else{
//     let discount = price * 0.05;
//     totalPrice = price - discount;
//     console.log(totalPrice);
// }
// console.log(totalPrice);



//-----> Check if a password is strong.
/*
    * At least 8 characters
    * At least 1 uppercase
    * At least 1 lowercase
    * At least 1 digit
*/
// let passWord = 'Asssbc';

// if(passWord.length < 8){
//     if(!/[A-Z]/.test(passWord)){
//         console.log("Password must contain at least 1 uppercase letter");
//     }else if(!/[a-z]/.test(passWord)){
//         console.log("Password must contain at least 1 lowercase letter");
//     }else if(!/[0-9]/.test(passWord)){
//         console.log("Password must contain at least 1 digit");
//     }else{
//         console.log("Password must be at least 8 characters");
//     }
// }else{
//     console.log("Strong Password");
// }



//-----> Replace banned words with "***" in user comment.
/*
    * Input: "This app is stupid"
    * Banned words: "stupid"
    * Output: "This app is ***"
*/
// let userInput = "This app is stupid";
// let BannedWords = "stupid";

// if(userInput.includes(BannedWords)){
//     userInput = userInput.replace(BannedWords, '***')
//     console.log(userInput);
    
// }else{
//     console.log(userInput);
// }



//-----> Check if phone number is digit or string
/*
    * Contains only digits
    * Length exactly 10
*/
let userInput = '139393939';








