let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

console.log(typeof mydate);

let mycreatedate = new Date(2023,0,23);
console.log(mycreatedate.toDateString()) 

let createdate = new Date("2023-01-14")
console.log(createdate.toLocaleString())

let myTimeStamp = new Date();

console.log(myTimeStamp); //give millisecond from 1970 
console.log(Math.floor(Date.now()/1000)); // seconds me convert krne ke liye

let newDate = new Date();
console.log(newDate.getMonth()) // 0 se start hoga
console.log(newDate.getDay())
console.log(newDate.getDate())

newDate.toLocaleString('default',{
  weekday : "long"
})