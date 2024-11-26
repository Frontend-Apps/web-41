// var studentNames = ["Ayush", "praveen", "suman"];
// //console.log(studentNames)

// // Array constructors
// var studentNames = new Array("Ayush", "praveen", "suman");
// //console.log(studentNames)

// var nums = [10, 20, 15, 30, 45];

// console.log(nums[2]);
// console.log(nums[4]);
// console.log(nums[6]);
// console.log(nums[-1]); // -1 in some inbuilt functions

// // pushing elements into array
// studentNames.push("Iqbal");

// studentNames.push("Rohit", "Rani");

// //unshift
// studentNames.unshift("Vibhuti");
// studentNames.unshift("Anivesh", "Mandeep");

// studentNames.pop();
// studentNames.pop();
// studentNames.shift(); // delete element from beginning of array

// console.log(studentNames);

// let wildAnimals = ["lion", "tiger", "elephant", "cheetah", "zebra"];
// //wildAnimals.pop();
// // console.log(wildAnimals);
// // console.log(wildAnimals.length);

// // remove elephant and keep fox in place of elephant
// wildAnimals[2] = "fox";
// console.log(wildAnimals)

// // I want to add leopard at end of the array without push
// console.log(wildAnimals[wildAnimals.length-1])

// wildAnimals[wildAnimals.length-2] = "Leopard"
// console.log(wildAnimals)

let wildAnimals = ["lion", "tiger", "elephant", "cheetah", "zebra"];

for (var i = 0; i < wildAnimals.length; i++) {
  console.log(wildAnimals[i]);
}

let numbers = [10, 20, 30, 40, 50];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  if (i % 2 !== 0 && numbers[i] % 2 == 0) {
    sum += numbers[i];
  }
}

console.log(sum);

// var string = "masa";

// reverse this string === string

function isPalindrome(string) {
  let res = "";
  for (let i = string.length - 1; i >= 0; i--) {
    res = res + string[i];
  }
  return res === string ? "Palindrome" : "Not palindrome";
}

let out = isPalindrome("masai");
console.log(out);

// i = 4 , 4>=0 -> true -> res = ""+string[4]=""+i = i , i=4--=3
// i=3 , 3>=0 -> true -> res = i+string[3] = "i"+"a" = "ia" , i=3--=2
//i=2 , 2>=0 -> res = "ia"+"s" = "ias" , 2--=1
//i=1,1>=0-> res = "ias"+"a" = "iasa", i=1--=0
//i=0,0>=0 -> res = "iasa"+"m" = "iasam", 0--=-1
// i=-1, -1>=0 -> false

// 40 pages of dry run only for loop

function countChar(str, char) {
  str = str.toUpperCase();
  char = char.toUpperCase();
  let count = 0;
  for (var i = 0; i < str.length; i++) {
    if (char === str[i]) {
      count++;
    }
  }
  console.log(count);
}

countChar("Hello woOorld", "O");

var alphs = ["a", "z", "c", "d", "f"];

function findIndex(arr, target) {
  for (var i = 0; i < alphs.length; i++) {
    if (target == alphs[i]) {
      return i;
    }
  }
  return -1;
}
var output = findIndex(alphs, "c");
console.log(output);

// for loop -> for of

let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//for of

for (let x of arr) {
  console.log(x);
}


//node terminal, node console

// browser console

//html code