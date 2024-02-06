import {Reader} from "../Reader";
import {Writer} from "../Writer";
import {JsonReadingStrategy, JsonWritingStrategy} from "./JsonStrategy";

it('should parse Json and print the exact same Json', () => {
    const json = '{"a": 1, "b": 2}'
    const reader = new Reader(new JsonReadingStrategy())
    const writer = new Writer(new JsonWritingStrategy())

    expect(
        writer.parse(reader.read(json)))
        .toEqual(
            json
                .replaceAll(' ', '')
                .replaceAll('\n', '')
        )
})

it('should parse Json and print the exact same Json', () => {
    const json = '{"a": [1, 2, "de"], "b": {' +
        '"c": 1, "d": 2, "e": "de" }}'
    const reader = new Reader(new JsonReadingStrategy())
    const writer = new Writer(new JsonWritingStrategy())

    expect(
        writer.parse(reader.read(json)))
        .toEqual(
            json
                .replaceAll(' ', '')
                .replaceAll('\n', '')
        )
})
