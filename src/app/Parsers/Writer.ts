export interface WritingStrategy {
    /**
     *
     * @param o object to be parsed
     * @throws TypeError if the object cannot be parsed
     * @returns string representation of the object
     */
    parse(o: object): string;
}
