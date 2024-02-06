export interface WritingStrategy {
    parse(o: object): string | SyntaxError;
}
