// switch

// switch(key){
//   case value :
//   break;
//   default :
//   break;
// }

const month = 3;

switch(month){
  case 1 :
    console.log("jan")
    break;
  case 2 :
    console.log("feb")
    break;
  case 3 :
    console.log("march")
    break; // break control ko rok deta hai use tod deta hai agr break hta diya aage wala bhi likh jayega
  case 4 :
    console.log("april")
    break;

    default :
    console.log("default matched");
    break;
}

const user = "monu";

if(user){
  console.log("yes user")
}
else{
  console.log("not user")
}


//FALSY VALUE

// false,0,-0,BigInt 0n,"",null,undefined,NAN

// truthy

// "0" , "false", " ", [], {}, function(){}

// Nullish Coalescing Operaytor (??) : null and undefined

 let val1 ;
// val1 = 5 ?? 10

// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15 // 10 aayegi

console.log(val1);

// terniary operator

// condition ? true : false 

const icePrice = 100;

icePrice >=80 ? console.log("more than 80") : console.log("less than 80");






