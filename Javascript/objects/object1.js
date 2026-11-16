// object key and value me baat chlti hai
// object declare  = 1 literals 2 constructor
// singleton
// literal se singleton nhi bnta
// constructor se singleton bn jayega

// object literals

const mySym = Symbol("key1");
const jsUser = {
  name : "Monu",
  "full name" : "monu attri", // isko dot(.) se access nhi kr skte
  [mySym] : "mykey1",
  age : 21,
  location : "Mathura",
  email : "monu1@gmail.com",
  IsLoogedIn : false,
}

// access of objects 
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

// change value

jsUser.email = "monu123";
console.log(jsUser);

//freeze value
//Object.freeze(jsUser); // value change nhi hogi iske baad object ki
jsUser.name = "manvendra";
console.log(jsUser);

// function add 
jsUser.greeting = function(){
  console.log("hello user");
}
//refrence in object
jsUser.greetingtwo = function(){
  console.log(`hello,${this.age}`)
}
jsUser.greeting();
console.log(jsUser.greetingtwo());