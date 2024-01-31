export interface readingStrategy {
    read(str: string): object;

    isValid(str: string): boolean;
}

/**
 * @class Reader
 * @description This class is responsible for reading a string and returning an object.
 * used in combination with the Writer class.
 * @param strategy The strategy to use for reading the string.
 */
export class Reader {

    private strategy: readingStrategy;

    constructor(strategy: readingStrategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: readingStrategy) {
        this.strategy = strategy;
    }

    public getStrategy(): readingStrategy {
        return this.strategy;
    }

    public isValid(str: string): boolean {
        return this.strategy.isValid(str);
    }

    public read(str: string): object {
        return this.strategy.read(str);
    }
}
