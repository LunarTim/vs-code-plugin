# Lumina Compiler

A compiler for the Lumina programming language, featuring static typing, modern syntax, and comprehensive error reporting.

## Features

### Language Features Supported
- Variable declarations (let, const, var)
- Function declarations with parameters and return types
- Basic types: number, string, boolean, any
- Control structures:
  - if/else statements
  - for loops
  - while loops
- Function calls with arguments
- Type annotations
- Built-in parsing functions (parseInt, parseFloat, parseString, etc.)
- Comments (single-line and multi-line)

### Example Code
#### Variable Declarations
```TypeScript
let x: number = 10;
const y: string = "Hello, World!";
var z: boolean = true;
```

#### Function Declarations
```TypeScript
function add(a: number, b: number): number {
    return a + b;
}
```

#### Control Structures
```TypeScript
if (x > 0) {
    console.log("x is positive");
} else {
    console.log("x is not positive");
}
```

#### Function Calls
```TypeScript
const result = add(5, 3);
console.log(result); // Output: 8
```

### Diagnostics Support
The compiler provides detailed error messages for syntax errors, semantic errors, and Warning Diagnostics, helping developers identify and fix issues in their code.

#### Error Diagnostics
##### Syntax Errors
- Missing semicolon
- Unmatched brackets/parentheses
- Unexpected tokens

##### Semantic Errors
- Variable is not defined
- Variable is already declared
- Type mismatch in expression

#### Warning Diagnostics
- Unused variable or function declaration
- Implicit type conversion
- Unreachable code

#### Code Completion
##### Keyword Completion
- Language keywords (let, const, var, function, etc.)
- Type names (number, string, boolean, any)
- Control Structures (if, else, for, while)

##### Context-Aware Completion
- Variable names in scope
- Function names with parameter hints
- Property access after dot operator
- Built-in function names


## Project Structure
```
└── 📁compiler
    └── 📁lib
        └── antlr-4.13.1-complete.jar
    └── 📁src
        └── 📁antlr
            └── 📁generated
                └── Lumina.interp
                └── Lumina.tokens
                └── LuminaLexer.interp
                └── LuminaLexer.tokens
                └── LuminaLexer.ts
                └── LuminaListener.ts
                └── LuminaParser.ts
                └── LuminaVisitor.ts
            └── lexer.g4
            └── Lumina.g4
            └── parser.g4
        └── ast.ts
        └── codeCompletion.ts
        └── diagnostics.ts
        └── index.ts
        └── lexer.ts
        └── LuminaVisitor.ts
        └── parser.ts
        └── semanticAnalyzer.ts
    └── 📁tests
        └── index.test.ts
        └── lexer.test.ts
        └── luminaLexer.test.ts
        └── luminaVisitor.test.ts
        └── parser.test.ts
        └── semanticAnalyzer.test.ts
    └── .gitignore
    └── generate-compiler.bat
    └── jest.config.js
    └── package-lock.json
    └── package.json
    └── README.md
    └── tsconfig.json
    └── vitest.config.ts
```


## Build Instructions
### Prerequisites
- Node.js (v18.17.1 or newer)
- npm (10.2.4 or newer)
- Java Runtime Environment (for ANTLR)

### Build
```Bash
npm install
npm run build
```

### Generate ANTLR
```Bash
.\compiler\generate-compiler.bat
```


### Running Tests
```Bash
npm test
```