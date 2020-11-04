const { test, expect } = require('@jest/globals');
const enhancer = require("./enhancer");

// test away!

test("adds",()=>{
    expect(enhancer.sum(2,1)).toBe(3)
})
