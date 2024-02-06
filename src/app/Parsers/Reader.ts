export interface ReadingStrategy {
    /**
     * @returns object representation of the string
     * @throws SyntaxError if the string cannot be parsed
     * @param str
     */
    read(str: string): object;
}
