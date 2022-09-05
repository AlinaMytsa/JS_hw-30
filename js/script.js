'use strict';
const counter = () => {
  let num = 0;

  const value = () => {
    return num;
  }

  const increase = () => {
   return ++num;
  }

  const decrease = () => {
   return --num;
  }

 return {
    value, increase, decrease
 }

}
let result = counter();
console.log(result.increase());

let result1 = counter();
console.log(result1.decrease());
