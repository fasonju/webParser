import {JsonReadingStrategy} from "./JsonStrategy";

/// Reading Strategy tests
it('should read a basic JSON correctly', () => {
    let json = new JsonReadingStrategy();
    let object = json.read('{"a": 1, "b": 2}');
    expect(object).toEqual({a: 1, b: 2});
})

it('should throw an error when reading an invalid JSON', () => {
    let json = new JsonReadingStrategy();
    expect(() => json.read('{"a": 1, "b": 2')).toThrowError(SyntaxError);
})

it('should throw an error when reading a number but invalid JSON', () => {
    let json = new JsonReadingStrategy();
    expect(() => json.read('1')).toThrowError(SyntaxError);
})

it('should throw an error when reading a string but invalid JSON', () => {
    let json = new JsonReadingStrategy();
    expect(() => json.read('"1"')).toThrowError(SyntaxError);
})

it('should throw an error when reading a boolean but invalid JSON', () => {
    let json = new JsonReadingStrategy();
    expect(() => json.read('true')).toThrowError(SyntaxError);
})

it('should throw an error when reading a null but invalid JSON', () => {
    let json = new JsonReadingStrategy();
    expect(() => json.read('null')).toThrowError(SyntaxError);
})
it('should throw an error when reading empty but invalid JSON', () => {
    let json = new JsonReadingStrategy();
    expect(() => json.read('')).toThrowError(SyntaxError);
})

it('should throw an error when reading an empty string but invalid JSON', () => {
    let json = new JsonReadingStrategy();
    expect(() => json.read('""')).toThrowError(SyntaxError);
})
