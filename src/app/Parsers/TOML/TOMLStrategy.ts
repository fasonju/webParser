import {ReadingStrategy} from "../Reader";
import {WritingStrategy} from "../Writer";

export class TOMLReadingStrategy implements ReadingStrategy {
    read(str: string): object | SyntaxError {
        throw new Error("Method not implemented.");
    }

}

export class TOMLWritingStrategy implements WritingStrategy {
    parse(o: object): string | SyntaxError {
        throw new Error("Method not implemented.");
    }
}
