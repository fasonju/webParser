import {WritingStrategy} from "../Writer";
import {ReadingStrategy} from "../Reader";

export class JsonReadingStrategy implements ReadingStrategy {
    read(str: string): object {
        return JSON.parse(str);
    }

}

export class JsonWritingStrategy implements WritingStrategy {
    parse(o: object): string | SyntaxError {
        return JSON.stringify(o)
    }
}
