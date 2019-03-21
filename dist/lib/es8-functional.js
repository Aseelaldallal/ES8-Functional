"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEach = function (array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i]);
    }
};
exports.forEachObject = function (object, fn) {
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            fn(property, object[property]);
        }
    }
};
exports.unless = function (predicate, fn) {
    if (!predicate) {
        fn();
    }
};
exports.times = function (num, fn) {
    for (var i = 0; i < num; i++) {
        fn(i);
    }
};
exports.every = function (array, fn) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var val = array_1[_i];
        if (!fn(val))
            return false;
    }
    return true;
};
exports.some = function (array, fn) {
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var val = array_2[_i];
        if (fn(val))
            return true;
    }
    return false;
};
exports.sortBy = function (property) {
    return function (a, b) {
        if (a[property] < b[property]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    };
};
