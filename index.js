
function receivesAFunction(callback) {
callback() 
 }
receivesAFunction()

function returnsANamedFunction() {
   return  receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function() {

    }
}
//   function wrapAdjective(part1 = "**") {
//     return function (message = "special") {
//       return (`You are ${part1}${message}${part1}!`);
//     };
//   }

// wrapAdjective("%")(" a dedicated programmer"); 