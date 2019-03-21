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