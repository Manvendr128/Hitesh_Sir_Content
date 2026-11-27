// for each loop

const coding = ["js","cpp","java","ruby"];

// coding.forEach(function (item) {
//   console.log(item)
// } )

// coding.forEach( (item) =>{
//   console.log(item)
// })

// function printMe(item){
//   console.log(item)
// }

// coding.forEach(printMe)

coding.forEach((item,i,arr)=>{
  console.log(item,i,arr)
})

// how to iterate on array object

const myCoding = [
  {
    languageName : "javascript",
    languageField : "js"
  },
  {
    languageName : "java",
    languageField : "java"
  },
  {
    languageName : "python",
    languageField : "py"
  }
]

myCoding.forEach( (item) => {

  console.log(item.languageName);
  
})