
import * as funcs from '../lib/es8-functional.js';
import * as arrayUtils from '../lib/array_utils.js';

let books = [
    {   name: "beginners",
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
            "reviews": [{good: 4, excellent: 12}]
        },
    ]},
    {   name: "pro",
        bookDetails: [{
            "id": 111,
            "title": "ProHello",
            "author": "Aseel",
            "rating": [4.4],
            "reviews": [{good: 4, excellent: 12}]
        },
        {
            "id": 222,
            "title": "ProMachines",
            "author": "Pouria",
            "rating": [4.3],
            "reviews": []
        }
    ]}
]


let bookDetails = arrayUtils.flatten(arrayUtils.map(books, category => category.bookDetails));
console.log(bookDetails);