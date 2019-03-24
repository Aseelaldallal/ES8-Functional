import { forEach } from "./es8-functional";

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

export const zip = (arr1: any[], arr2: any[], fn: (a: any, b: any) => any) => {
    let results = [];
    for(let i = 0; i<Math.min(arr1.length, arr2.length); i++) {
        results.push(fn(arr1[i], arr2[i]));
    }
    return results;
}