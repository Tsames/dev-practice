const sum = require('./sum');

/*  Test 1  */
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

/*  Test 2  */
// test('object assignment', () => {
//   const data={'one': 1}
//   data['two'] = 2;
//   expect(data).toStrictEqual({'one': 1, 'two': 2})
// })

/*  Test 3  */
// test('the sum of two positive integers to not be zero', () => {
//   for(a=1; a<10; a++) {
//     for (b=1; b<10; b++) {
//       expect(a+b).not.toBe(0)
//     }
//   }
// })

/*  Test 4  */
test('multiple matchers', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(4);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
})