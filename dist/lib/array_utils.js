"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = function (arr, fn) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        result.push(fn(element));
    }
    return result;
};
exports.filter = function (arr, fn) {
    var result = [];
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var element = arr_2[_i];
        if (fn(element)) {
            result.push(element);
        }
    }
    return result;
};
exports.concatAll = function (arr) {
    var result = [];
    for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        var elem = arr_3[_i];
        if (Array.isArray(elem)) {
            result.push.apply(result, elem);
        }
        else {
            result.push(elem);
        }
    }
    return result;
};
function flatten(array) {
    var results = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var value = array_1[_i];
        results.push.apply(results, value);
    }
    return results;
}
exports.flatten = flatten;
exports.reduce = function (array, fn, initialValue) {
    var accumulator;
    if (initialValue != undefined) {
        accumulator = initialValue;
    }
    else {
        accumulator = array[0];
    }
    if (initialValue === undefined) {
        for (var i = 1; i < array.legnth; i++) {
            accumulator = fn(accumulator, array[i]);
        }
    }
    else {
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var value = array_2[_i];
            accumulator = fn(accumulator, value);
        }
    }
    return [accumulator];
};
// let a = [1,2,3,4,5];
// let sum = a.reduce((accumulator: number, currValue: number) => {
//     accumulator += currValue;
//     return accumulator;
// })
// console.log(sum);
