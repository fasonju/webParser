import {JsonReadingStrategy, JsonWritingStrategy} from "./Json/JsonStrategy";
import {ReadingStrategy} from "./Reader";
import {WritingStrategy} from "./Writer";
import {TOMLReadingStrategy, TOMLWritingStrategy} from "./TOML/TOMLStrategy";
import {XMLReadingStrategy, XMLWritingStrategy} from "./XML/XMLStrategy";

export enum Strategies {
    Json = "Json",
    TOML = "TOML",
    XML = "XML",
}


export function getReadStrategy(strategy: Strategies): ReadingStrategy {
    switch (strategy) {
        case Strategies.Json:
            return new JsonReadingStrategy();
        case Strategies.TOML:
            return new TOMLReadingStrategy();
        case Strategies.XML:
            return new XMLReadingStrategy();
        default:
            throw new Error("Invalid strategy");
    }
}

export function getWriteStrategy(strategy: Strategies): WritingStrategy {
    switch (strategy) {
        case Strategies.Json:
            return new JsonWritingStrategy();
        case Strategies.TOML:
            return new TOMLWritingStrategy();
        case Strategies.XML:
            return new XMLWritingStrategy();
        default:
            throw new Error("Invalid strategy");
    }
}
