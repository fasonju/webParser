import {WritingStrategy} from "../Writer";

interface ReadingStrategy {
}

export class JsonReadingStrategy implements ReadingStrategy {
    read(str: string): object {
        return JSON.parse(str);
    }

    isValid(str: string): boolean {
        //TODO add unit test
        try {
            let o = JSON.parse(str)
            if (o && typeof o === "object") {
                return true
            }
        } catch (e) {
            return false
        }
        return false
    }
}

export class JsonWritingStrategy implements WritingStrategy {
    parse(o: object): string {
        return JSON.stringify(o)
    }
}
