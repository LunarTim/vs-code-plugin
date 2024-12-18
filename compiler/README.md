# TypeScript Variant Compiler

Author: Tim Hofman

## Language Features

This is a TypeScript variant that supports the following features:

### Example Code
```typescript
// Variable declarations
let x: number = 42;
let message: string = "Hello";
let isValid: boolean = true;

// Function declaration with parameters
function add(a: number, b: number): number {
    return a + b;
}

// Control structures
function processNumbers(count: number): void {
    // For loop
    for (let i: number = 0; i < count; i = i + 1) {
        // If-else statement
        if (i % 2 == 0) {
            add(i, 1);
        } else {
            add(i, 2);
        }
    }
}
```

### EBNF Grammar
```ebnf
program = statement* EOF ;

statement = variableDeclaration
          | functionDeclaration
          | expressionStatement
          | ifStatement
          | forStatement
          | returnStatement ;

variableDeclaration = "let" IDENTIFIER (":" type)? ("=" expression)? ";" ;

functionDeclaration = "function" IDENTIFIER "(" parameterList? ")" (":" type)? block ;

parameterList = parameter ("," parameter)* ;

parameter = IDENTIFIER ":" type ;

type = "number" | "string" | "boolean" | "void" ;

block = "{" statement* "}" ;

expressionStatement = expression ";" ;

ifStatement = "if" "(" expression ")" block ("else" block)? ;

forStatement = "for" "(" variableDeclaration expression ";" expression ")" block ;

returnStatement = "return" expression? ";" ;

expression = literal
           | IDENTIFIER
           | functionCall
           | expression ("*"|"/") expression
           | expression ("+"|"-") expression
           | expression ("=="|"!="|"<"|">"|"<="|">=") expression
           | expression "&&" expression
           | expression "||" expression
           | "(" expression ")" ;

functionCall = IDENTIFIER "(" argumentList? ")" ;

argumentList = expression ("," expression)* ;

literal = NUMBER | STRING | BOOLEAN ;
```

## Diagnostics Support

### Error Diagnostics
1. Syntax Errors: The compiler detects and reports syntax errors such as missing semicolons, mismatched parentheses, and invalid tokens.
2. Type Mismatch Error: Reports when a value of one type is assigned to a variable of an incompatible type.

### Warning Diagnostics
1. Unused Variable Warning: Reports when a declared variable is never used in the code.
2. Implicit Type Warning: Reports when a variable is declared without an explicit type annotation.

## Code Completion Support

1. Keyword Completion: Suggests language keywords like `let`, `function`, `if`, `for`, etc.
2. Variable/Function Name Completion: Suggests previously declared variables and functions in the current scope.

## Build Instructions

1. Install dependencies:
```bash
npm install
```

2. Generate ANTLR4 parser:
```bash
npm run antlr4ts
```

3. Build the project:
```bash
npm run build
```

## Test Instructions

Run the test suite:
```bash
npm test
``` 