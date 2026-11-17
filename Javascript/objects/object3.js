// destructuring in object

const course = {
  coursename : "js in hindi",
  price : 999,
  courseteach : "hitesh"
}

// course.coursename long method h ye

const {courseteach : instructor} = course // destructure kr diya

console.log(instructor);

//API concept basic idea

// api keys and values double quotes me hoti hai except number 

// {
//   "name" : "hitesh",
//   "coursename" : "js in hindi",
//   "price" : "free"
// }

