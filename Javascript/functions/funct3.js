// arrow function 
// this keyword =>current context ki baat krta hai 
// use in object not in function

const user = {
  username : "hitesh",
  price : 999,
  welcomeMessage : function(){
    console.log(`${this.username} , Welcome to website`);
    console.log(this);
  }

}


// user.welcomeMessage();
// user.username = "monu"; //context change kr diya
// user.welcomeMessage();

console.log(this);

// function chai(){
//   let username = "monu";
//   console.log(this.username);
//   console.log(this);
// }

const chai = () => {
  let username = "monu";
  // console.log(this.username);
  console.log(this);
}

chai();


const add = (num1,num2) => {
    return num1 + num2;
}

console.log(add(10,15));

// implicit return ek hi line me answer 
// curly = return likhenge
// impicit koi return nhi likhenge

const add1 = (num1,num2) => (num1 + num2);

console.log(add1(15,85));

// arrwo functon me object 

const obj = (num1,num2) =>({
  u1 : "monu",
  price : "555"
})

console.log(obj());