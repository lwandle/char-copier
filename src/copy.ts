import { IDestination } from "./destination";
import { ISouce } from "./source";

export class Copier implements ISouce, IDestination {
  public source: string[] = ["a", "b", "c", "\n", "d", "e", "f"];

  public readChar(): string {
    return this.source[0];
  }

  public readChars(count: number): string[] {
    return this.source.slice(0, count);
  }

  public writeChar(char: string): void {
    const _char: string = char;
  }

  public writeChars(chars: string[]) {
    const _chars: string[] = chars;
  }

  public copyMultiple(): void {
    let index = 0;
    const chars: string[] = this.readChars(5);
    let writeableChars: string[] = [];
    while (index < chars.length) {
      if (chars[index] === "\n") {
        break;
      }
      writeableChars.push(chars[index]);
      index++;
    }
    this.writeChars(writeableChars);
  }

  public copy(): void {
    const char: string = this.readChar();
    if (char !== "\n") {
      this.writeChar(char);
    }
  }
}
