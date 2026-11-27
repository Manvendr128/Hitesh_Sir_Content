// for of loop
// but ye printing har ek word/num ko alg line me likhega
// for of map pr kaam kr jayega lekin object pr nhi kuki object iterable ni hai

const arr = [1,2,3,4,5,6,7,8];

for(const i of arr){ // automatic length-1 tk chlega
  // console.log(i);
}

const greetings = "hello";

for(const greet of greetings){ 
  // console.log(greet)
}

//Maps
// unique value ke liye hota hai koi value repeat ho gyi too use dubara print nhi krega
// mdn se pdh lenge maps

const map = new Map();
map.set('IN',"India")
map.set("US","United State");
map.set('IN',"India")

console.log(map);
 for(const [key,value] of map){
  console.log(key, ":-" ,value)
 }