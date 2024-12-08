// console.log("Hello World");
// alert("hello");

// document.write("Hello world");

// firstName=prompt("Enter your name");
// console.log(firstName);
// ----------------------Variable-------
// x=10;
// console.log(x);
// _firstName="Ramu";
// console.log(_firstName);

//----------------DataTypes
// string,Number,Boolean,Null,Undefined,Symbol,BigInt==Primitive data types
// Object,Array,Function==Non-Primitive data types

//string
// fullName="my name is khan";
// console.log( typeof fullName);

//numbers
//x=12, 12.5, 0,5
// y=40
// console.log( typeof y);

// Boolean ==true && false
//  isMarried=true;
//  console.log( typeof isMarried);

//BigInt
// let num=9888888888888888n
// console.log( typeof num);

//null
// x=null;
// console.log( typeof x);

// --------------undefined
// let b=undefined;
// console.log( typeof b);

// let id =Symbol("Hello");
// let id2 =Symbol("Hello");
// console.log(id==id2);

// let a =("Mishan")
// let b = null;
// let c = 22;
// let d = true;
// let e = undefined;
// let f = 3.55;
//  console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f);

//  let p = {
//     "name" : "Mishan",
//     "job role" : "Developer",
//     "is_married" : false
//  }
//  console.log(p);

//  p.salary=50000;
//  console.log(p);

// let x;
// x=10;
// console.log(x);

// const a=9;
// a=10;
// console.log(a);

// var s=10;
// var s=20;
// s=30;
// console.log(s);

// console.log("s")
// var s=10;

// let n1=1;
// let n2=2;
// let sum=n1%n2;

// console.log(sum);

// let a=10;
// console.log(++a);

//----------javascript  comparision operators--------------------//

// let x=10;
// let y=20;
// console.log(x>y);
// console.log(x<y);
// console.log(x==y);
// console.log(x!=y);
// console.log(x>=y);
// console.log(x<=y);

// let x=10;
// let y="10";
// console.log(x===y);

// let x=20;
// let y=20;
// console.log(x>=y);

// let x=false;
// console.log(x?5:10);

// const isMarried=true;
// const result=isMarried? "Married":"Unmarried";
// console.log(result);

// let z=10;
// z+=10; //z=z+10
// console.log(z);

// let z=cond1(true) && cond2(true);
// let z(false) = cond1(false) && cond2(false);

//-----------------------------conditional statement-----------------//

// if(false){
//    console.log("hello");
// }
// else{
//    console.log("bye");
// }

// let age= prompt("Enter your age:");
// if(age>=18){
//     console.log("You can vote");
// }
// else{
//     console.log("You can't vote");
// // }

// const prompt = require("prompt-sync")();
// let number=prompt("Enter a number:");
// if (number > 0){
//     console.log("Number is positive");
// }
// else{
//     console.log("Number is zero");
// }

//  const prompt = require("prompt-sync")();
//  let input = prompt("Enter a charcter:");
//  if (input == "a" || input == "e" || input == "i" || input == "o" || input == "u" || input == "A" || input == "E" || input == "I" || input == "O" || input == "U"){
//      console.log("Vowel");
//  }
//  else{
//      console.log("Consonant");
//  }

// -------------------------The + operator concatenates(add) strings-----------------//
// let text1="Mishan";
// let text2="Ghale";
// let text3=text1+ " " +text2;
// console.log(text3);

// /--------Use the correct assignment operator that will result in x being 15 (same as x = x + y).
// let x=10;
// let y=5;
// x+=y;
// console.log(x);

// const prompt = require("prompt-sync")();
// let number = prompt("Enter a number:");
// if (number === 0){
//     console.log("Number is Zero");
// }
// else{
//     console.log("Number is Non-Zero");
// }

// const prompt = require("prompt-sync")();
// let number = prompt("Enter a number:");
// if (number % 5 === 0){
//     console.log("Multiple of 5");
// }
// else{
//     console.log("Not multiple of 5");
// }

// const prompt = require("prompt-sync")();
// let number = prompt("Enter a number:");
// if (number >= 10){
//     console.log("Number is greater than 10 ");
// }
// else{
//     console.log("Number is less than 10");
// }

// const prompt = require("prompt-sync")();
// let num1=prompt("Enter a num1:");
// let num2=prompt("Enter a num2:");
// if (num1 == num2){
//     console.log("Equal");

// }

// else{
//     console.log("Not Equal");
// }

// const prompt = require("prompt-sync")();
// let string = prompt("Enter a string:");
// if (string.length > 5){
//     console.log("Greater than 5");

// }else{
//     console.log("Less than 5");
// }

// const prompt = require("prompt-sync")();
// let charcter = prompt("Enter a charcter:");
// if (charcter == charcter.toUpperCase()){
//     console.log("Uppercase");
// }
// else{
//     console.log("Lowercase");
// }

// let days = "saturday";
// if (days == "saturday"){
//     console.log("Weekend");
// }
// else{
//     console.log("Not Weekend");
// }

// const prompt = require("prompt-sync")();
// let age = prompt("Enter your age:");
// if(age<12){
//     console.log("child");
// }
// else{
//     console.log("Adult");
// }

// const prompt = require("prompt-sync")();
// let temp = prompt("Enter a temperature:");
// if (temp > 30){
//     console.log("Hot");
// }
// else{
//     console.log("Cold");
// }

// const prompt = require("prompt-sync")();
// let number = prompt("Enter a number:");
// if (number >=1 && number <=100){
//     console.log("In Range");
// }
// else{
//     console.log("Out of Range");
// }

// const prompt = require("prompt-sync")();
// let score=prompt("student score:");
// if(score>=50){
//     console.log("Pass");
// }
// else{
//     console.log("Fail");
// }

// const prompt = require("prompt-sync")();
// let number=prompt("Enter a number:");
// if(number%3==0){
//     console.log("Divisible by 3");
// }
// else{
//     console.log("Not Divisible by 3");
// }


// const prompt = require("prompt-sync")();
// let num=prompt("Enter a number:");
// if(Math.sqrt(num)==Math.floor(Math.sqrt(num))){
//     console.log("Perfect square root");
// }
//  else{
//     console.log("Not perfect square root");
//  }




// ----------------LOOP-------------------------//
// let sum=0;
// for(let i=1;i<=20;i++){
//     sum=sum+i;
// }
// console.log(sum);

// let count=0;
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         count++;
//     }
// }
// console.log(count);

// let sum=0;
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         sum+=i;
//     }
// }
// console.log("The sum of Even number is:",sum);

// let sum=0;
// for(let i=1;i<=100;i++){
//     if(i%2==1){
//         sum+=i;
//     }
// }
// console.log("The sum of odd number is:",sum);

// let mul;
// for (let i = 1; i <= 10; i++) {
//   mul = 5 * i;
//   console.log(`5 * ${i} = ${mul}`);
// }

// for(let i=1;i<=10;i++){
//     console.log(`19 * ${i} = ${19*i}`);
// }
 

// for(let i=20;i>=1;i--){
//     console.log(i);
// }

// for(let i=1;i<=10;i++){
//     console.log(`3 * ${i} = ${3*i}`);
// }

// let square;
// for(let i=1;i<=10;i++){
//     square=i*i;
//     console.log(`Square of ${i} is ${square}`);
// }

// let sum=0;
// for(let i=1; i<=100;i++){
//     sum+=i;
// }
// console.log(sum)

// for(let i=1; i<=5;i++){
//     console.log(`The cube of ${i} is ${i**3}`);
// }


// for(let i=50; i>=1;i--){
//     console.log(i)
// }



// for(i=19;i>=1;i-=2){
//     console.log(i);
// }

// let sum=0;
// for(i=1;i<=9;i+=2){
//     sum+=i;
// }
// console.log("The sum of first 5 odd number is :",sum);

// let sum=0;
// for(i=2;i<=20;i+=2){
//     sum+=i;
// }
// console.log("The sum of first 10 even number is:",sum)
// for(i=30;i>=10;i--){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// for(i=30;i>=10;i-=2){
//     console.log(i)
// }


// for(i=1;i<=10;i++){
//     console.log(`2*${i}= ${2**i}`)
// }


// --------------------------do while loop......................//
// let i=5
// do{
//     console.log("Hello")
//     i++;
// }
// while(i<4)

// let mul=19;
// let i=1;
// do{
//     console.log(`mul*${i}=${mul*i}`)
//     i++
// }
// while(i<=10)

// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let i=20;
// while(i>=1){
//     console.log(i)
//     i--
// }





// let i=1;
// while(i<=5){
//     console.log("Hello")
//     if(i==5){
//         break;
//     }
//     i++
// }




//--------------............-----Array..................................//

// let arr = [1,2,"Hello",2.5,true]...................Array syntax


// let arr=[1,2,"Hello",2.4,true]
// for(i=0;i<5;i++){
//     console.log(arr[i])
// }
// console.log(arr.length)


// let frnds=["Newson","sujan"]
//  console.log(frnds)



// const obj={
//     name: "Ramu",
//     age: 20,
//     city: "Biratnagar",
//     walk: function(){
//         console.log("I am walking")
//     }
// }
// obj.walk()
// obj.city="Ktm"//update
// obj.phone=9804020468//add
// delete obj.name
// console.log(obj)
// console.log(obj.name)


// let obj ={
//     name:"Mishan",
//     phone:{
//         p1:980304098,
//         p2:9804020468,
//         num:[1,2,3,4,5]
//     }
// }
// let sum=0;
// for(let i=0;i<obj.phone.num.length;i++){
//     sum=sum+obj.phone.num[i]
// }
// console.log(sum)














