"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = function (x, y) {
    return x + y;
};
var binaryCurry = function (binaryFn) { return function (firstArg) { return function (secondArg) { return binaryFn(firstArg, secondArg); }; }; };
var ternaryCurry = function (ternaryFn) { return function (firstArg) { return function (secondArg) { return function (thirdArg) { return ternaryFn(firstArg, secondArg, thirdArg); }; }; }; };
// return function(firstArg: any) {
//     return function(secondArg: any) {
//         return function(thirdArg: any) {
//             return fn(firstArg, secondArg, thirdArg);
//         }
//     }
// }
function curry(fn) {
    var numArgs = fn.length;
    var i = numArgs - 1;
    console.log(fn.length);
    console.log(fn.apply(fn, [length]));
    // function currier(fn: TFunc) {
    //     if(i===0) {
    //         return ()
    //     }
    // }
    // currier(fn);
}
curry(exports.add);
//# sourceMappingURL=play.js.map