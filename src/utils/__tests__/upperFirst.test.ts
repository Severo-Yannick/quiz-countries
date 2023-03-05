import { describe, expect, test } from "@jest/globals";
import { upperFirst } from "../upperFirst";

describe("upperFirst module", () => {
  test("return string", () => {
    const word = "yannick";
    expect(upperFirst(typeof word)).toBe("String");
  });
  test("return first letter to uppercase", () => {
    const word = "yannick";
    const camelCase = "yannICK";
    expect(upperFirst(word)).toBe("Yannick");
    expect(upperFirst(camelCase)).toBe("Yannick");
  });
});
