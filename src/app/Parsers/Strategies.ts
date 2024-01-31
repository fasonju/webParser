import {JsonReadingStrategy} from "./Json/JsonStrategy";
import {ReadingStrategy} from "./Reader";

export enum Strategy {
    Json,
    TOML,
    XML,
}


export function getReadStrategy(strategy: Strategy): ReadingStrategy {
    switch (strategy) {
        case Strategy.Json:
            return new JsonReadingStrategy();
        case Strategy.TOML:
            throw new Error("TOML not implemented yet");
        case Strategy.XML:
            throw new Error("XML not implemented yet");
        default:
            throw new Error("Invalid strategy");
    }
}

export function getWriteStrategy(strategy: Strategy): ReadingStrategy {
    switch (strategy) {
        case Strategy.Json:
            return new JsonReadingStrategy();
        case Strategy.TOML:
            throw new Error("TOML not implemented yet");
        case Strategy.XML:
            throw new Error("XML not implemented yet");
        default:
            throw new Error("Invalid strategy");
    }
}
