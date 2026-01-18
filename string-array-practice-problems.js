//-----> Print all strings in an array.
// let arrStr = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e'
// ]
// console.log(arrStr);


//-----> Find the total length of strings in an array.
// let arrStr = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e'
// ];
// console.log(arrStr.length);


//-----> Find the length of each string in an array.
// let arrStr = ['aaa','bbbb','ccccc','dddddd','eeeeeee'];
// let eachStrLengths = [];

// for(let i = 0; i < arrStr.length; i++){
//     eachStrLengths.push(arrStr[i].length);
// }
// console.log(eachStrLengths);


//-----> Find the longest string in an array.
// let arrStr = ['aaa','bbbb','ccccc','dddddd','eeeeeee'];
// let longest = arrStr[0];

// for(let i = 0; i < arrStr.length; i++){
//     if(arrStr[i] > longest){
//         longest = arrStr[i];
//     }
// }
// console.log(longest);


//-----> Count how many strings are empty.
// let arrStr = ['aaa','bbbb', '', 'ccccc', '', 'dddddd', '', 'eeeeeee'];
// let count = 0;


// for(let i = 0; i < arrStr.length; i++){
//     if(arrStr[i] == ''){
//         count++;
//     }
// }
// console.log(count);


//-----> Reverse each string in a array.
// let str = ['amar', 'sonar', 'bangla'];
// let reverseArrElm = [];

// for (let i = 0; i < str.length; i++) {
//     reverseArrElm.push(str[i].split('').reverse().join('')) 
// }
// console.log(reverseArrElm);


//-----> Reverse each string word-wise.
//-----> Reverse each string word-wise (same way)
// let str = 'amar sonar bangla';
// let reverseWords = [];
// let words = str.split(' ');

// for (let i = 0; i < words.length; i++) {
  
//     let reversedElm = words[i].split('').reverse().join('');
//     reverseWords.push(reversedElm);
// }
// console.log(reverseWords.join(' '));

