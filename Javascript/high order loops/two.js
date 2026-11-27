const myObject = {
  js : "javascript",
  cpp : "c++",
  rb : "ruby",
  swift : "swift by apple"
}

// FOR IN Object pr kaam kr jaata hai
//for in array ki keys de de deta hai

for(const i in myObject){
  console.log(`${i} shortcut for ${myObject[i]}`);
}

const programming = ["js","java","cpp"]

for(const key in programming){
  console.log(programming[key])
}


// const map = new Map();
// map.set('IN',"India")
// map.set("US","United State");
// map.set('IN',"India")

// for(const key in map){
//   console.log(key)
// }