"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var funcs = __importStar(require("../lib/es8-functional.js"));
// let array = [1,2,3];
// funcs.forEach(array, (data: any)=> console.log(data));
// let object = { a: 1, b: 2}
// funcs.forEachObject(object, (k: any,v: any) => {
//     console.log(k + " : " + v);
// })
// funcs.times(100, (num: any) => {
//     funcs.unless((num % 2), () => {
//         console.log(num + " is even");
//     });
// });
// console.log(funcs.some([4, 4, NaN], isNaN)); 
var people = [
    { firstName: 'a', lastName: 'b' },
    { firstName: 'c', lastName: 'a' },
    { firstName: 'b', lastName: 'c' }
];
var x = people.sort(funcs.sortBy('lastName'));
console.log(funcs.sortBy('firstName'));
