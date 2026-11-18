function sayMyName(){
  console.log('M');
  console.log('O');
  console.log('N');
  console.log('U');
}
// sayMyName();

// function addTwoNumbers(num1,num2){
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1,num2){
  let result = num1 + num2
  return result;
}

const result = addTwoNumbers(6,9);
// console.log(result);

function logInUserMessage(username){
  return `${username} just logged In`
}

console.log(logInUserMessage("monu")); // value naa pass krne pr undefined aayega 
//default parameter chlega jb kuch bhi pass nhi krenge