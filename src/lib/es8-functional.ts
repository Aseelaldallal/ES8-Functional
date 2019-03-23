export const forEach = (array: any, fn: any) => {
    for(let i=0; i<array.length; i++) {
        fn(array[i]);
    }
}


export const forEachObject = (object: any, fn: any) => {
    for(let property in object) {
        if(object.hasOwnProperty(property)) {
            fn(property, object[property]);
        }
    }
}

export const unless = (predicate:any, fn: any) => {
    if(!predicate) {
        fn();
    }
}

export const times = (num: any, fn: any) => {
    for(let i=0; i<num; i++) {
        fn(i);
    }
}

export const every = (array: any[], fn: (data: any)=>boolean) => {
    for(const val of array) {
        if(!fn(val)) return false;
    }
    return true;
}

export const some = (array: any, fn: (data: any) => boolean) => {
    for(const val of array) {
        if(fn(val)) return true;
    }
    return false;
}

export const sortBy = (property: string) => {
    return (a: any, b: any) => {
        if(a[property] < b[property]) {
            return -1;
        }
        if(a[property] > b[property]) {
            return 1;
        }
        return 0;
    }
}

export const tap = (value: any) => {
    return (fn: (data: any) => any) => {
        (fn(value),
        console.log(value))
    }
}

export const unary = (fn: (...data: any)=> any) => {
    return fn.length === 1 ? fn : (args: any) => fn(args)
}

export const once = (fn: (...data: any) => any) => {
    let done = false;
    return function() {
        if(done) {
            return undefined;
        } else {
            done = true;
            return fn.apply(this, [arguments]);
        }
    }
}

export const memoized = (fn: any) => {
    let lookupTable: any = {};
    return (arg: any)=> lookupTable[arg] || (lookupTable[arg] = fn(arg));
}

export function objectAssign(...data: any) {
    const to : any = {};
    for(let i=0; i<arguments.length; i++) {
        let obj = arguments[i];
        let keys = Object.keys(obj);
        for(let j=0; j< keys.length; j++) {
            let currKey = keys[j];
            to[currKey] = obj[currKey];
        }
    }
    return to;
}

export function objectEntries(obj: object) {
    return function(index: number) {
        if(index > Object.keys(obj).length-1) {
            return;
        }
        let key = Object.keys(obj)[index];
        let value = (obj as any)[key];
         return [key, value];
    }
}

