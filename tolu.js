/*//Write JavaScript code snippets for the following operators and ensure the results are logged on the console; 
let toluAge = 15;
let tobiAge = 14;
if (toluAge === 15)
//Arithmetic Operators and Assignment Operators
{
    let tobiAge = toluAge + 3;
    console.log(`Tobi is ${tobiAge} years old.`)
}
//Comparison Operators 
if (toluAge > 20){
    console.log("Tolu is quite old.");
}
//Logical Operators and Comparison Operators
if (toluAge  > 20 || toluAge < 30)
{
    console.log("Tolu should definately know how to drive.");
}
//Assignment Operators,Logical Operators and Comparison Operators
if (toluAge > 10.5 && tobiAge < 20.5)
{
    toluAge = 11;
    tobiAge = 20;
    console.log(`The approximated age of Tobi is ${tobiAge} and for Tolu is ${toluAge}`);
}
//Increment/Decrement Operators 
console.log(`Tolu is ${toluAge} years old.`)
toluAge++;
console.log(`Tolu is ${toluAge} years old when incremented.`)
toluAge--;
console.log(`Tolu is ${toluAge} years old when decremented.`)


numbers = [];
function createPhoneNumber(numbers){
  let tolu = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  return tolu
}
console.log(createPhoneNumber([1,2,2,2,1,1,1,1,1,1]))

function solution(str){
    let word = str.split('');
    let rword=[];
    for (let i = str.length-1; i>=0; i--){
      rword.push(word[i]);
    }
    console.log(rword.join(''));
    
 }
 solution('word');*/
 

 //1.Code Wars"
 /*let tempcount = 0;
 let oddNum;
 let count = 0;
 A=[];
 function findOdd(A) {
    A.forEach(Element => {
        for (let index = 0; index < A.length; index++){
            if (Element == A[index]){
                count = count + 1;
            }
        }
        if ((tempcount <= count) && (count % 2 !== 0)){
            tempcount = count;
            oddNum = Element;  
    } 
    count = 0;
    }); 
    console.log(oddNum);
}
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]);
//Solution used later"
function findOdd(A) {
  const countMap = {};
  A.forEach(element => {
    countMap[element] = (countMap[element] || 0) + 1;
  });
  for (const element in countMap) {
    if (countMap[element] % 2 !== 0) {
      return parseInt(element);
    }
  }
}*/

//2.
/*
function countSheeps(sheep) {
    let count = 0;
    sheep.forEach(element => {
        if(element === true ){
            count ++;
        }
    });
    return count;
    // TODO
  }
console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));*/

//3.
/*
function repeatStr (n, s) {
    return s.repeat(n);
  }
console.log(repeatStr(3,'Hello'))*/

//4.
/*
function solution(number){
    let sum =0;
  if (number < 0){
    return 0;
  }
  else{
    for (index = 0;index < number; index++ ){
        if ((index % 3==0) || (index % 5==0)){
            sum += index;
        }
    }
    return sum
  }
}
console.log(solution(10));*/

//5.
/*
function numberToString(num) {
    return num.toString()
  }
console.log(numberToString(52))*/


//Take 2 for Code wars Assignment 
//1.Given the size n of an identity matrix (I), find the number represented by the identity matrix values as its bits.
/* My solution but had an issue when it did n**53 such values are infinity value so i got some help
function solve(n) {
    let count= 0;
    let con = (n**2)-1;
    if ((n > 0) && (n < 65)){
        for (let i = 0; con >= i ; i += n+1){
            count += 1*(2**i);
        }
        return BigInt(count);
    } 
    return 0n;
  }
console.log(solve(4));


/* The help i got 

function solve(n) {
    let count = 0n;
    let con = BigInt(n**2)-1n;
    if ((n > 0) && (n < 65)){
      for (let i = 0n; con >= i ; i += BigInt(n)+1n){
        count += 1n * (2n ** i);
      }
      return count;
    } 
    return 0n;
  }
console.log(solve(4))*/

//2.Make a program that filters a list of strings and returns a list with only your friends name in it.
/*function friend(friends){
    let myFriends = []
    friends.forEach(element => {
        if (element.length == 4){
            myFriends.push(element);
        }
    });
    return myFriends
  }
console.log(friend(["Ryan", "Kieran", "Mark"]))*/

//3.Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
/*function paperwork(n, m) {
  if (n<0||m<0){
return 0}
  else
    return m*n}*/

//4.Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the 
//output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
//The next words should be always capitalized.
/*function toCamelCase(str){
    let sent = str.replaceAll('_','-')
    let words = sent.split('-');
    let camelCase = [words[0]];
  for (let i = 1; i < words.length; i++) {
    camelCase.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }
  return camelCase.join('');
} 
console.log(toCamelCase("i-love-the_weather"))*/

//5.
/*
function sumPairs(ints, s) {
    let result = null;
    let minIndex = Infinity;
  
    for (let i = 0; i < ints.length; i++) {
      for (let j = i + 1; j < ints.length; j++) {
        if (ints[i] + ints[j] === s) {
          if (j < minIndex) {
            result = [ints[i], ints[j]];
            minIndex = j;
          }
        }
      }
    }
    return result;
  }
  
  console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); 
  
  //What was submitted
  function sumPairs(ints, s) {
    let hash = {};
    let result = null;
    let minIndex = Infinity;
  
    for (let i = 0; i < ints.length; i++) {
      let complement = s - ints[i];
      if (hash[complement] !== undefined && hash[complement] < i) {
        if (i < minIndex) {
          result = [complement, ints[i]];
          minIndex = i;
        }
      }
      hash[ints[i]] = i;
    }
    return result;
  }
  
  console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // output: [3, 7]}*/

