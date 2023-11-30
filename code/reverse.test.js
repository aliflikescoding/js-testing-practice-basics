const reverse = require('./reverse'); 

test('reverses a single character', () => {
  expect(reverse('a')).toBe('a');
});

test('reverses a word', () => {
  expect(reverse('foo')).toBe('oof'); 
});

test('reverses a sentence', () => {
  expect(reverse('Hello World')).toBe('dlroW olleH');
});

test('handles empty string', () => {
  expect(reverse('')).toBe('');  
});

test('handles numbers and punctuation', () => {
  expect(reverse('123!abc!')).toBe('!cba!321');
});

test('handles lowercase and uppercase letters', () => {
  expect(reverse('fOoBaR')).toBe('RaBoOf');
});  

test('handles unicode characters', () => {
  expect(reverse('nič')).toBe('čin'); 
});

test('handles mixed input', () => {
  expect(reverse('#123 aBc!')).toBe('!cBa 321#');
});