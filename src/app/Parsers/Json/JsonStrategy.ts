import {WritingStrategy} from "../Writer";
import {ReadingStrategy} from "../Reader";

export class JsonReadingStrategy implements ReadingStrategy {
    read(str: string): object {
        try {
            return JSON.parse(str);
        } catch (e) {
            if (e instanceof SyntaxError) {
                return e;
            }
        }
        return Error("Unknown error")
    }

}

export class JsonWritingStrategy implements WritingStrategy {
    parse(o: object): string {
        return JSON.stringify(o)
    }
}
