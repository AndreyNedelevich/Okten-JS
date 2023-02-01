// 1

const a='hello';
const b='owu';
const c='com';
const d='ua';
const e=1;
const f=10;
const g=-999;
const i=3.14;
const j=2.7;
const k=16;
const l=24;
const m=true;
const n=false;

const arr=  [a,b,c,d,e,f,g,j,i,k,l,m,n]
 for(let i =0; i<arr.length;i++){
  console.log(arr[i])
 }


//2

const firstName='Andrey';
const middleName="Valentinovich";
const lastName="Nedelevich"
const person=`${firstName} ${middleName} ${lastName}`;
 console.log(person)

 
// 3

let num = 100;
let str = '100';
let bool = true;

console.log(
typeof num,
typeof str,
typeof bool,
)




//4
const firstname = prompt("Enter your name");
const lastname2 = prompt("Enter your last name");
const age = prompt("enter your age");
 console.log("Your name is a" + firstname +". your last name  " +lastname2 + ". your age "+ age);