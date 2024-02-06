export interface ReadingStrategy {
    read(str: string): object | SyntaxError;
}
