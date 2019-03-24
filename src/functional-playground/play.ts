
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
        },
        {
            "id": 444,
            "title": "Wack",
            "author": "Mo",
            "rating": [4.7],
        },
    ]},
    {   name: "pro",
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
    ]}
]

let reviewDetails = [
    {
        id: 111,
        reviews: [{good: 4, excellent: 19}]
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
        reviews: [{good: 1, excellent: 9}]
    },
];

let bookDetails = arrayUtils.flatten(arrayUtils.map(books, category => category.bookDetails));
let bSorted = bookDetails.sort(funcs.sortBy("id"));
let rSorted = reviewDetails.sort(funcs.sortBy("id"));

let merged = arrayUtils.zip(bSorted, rSorted, (bd, rd)=> {
    if(bd.id === rd.id) {
        return {...bd, ...rd};
    }
});
console.log(merged);