export interface readingStrategy {
    read(str: string): object;
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

    public read(str: string): object {
        return this.strategy.read(str);
    }
}
