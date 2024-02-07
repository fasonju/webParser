import {JsonWritingStrategy} from "./JsonStrategy";

const json = new JsonWritingStrategy();

it('should parse a basic object correctly', () => {
    let object = json.parse({a: 1, b: 2});
    expect(object).toEqual('{"a":1,"b":2}');
})

it('should parse a basic array correctly', () => {
    let object = json.parse([1, 2]);
    expect(object).toEqual('[1,2]');
})

it('should ignore all functions when parsing', () => {
    let object = json.parse({
        a: () => {
        },
        b: () => {
        },
        c: "john"
    });
    expect(object).toEqual('{"c":"john"}');
})

it('should throw TypeError when it contains a bigint', () => {
    expect(() => json.parse({a: 1n})).toThrowError(TypeError);
})

it('should throw TypeError when it contains a circular reference', () => {
    let a = {a: 1};
    // @ts-ignore
    a["b"] = a; //not possible to test withotu ts-ignore
    expect(() => json.parse(a)).toThrowError(TypeError);
})
