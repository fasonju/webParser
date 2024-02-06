import {ReadingStrategy} from "../Reader";
import {WritingStrategy} from "../Writer";

export class XMLReadingStrategy implements ReadingStrategy {
    read(str: string): object | SyntaxError {
        throw new Error("Method not implemented.");
    }

}

export class XMLWritingStrategy implements WritingStrategy {
    parse(o: object): string | SyntaxError {
        throw new Error("Method not implemented.");
    }
}
