/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
export interface CloneOptions {
    circular?: boolean;
    depth?: number;
    prototype?: object | null;
    includeNonEnumerable?: boolean;
}
export declare function clone<T>(
    parent: T,
    circular?: boolean | CloneOptions,
    depth?: number,
    prototype?: object | null,
    includeNonEnumerable?: boolean
): T;
export declare namespace clone {
    const clonePrototype: <T>(parent: T) => T;
    const __objToStr: (o: unknown) => string;
    const __isDate: (o: unknown) => o is Date;
    const __isArray: (o: unknown) => o is unknown[];
    const __isRegExp: (o: unknown) => o is RegExp;
    const __getRegExpFlags: (re: RegExp) => string;
}
