import {JsonReadingStrategy, JsonWritingStrategy} from "./Json/JsonStrategy";
import {ReadingStrategy} from "./Reader";
import {WritingStrategy} from "./Writer";
import {TOMLReadingStrategy, TOMLWritingStrategy} from "./TOML/TOMLStrategy";
import {XMLReadingStrategy, XMLWritingStrategy} from "./XML/XMLStrategy";


type Strategy = "Json" | "TOML" | "XML";

export const ReadingStrategies: Record<Strategy, ReadingStrategy> = {
    "Json": new JsonReadingStrategy(),
    TOML: new TOMLReadingStrategy(),
    XML: new XMLReadingStrategy()
}

export const WritingStrategies: Record<Strategy, WritingStrategy> = {
    "Json": new JsonWritingStrategy(),
    TOML: new TOMLWritingStrategy(),
    XML: new XMLWritingStrategy()
}
