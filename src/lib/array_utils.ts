export const map = (arr: any[], fn: (elem: any) => any) => {
    let result = [];
    for(const element of arr) {
        result.push(fn(element));
    }
    return result;
}

export const filter = (arr: any[], fn: any) => {
    let result = [];
    for(const element of arr) {
        if(fn(element)) {
            result.push(element);
        }
    }
    return result;
}

export const concatAll = (arr: any[]) => {
    let result = [];
    for(const elem of arr) {
        if(Array.isArray(elem)) {
            result.push(...elem);
        } else {
            result.push(elem);
        }
    }
    return result;
}

export function flatten(array: any[]) {
    let results: any = [];
    for(const value of array) {
        results.push.apply(results, value);
    }
    return results;
}

export const reduce = (array: any, fn: (accumulator: any, currValue: any) => any, initialValue?: any) => {
    let accumulator;
    if(initialValue != undefined) {
        accumulator = initialValue;
    } else {
        accumulator = array[0];
    }
    if(initialValue === undefined) {
        for(let i=1; i<array.legnth; i++) {
            accumulator = fn(accumulator, array[i]);
        }
    } else {
        for(const value of array) {
            accumulator = fn(accumulator, value);
        }
    }
    return [accumulator];
}

// let a = [1,2,3,4,5];
// let sum = a.reduce((accumulator: number, currValue: number) => {
//     accumulator += currValue;
//     return accumulator;
// })
// console.log(sum);