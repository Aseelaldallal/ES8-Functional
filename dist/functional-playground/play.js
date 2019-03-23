"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrayUtils = __importStar(require("../lib/array_utils.js"));
var books = [
    { name: "beginners",
        bookDetails: [
            {
                "id": 333,
                "title": "Angular",
                "author": "Hadeel",
                "rating": [4.0],
                "reviews": []
            },
            {
                "id": 444,
                "title": "Wack",
                "author": "Mo",
                "rating": [4.7],
                "reviews": [{ good: 4, excellent: 12 }]
            },
        ] },
    { name: "pro",
        bookDetails: [{
                "id": 111,
                "title": "ProHello",
                "author": "Aseel",
                "rating": [4.4],
                "reviews": [{ good: 4, excellent: 12 }]
            },
            {
                "id": 222,
                "title": "ProMachines",
                "author": "Pouria",
                "rating": [4.3],
                "reviews": []
            }
        ] }
];
var bookDetails = arrayUtils.flatten(arrayUtils.map(books, function (category) { return category.bookDetails; }));
var total = arrayUtils.reduce(bookDetails, function (accumulator, currentValue) {
    var reviews = currentValue.reviews.length > 0 ? currentValue.reviews[0] : null;
    if (reviews) {
        for (var key in reviews) {
            if (key === "good" || key === "excellent") {
                accumulator[key] += reviews[key];
            }
        }
    }
    return accumulator;
}, { good: 0, excellent: 0 });
console.log(total);
//# sourceMappingURL=play.js.map