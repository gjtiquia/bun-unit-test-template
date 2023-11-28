import { beforeEach, describe, expect, it } from "bun:test";
import { Counter } from "./Counter";

describe("Counter tests", () => {
    let _counter: Counter;

    beforeEach(() => {
        _counter = new Counter;
    })

    it("should start with value zero", () => {
        expect(_counter.value).toBe(0);
    })

    it("should increment", () => {
        _counter.increment();
        expect(_counter.value).toBe(1);
    })

    it("should decrement", () => {
        _counter.decrement();
        expect(_counter.value).toBe(-1);
    })
})

