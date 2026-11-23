//global and local scope
// let a = 10;
// const b =30;
// var c = 40; // global scope hai ye

if(true){
  let a = 10; // block scope
  const b =30; // block scope
  var c = 40; 
}
{} // scope

// nested scope
 function one(){
  const name = "monu";

  function two(){
    const web  = "youtube";
    console.log(name);
  }
  // console.log(web);
  two();
 }

 one();

  // ++++++++++++++++++++++ important +++++++++++++++++
 addone(15);

 function addone(num){
  return num + 1;
 }

//  addtwo(15); // hoisting ??

 const res = function addtwo(num){
  return num + 10;
 }

 addtwo(15);
