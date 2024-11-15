import { describe, it, expect } from 'vitest';
import { Lexer } from '../src/lexer';

// Example input for testing
const input = `
// Variable declaration
let a = 10;
let b = true;
let c = "hello";

// Function declaration
function add(a: number, b: number): number {
    return a + b;
}

// Function call
let result = add(1, 2);

// Control structures
if (b) {
    console.log("b is true");
} else {
    console.log("b is false");
}

// Loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}
`;

describe('Lexer', () => {
  it('should tokenize the input correctly', () => {
    const lexer = new Lexer(input);
    const tokens = lexer.tokenize();
    expect(tokens).toBeDefined();
    // Add more specific token checks here
  });
});