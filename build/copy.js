"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Copier = void 0;
class Copier {
    constructor() {
        this.source = ["a", "b", "c", "\n", "d", "e", "f"];
    }
    // constructor() {
    //   this.copy();
    // }
    readChar() {
        return this.source[0];
    }
    readChars(count) {
        return this.source.slice(0, count);
    }
    writeChar(char) {
        const _char = char;
    }
    writeChars(chars) {
        const _chars = chars;
    }
    copyMultiple() {
        let index = 0;
        const chars = this.readChars(5);
        let writeableChars = [];
        while (index < chars.length) {
            if (chars[index] === "\n") {
                break;
            }
            writeableChars.push(chars[index]);
            index++;
        }
        this.writeChars(writeableChars);
    }
    copy() {
        const char = this.readChar();
        if (char !== "\n") {
            this.writeChar(char);
        }
    }
}
exports.Copier = Copier;
