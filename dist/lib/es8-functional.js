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
exports.tap = function (value) {
    return function (fn) {
        (fn(value),
            console.log(value));
    };
};
exports.unary = function (fn) {
    return fn.length === 1 ? fn : function (args) { return fn(args); };
};
exports.once = function (fn) {
    var done = false;
    return function () {
        if (done) {
            return undefined;
        }
        else {
            done = true;
            return fn.apply(this, [arguments]);
        }
    };
};
exports.memoized = function (fn) {
    var lookupTable = {};
    return function (arg) { return lookupTable[arg] || (lookupTable[arg] = fn(arg)); };
};
function objectAssign() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    var to = {};
    for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; j++) {
            var currKey = keys[j];
            to[currKey] = obj[currKey];
        }
    }
    return to;
}
exports.objectAssign = objectAssign;
function objectEntries(obj) {
    return function (index) {
        if (index > Object.keys(obj).length - 1) {
            return;
        }
        var key = Object.keys(obj)[index];
        var value = obj[key];
        return [key, value];
    };
}
exports.objectEntries = objectEntries;
//# sourceMappingURL=es8-functional.js.map