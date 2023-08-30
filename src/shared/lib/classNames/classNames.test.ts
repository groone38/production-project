import { classNames } from "./classNames";

describe("classNames", () => {
  it("with only first params", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
  it("with additional class", () => {
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(
      "someClass class1 class2",
    );
  });
  it("with mods", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: true }, [
        "class1",
        "class2",
      ]),
    ).toBe("someClass class1 class2 hovered scrollable");
  });
  it("with mods false", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: false }, [
        "class1",
        "class2",
      ]),
    ).toBe("someClass class1 class2 hovered");
  });
  it("with mods undefined", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: undefined }, [
        "class1",
        "class2",
      ]),
    ).toBe("someClass class1 class2 hovered");
  });
});
