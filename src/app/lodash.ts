import * as _ from 'lodash';

declare module 'lodash' {
    interface LoDashStatic {
        isNonEmptyString(str: string): boolean;
        isEmptyString(str: string): boolean;
        isEmptyArray<T>(a: T[]): boolean;
        isNonEmptyArray<T>(a: T[]): boolean;
        isNullOrEmptyString(str: string): boolean;
        isNullOrUndefined<T>(val: T): boolean;
        isNullOrEmpty<T>(value: T[]): boolean;
    }
}

module LoDash {
    export function isEmptyArray<T>(a: T): boolean {
        return Array.isArray(a) && !a.length;
    }
    // the rest of your functions
}

_.mixin(Object.keys(LoDash)
    .reduce(
    (object, key) => {
        object[key] = LoDash[key];
        return object;
    },
    Object.create(null)
    ));
export = _;
// export as namespace _;

