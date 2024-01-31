export interface WritingStrategy {
    parse(o: object): string;
}

/**
 * @class Writer
 * @description This class is responsible for writing an object and returning a string.
 * used in combination with the Reader class.
 * @param strategy The strategy to use for writing the object.
 *
 */
export class Writer {

    private strategy: WritingStrategy;

    constructor(strategy: WritingStrategy) {
        this.strategy = strategy;
    }

    public parse(o: object): string {
        return this.strategy.parse(o);
    }
}
