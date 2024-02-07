import {WritingStrategy} from "../Writer";
import {ReadingStrategy} from "../Reader";

export class JsonReadingStrategy implements ReadingStrategy {
    /**
     * @see ReadingStrategy.read
     */
    read(str: string): object {
        let object = JSON.parse(str);
        /// object is not null and is an object so no array or primitives
        if (object && typeof object === "object") {
            return object
        } else {
            throw SyntaxError("Invalid JSON")
        }
    }

}

export class JsonWritingStrategy implements WritingStrategy {
    parse(o: object): string {
        return JSON.stringify(o)
    }
}
