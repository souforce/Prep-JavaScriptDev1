const myMath = require('./myMath');

test('Testing Math Sum', () => {
    expect(myMath.sum(2, 6)).toBe(8);
});

test('Testing wrong Math Sum Result', () => {
    expect(myMath.sum(2, 6)).not.toBe(10);
})

test('Testing Divide 2/2 need to be 0', () => {
    expect(myMath.divide(2,2)).toBe(1);
})

test('Testing Wrong Math for Divide', () => {
    expect(myMath.divide(5,5)).not.toBe(10);
})

test('Testing if result is greater than ', () => {
    expect(myMath.sum(10, 10)).toBeGreaterThan(10);
})

// test('Testing if divide can not be divide by zero', () => {
//     expect(myMath.divide(10,0)).toThrowError(new Error('You can not divide values by zero'));
// })

