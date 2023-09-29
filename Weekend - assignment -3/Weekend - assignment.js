// 1.1

// function isbool(value) {
//     return value ? "Yes" : "No";
// }


// 2.l

// let arr =  [   1 ,19, 5, 42, 2, 2, 2, 77]

// let small = Infinity
// let smaller = Infinity

// function sumSmallest (arr){
    
//     for(num of arr) {
//         if(num < smaller) {
//             small = smaller 
//             smaller = num
//         }else if ( num < small) {
//             small = num
//         }
//     } 
// }
// sumSmallest (arr)
// console.log(small + smaller)


// 2.3

// function nextSqure (square) {
//    let base = Math.sqrt(square);
//    console.log (base)
//    base ++
//    console.log (base)
//    let resualt = Math.pow(base ,2)
//    console.log (resualt)
// }
//    nextSqure(100)


// 2.4

// function findUniq(arr) {
//     for (let num of arr) {
//         if (arr.indexOf(num) === arr.lastIndexOf(num)) {
//             return num;
//         }
//     } 
// }
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));


// 2.5

// function Summation(x) {
//     let sum = 0
//     for (let i = 0; i <= x; i++){
//         sum += i
//     }
//     return sum;
// }
// console.log(Summation(8))


// 2.6

// function year (x) {
//     let x1 = Math.floor(x / 100);
//     let x2 = x % 100;
//     console.log(x2)
//     if (x2 == 0) {
//         x1 = x1
//     }else {
//         x1 += 1
//     }

//     return ` its the ${x1} century`;

// }
// console.log(year(1901))


// 2.7

// function calc (a, b, sign){
//     switch (sign) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':

//         if (b !== 0) {
//             return a / b;}

//       default:
//     }
// }
// console.log(calc(5, 3, '+'));


// 4.1

// let b = 0
// let fibInt = []
// function fib (a) {
//     if(a <= 1) {
//         b = 1
//     }
//     let c = a + b
//     fibInt.push(a, b, c);
// }
// fib(1)
// console.log(fibInt)
// for(i=0; i < 10; i++){
//     let lastElement = fibInt[fibInt.length - 1];
//     let secondLastElement = fibInt[fibInt.length - 2];
//     let d = lastElement + secondLastElement;
//     fibInt.push(d);
//     console.log(fibInt)
// }


// 5.1

// function trim(x) {
//     return x.slice(1, -1);
// }
// console.log(trim("loooooool")); 


// 5.2

// function repeatStr ( x, y) {
//     for( let i = 0; i <= x; i++)
//     console.log(y)
// }
// repeatStr (5 , 'wer')


// 5.3

// function toCamelCase(x) {

//     let arr = x.split(/-|_/);
//     for (let i = 1; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join('');
// }
// console.log(toCamelCase("the-stealth-warrior"));  


// 5.5

// function toCamelCase(x) {

//     let arr = x.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() ;
//     }
//     return arr.join('.');
// }
// console.log(toCamelCase("Liron dan"));  


// 5.6

// function replaceExludelast4(str) {
//     if (str.length <= 4) return str; 
//     let lastFour = str.slice(-4);  
//     let replace = '#'.repeat(str.length - 4);
    
//     return replace + lastFour;
// }

// let result = replaceExludelast4("helfsdfsdflef");
// console.log(result); 


// 5.7

// function shortestWord(str) {
//     let arr = str.split(" ");
//     let shortest = arr[0];  
//     for (let i = 1; i < arr.length; i++) {  
//         if (arr[i].length < shortest.length) {
//             shortest = arr[i];  
//         }
//     }
//     return shortest;  
// }
// console.log(shortestWord('hgggi bo how are you doing')); 


// 6.2

checker = function(x) {
    let tempchar = {};

    for (let char of x) {
        let charLower = char.toLowerCase();
        if (tempchar[charLower] === undefined) {
            tempchar[charLower] = 1;
        } else {
            tempchar[charLower]++;
        }console.log(tempchar)
    }

    let count = 0;
    for (let key in tempchar) {
        if (tempchar[key] > 1) {
            count++;
        }
       newobj = console.log(`the ${key} showed up ${tempchar[key]} times`);
    }
    console.log(count)
    return count;

}

console.log(checker("aaiiiiibBcde"));  







   