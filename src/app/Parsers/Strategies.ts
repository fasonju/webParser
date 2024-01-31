import {JsonReadingStrategy, JsonWritingStrategy} from "./Json/JsonStrategy";
import {ReadingStrategy} from "./Reader";
import {WritingStrategy} from "./Writer";

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
            throw new Error("TOML not implemented yet");
        case Strategies.XML:
            throw new Error("XML not implemented yet");
        default:
            throw new Error("Invalid strategy");
    }
}

export function getWriteStrategy(strategy: Strategies): WritingStrategy {
    switch (strategy) {
        case Strategies.Json:
            return new JsonWritingStrategy();
        case Strategies.TOML:
            throw new Error("TOML not implemented yet");
        case Strategies.XML:
            throw new Error("XML not implemented yet");
        default:
            throw new Error("Invalid strategy");
    }
}
