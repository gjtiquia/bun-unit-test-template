import { describe, expect, it } from "bun:test";
import { Counter } from "./Counter";

describe("Counter tests", () => {

    it("should start with value zero", () => {
        const counter = new Counter();
        expect(counter.value).toBe(0);
    })

})

