import {ReadingStrategy} from "../Reader";
import {WritingStrategy} from "../Writer";

export class TOMLReadingStrategy implements ReadingStrategy {
    read(str: string): object {
        throw new Error("Method not implemented.");
    }

}

export class TOMLWritingStrategy implements WritingStrategy {
    parse(o: object): string {
        throw new Error("Method not implemented.");
    }
}
