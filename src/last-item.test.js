import { describe, expect, it } from "vitest";
import { lastItem } from "./last-item.js";

describe("lastItem", () => {
  it("returns the final item from a populated array", () => {
    expect(lastItem(["a", "b", "c"])).toBe("c");
  });

  it("works for a single-item array", () => {
    expect(lastItem([42])).toBe(42);
  });

  it("returns undefined for an empty array", () => {
    expect(lastItem([])).toBeUndefined();
  });
});
