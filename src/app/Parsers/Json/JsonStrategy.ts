import {WritingStrategy} from "../Writer";
import {ReadingStrategy} from "../Reader";

export class JsonReadingStrategy implements ReadingStrategy {
    read(str: string): object {
        try {
            let object = JSON.parse(str);
            /// object is not null and is an object so no array or primitives
            if (object && typeof object === "object") {
                return object
            } else {
                return new SyntaxError("Invalid JSON")
            }
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
