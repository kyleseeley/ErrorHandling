// 1.
// function sum(array) {
//   let sum = 0;
//   if(array === null){
//     throw new Error("Array is null")
//   }
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// let res = sum(null);
// try{
//   console.log(res);
// } catch(error){
//   console.log(`${error.name}: ${error.message}`)
// }

// 2.
// tests
// sayName("Alex");
// sayName(1);
// Your code here
const sayName = name => {
  if(typeof name !== 'string'){
    throw new Error("Invalid name! Must be a string!")
  } else {
    return name;
  }
}
//sayName("Alex");
//sayName(1);
try{
  console.log(sayName("Alex"))
  console.log(sayName(1))
} catch(error) {
  console.log(`${error.name}: ${error.message}`)
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}
