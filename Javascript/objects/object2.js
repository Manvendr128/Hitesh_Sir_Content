// const tinderUser = new Object(); // singleton object hai

const tinderUser = {} // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "monu";
tinderUser.loggedIn = false;

// console.log(tinderUser) // output = {}

const regularUser = {
  email : "soone12@gmail.com",
  fullname : {
    userfullname : {
      firstname : "Monu",
      lastname : "attri"
    }
  }
}

// console.log(regularUser.fullname.userfullname.firstname) // ? ye lga dete jb koi exist nhi krta maan lo fullname to uske aage ?

// combine of object

const obj1 = {
  1 : "a",
  2 : "b"
}
const obj2 = {
  3 : "a",
  4 : "b"
}

// const obj3 = {obj1,obj2};

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2} // most used syntax
// console.log(obj3) 

const users = [
  {
    id : 1,
    email : "a@gmail.com",
  },{

  },{

  }
]

// access method for users
users[1].email;
console.log(tinderUser)

console.log(Object.keys(tinderUser)) // data type array hota iska
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoogeed')); // check krne ke loye property hai yaa nhi