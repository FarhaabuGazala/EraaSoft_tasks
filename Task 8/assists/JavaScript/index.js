// 1
// var num1=+prompt("Enter num 1");
// var num2=+prompt("Enter num 2");
// function lessThan100(num1,num2)
// {
//     if(num1+num2<100)
//     return true;
//     else
//     return false;
// }
// console.log(LessThan100(num1,num2));

//2
// var num =+prompt("Enter num");
// function printArray(num)
// {
//     var arr=[];
//     for(var i=0 ;i<num ;++i)
//     {
//        arr[i] =i+1;
//     }
//     console.log(arr);
// }
// printArray(num);

//3
// var num1=+prompt("Enter num 1");
// var num2=+prompt("Enter num 2");
// function swap(num1,num2) 
// {
//     var temp =num1;
//     num1=num2;
//     num2=temp;
//     console.log(num1+","+num2);
// }
// swap(num1,num2);

//4
// var chickens=+prompt("Enter chickens");
// var cows=+prompt("Enter cows");
// var pigs=+prompt("Enter pigs");
// function animals(chickens , cows, pigs) 
// {
//     console.log(chickens*2+ cows*4+ pigs*4);
// }
// animals(chickens ,cows,pigs) ;

//5

// function andOprator(a,b) 
// {
//     if(a==true && b==true)
//     return true;
//     else
//     return false;
// }
// console.log(andOprator(false,true) );

//5
// var num1=+prompt("Enter 1 to true or 0 to false");
// var num2=+prompt("Enter 1 to true or 0 to false");
// function andOprator(a,b) 
// {
//     if(a==1 && b==1)
//     return true;
//     else
//     return false;
// }
// console.log(andOprator(num1,num2) );
//6
// var num1=+prompt("Enter num 1");
// var num2=+prompt("Enter num 2");
// function isSameNum(num1,num2) 
// {
//     if(num1==num2)
//     return true;
//     else
//     return false;
// }
// console.log(isSameNum(num1,num2));

//7
// var wins=+prompt("Enter wins");
// var draws=+prompt("Enter draws");
// var losses=+prompt("Enter losses");
// function footballPoints(wins,draws,losses) 
// {
//     return(wins*3+draws);
// }
// console.log( `Points :${footballPoints(wins,draws,losses)}`);

//8
// var hours=+prompt("Enter hours");
// var minutes=+prompt("Enter minutes");
// function convertToSeconds(hours,minutes) 
// {
//     return(hours*60*60+minutes*60);
// }
// console.log(`seconds ${convertToSeconds(hours,minutes) }`);

//9
// var num=+prompt("Enter num ");
// function isSeven(num) 
// {
//     if(num==7)
//     console.log(true);
//     else
//     console.log(false);
// }
// isSeven(num);

//10
// function checkEquality(a,b)
// {
//   if(a==b)  
//   return true;
//   else 
//   return false;
// }
// console.log(checkEquality("1","1"));

//11
// var prob=+prompt("Enter Prob");
// var prize=+prompt("Enter Prize");
// var pay=+prompt("Enter Pay");
// function profitableGamble (prob,prize,pay) 
// {
//     if(prob*prize > pay)
//     return true;
//     else
//     return false;   
// }
// console.log( profitableGamble (prob,prize,pay) );

//12
// function boolToString(a) 
// {
//     if(a)
//     return "True";
//     else
//     return "False";
// }
// console.log(boolToString(false));

//13
// function arrowFunc(a) 
// {
//     return a;
// }
// console.log(arrowFunc(3));
// console.log(arrowFunc("3"));
// console.log(arrowFunc(true));

//14
// var minutes=+prompt("Enter minutes");
// var frames=+prompt("Enter Frames ");
// function fps(frames,minutes) 
// {
//     return frames*minutes*60;
// }
// console.log(fps(frames,minutes) );

// 15  my soultion and it not completed
// var expression=prompt("Enter expression");
// function calculator(expression)
// {
//     var y="";
//     var z="";
//     for (var i = 0; i < expression.length; i++) 
//     {
//        if(expression[i]=="*"||expression[i]=="/"||expression[i]=="+"||expression[i]=="-")
//         {  
//            var count=i;
//             break;
//         }
//     }
//     var x=expression[i];
//     for (var i = 0; i < count; i++) 
//     {
//         y+=+expression[i];
//     } 
//     console.log(x);
//     console.log(y);
   
// }

// calculator(expression);


//15 عملت سيرش عنه
// function tokenize(s) {
//     // --- Parse a calculation string into an array of numbers and operators
//     const r = [];
//     let token = '';
//     for (const character of s) {
//         if ('^*/+-'.indexOf(character) > -1) {
//             if (token === '' && character === '-') {
//                 token = '-';
//             } else {
//                 r.push(parseFloat(token), character);
//                 token = '';
//             }
//         } else {
//             token += character;
//         }
//     }
//     if (token !== '') {
//         r.push(parseFloat(token));
//     }
//     return r;
// }
// function calculate(tokens) {
//     // --- Perform a calculation expressed as an array of operators and numbers
//     const operatorPrecedence = [{'^': (a, b) => Math.pow(a, b)},
//                {'*': (a, b) => a * b, '/': (a, b) => a / b},
//                {'+': (a, b) => a + b, '-': (a, b) => a - b}];
//     let operator;
//     for (const operators of operatorPrecedence) {
//         const newTokens = [];
//         for (const token of tokens) {
//             if (token in operators) {
//                 operator = operators[token];
//             } else if (operator) {
//                 newTokens[newTokens.length - 1] = 
//                     operator(newTokens[newTokens.length - 1], token);
//                 operator = null;
//             } else {
//                 newTokens.push(token);
//             }
//         }
//         tokens = newTokens;
//     }
//     if (tokens.length > 1) {
//         console.log('Error: unable to resolve calculation');
//         return tokens;
//     } else {
//         return tokens[0];
//     }
// }
// function cal(arr) {
//   let calstr = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] != "string") {
//       if (cal(arr[i]) < 0) {
//         arr[i] = `${cal(arr[i])}`;
//       } else {
//         arr[i] = `${cal(arr[i])}`;
//       }
//     }
//     if (typeof arr[i] === "string") {
//       calstr += arr[i];
//     }
//     if (i == arr.length - 1) {
//       //console.log("cal" ,calstr,calculate(tokenize(calstr)) );
//       return calculate(tokenize(calstr));
//     }
//   }
// }
// console.log(calculate(tokenize("8+6*7*-1"))); // ["1+",["2-",["3+4"]]]








// search
// https://docs.google.com/presentation/d/1RyQYw2nr-yuh4CTy5VOVOAz-jOlY3cn9F-_xjj4qwsg/edit?usp=sharing