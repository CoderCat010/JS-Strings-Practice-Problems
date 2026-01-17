//-----> Find the length of a string using by loop.
// let str = 'amarsonarbangla'
// let count = 0;
// for(let i = 0; i < str.length; i++){
//     count++;
// }
// console.log(count);


//-----> Access the first character of a string.
// let x = 'hddnhdndhs';
// let firstChar;

// for(char of x){
//     firstChar = char[0];
//     break;
// }
// console.log(char);


//-----> Print each character of a string using a loop.
// let y = 'abcdefg'; 
// let getElm = '';
// for(let i = 0; i < y.length; i++){
//     getElm += y[i] + " ";
// }
// console.log(getElm);


// -----> Count vowels in a string.
// let vowels = 'adnwjfheufhaeiujjaieujijchooslsmjnccygfyegvbhnwidwppqlsidjwe';
// let count = 0;
// let vowelsSet = 'aeiou'

// for(let i = 0; i < vowels.length; i++){
//     if(vowelsSet.includes(vowels[i])){
//         count++;
//     }
// }
// console.log(count);


// -----> Count consonants in a string.
// let vowels = 'adnwjfheufhaeiujjaieujijchooslsmjnccygfyegvbhnwidwppqlsidjwe';
// let count = 0;
// let vowelsSet = 'aeiou'

// for(let i = 0; i < vowels.length; i++){
//     if(!vowelsSet.includes(vowels[i])){
//         count++;
//     }
// }
// console.log(count);


//-----> Find the longest word in a sentence.
// let sentence = `amar sonar bangla, ami tomay valobashi`;
// let getWords = sentence.split(' ')
// let currentLongestSentence = getWords[0];

// for(let i = 0; i < getWords.length; i++){
//     if(getWords[i].length > currentLongestSentence.length){
//         currentLongestSentence = getWords[i];
//     }
// }
// console.log(currentLongestSentence);


//-----> Count digits in a string.
// let x = 'djdijcd33445443kdnvdjn34u384u83njnjvjnf48u834u8jf47yg873uu';
// let count = 0;

// for(let i = 0; i < x.length; i++){
//     if(x[i] >= '0' && x[i] <= '9'){
//         count++;
//     }
// }
// console.log(count);


//-----> Extract only digits from a string.
// let str = 'hrufh834f34fh3fcerhf83fh834f7fvh384w347hf83hf';
// let getOnlyDigits = '';

// for(let i = 0; i < str.length; i++){
//     if(str[i] >= '0' && str[i] <= '9'){
//         getOnlyDigits += str[i]
//     }
// }
// console.log(Number(getOnlyDigits));


//-----> Check if a string starts with a given substring.
// let str = 'oecdicmmc';
// let subStr = 'o';

// if(str[0] == subStr){
//     console.log('true');
// }else{
//     console.log('false');
// }