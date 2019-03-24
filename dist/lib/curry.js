"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryCurry = function (binaryFn) { return function (firstArg) { return function (secondArg) { return binaryFn(firstArg, secondArg); }; }; };
exports.ternaryCurry = function (ternaryFn) { return function (firstArg) { return function (secondArg) { return function (thirdArg) { return ternaryFn(firstArg, secondArg, thirdArg); }; }; }; };
var curry = function (fn) {
    if (typeof fn !== 'function') {
        throw Error('No Function Provided');
    }
    return function curriedFn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length < fn.length) {
            return function () {
                var slice = [].slice.call(arguments);
                var concat = args.concat(slice);
                return curriedFn.apply(null, concat);
            };
        }
        return fn.apply(null, args);
    };
};
var loggerHelper = function (mode, initialMessage, errorMessage, lineNo) {
    if (mode === "debug") {
        console.debug(initialMessage, errorMessage + " at line: " + lineNo);
    }
    else if (mode === "error") {
        console.error(initialMessage, errorMessage + " at line: " + lineNo);
    }
    else if (mode === "warn") {
        console.warn(initialMessage, errorMessage + " at line: " + lineNo);
    }
    else {
        throw "wrong mode";
    }
};
var errorLogger = curry(loggerHelper)("error")("error at stats.js");
var debugLogger = curry(loggerHelper)("debug")("debug at stats.js");
var warnLogger = curry(loggerHelper)("warn")("warn at stats.js");
// Find a number in array contents
var match = curry(function (expr, str) {
    return str.match(expr);
});
var matchNumber = match(/[0-9]+/);
var filter = curry(function (fn, arr) {
    return arr.filter(fn);
});
var filterNumbers = filter(matchNumber);
console.log(filterNumbers(['hello', 'abc1', 'quack', '222wam']));
var partial = function (fn) {
    var partialArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        partialArgs[_i - 1] = arguments[_i];
    }
    var args = partialArgs;
    return function () {
        var fullArguments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fullArguments[_i] = arguments[_i];
        }
        var arg = 0;
        for (var i = 0; i < args.length && arg < fullArguments.length; i++) {
            if (args[i] === undefined) {
                args[i] = fullArguments[arg++];
            }
        }
        return fn.apply(null, args);
    };
};
var delayTenMs = partial(setTimeout, undefined, 3000);
delayTenMs(function () { return console.log('do task'); });
// let args = [undefined, 10];
// const retFunc = (...fullArguments: any) => {
//     let arg = 0;
//     for(let i=0; i< 2 && arg<fullArguments.length; i++) {
//         if(args[i] === undefined) {
//             args[i] = fullArguments[arg++];
//         }
//     }
//     return setTimeout.apply(null, args); 
// }
//# sourceMappingURL=curry.js.map