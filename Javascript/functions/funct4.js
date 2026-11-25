//IIFE(Immediately invoked function expressions)
// global scope ke pollution se problem hoti hai use htane ke liye iife use kiya

(function chai(){
  console.log('connected')
})();

( () => {
  console.log('connected ')
})();

