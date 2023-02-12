import { Copier } from "./copy";

describe("A concrete class", () => {
  it("has to have implimentations of interface members", () => {
    const copier = new Copier();

    spyOn(copier, "readChar");
    spyOn(copier, "readChars");
    spyOn(copier, "writeChar");
    spyOn(copier, "writeChars");

    expect(copier.readChar).toBeDefined();
    expect(copier.readChars).toBeDefined();
    expect(copier.writeChar).toBeDefined();
    expect(copier.writeChars).toBeDefined();
  });
});

describe("The source function", () => {
  it("should return a string", () => {
    const copier = new Copier();
    const character: string = "y";
    expect(typeof character).toMatch(typeof copier.readChar());
  });

  it("should return 4 characters", () => {
    const copier = new Copier();
    copier.copyMultiple();
    expect(copier.readChars(4).length).toEqual(4);
  });
});

describe("The destination function", () => {
  it("have the same value as the source function", () => {
    const copier = new Copier();
    const character: string = copier.readChar();

    spyOn(copier, "writeChar");
    copier.copy();
    expect(copier.writeChar).toHaveBeenCalledWith(character);
  });

  it("should be not called if the the source function returns a newline", () => {
    const copier = new Copier();
    spyOn(copier, "readChar").and.returnValue("\n");
    spyOn(copier, "writeChar");
    copier.copy();
    expect(copier.writeChar).not.toHaveBeenCalled();
  });

  it("should only have values that are before the new line", () => {
    const copier = new Copier();
    spyOn(copier, "readChars").and.returnValue(["a", "b", "c", "\n", "d", "e"]);
    spyOn(copier, "writeChars");
    copier.copyMultiple();
    expect(copier.writeChars).toHaveBeenCalledWith(["a", "b", "c"]);
  });
});
