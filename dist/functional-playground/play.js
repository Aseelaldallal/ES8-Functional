"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var funcs = __importStar(require("../lib/es8-functional.js"));
var arrayUtils = __importStar(require("../lib/array_utils.js"));
var books = [
    { name: "beginners",
        bookDetails: [
            {
                "id": 333,
                "title": "Angular",
                "author": "Hadeel",
                "rating": [4.0],
            },
            {
                "id": 444,
                "title": "Wack",
                "author": "Mo",
                "rating": [4.7],
            },
        ] },
    { name: "pro",
        bookDetails: [{
                "id": 111,
                "title": "ProHello",
                "author": "Aseel",
                "rating": [4.4],
            },
            {
                "id": 222,
                "title": "ProMachines",
                "author": "Pouria",
                "rating": [4.3]
            }
        ] }
];
var reviewDetails = [
    {
        id: 111,
        reviews: [{ good: 4, excellent: 19 }]
    },
    {
        id: 222,
        reviews: []
    },
    {
        id: 333,
        reviews: []
    },
    {
        id: 444,
        reviews: [{ good: 1, excellent: 9 }]
    },
];
var bookDetails = arrayUtils.flatten(arrayUtils.map(books, function (category) { return category.bookDetails; }));
var bSorted = bookDetails.sort(funcs.sortBy("id"));
var rSorted = reviewDetails.sort(funcs.sortBy("id"));
var merged = arrayUtils.zip(bSorted, rSorted, function (bd, rd) {
    if (bd.id === rd.id) {
        return __assign({}, bd, rd);
    }
});
console.log(merged);
//# sourceMappingURL=play.js.map