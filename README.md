# Programmeren 3
## VS Code Plugin

## Tim Hofman
- Studentnummer: 0156186-16
- Richting: IAO
- Studiejaar: 2024-2025

## Project Overview
This project consists of two main components:
1. A compiler for the Lumina programming language
2. A VS Code extension providing language support for Lumina

### Lumina Compiler
The compiler component provides:
- A TypeScript-like language implementation
- Support for variables, functions, and control structures
- Comprehensive error detection and semantic analysis
- EBNF-defined grammar
- Built-in type checking

Key features:
- Variable declarations (let, const, var)
- Function declarations with type annotations
- Control structures (if/else, for loops)
- Type system (number, string, boolean, void)

### VS Code Extension
The extension component offers:
- Syntax highlighting for Lumina files
- Real-time error diagnostics
- Code completion features
- Live templates for common code patterns

Diagnostic capabilities:
- Syntax error detection
- Type mismatch errors
- Unused variable warnings
- Constant reassignment detection
- Unknown variable detection

Code completion features:
- Keyword suggestions
- Live templates for:
  - If statements (`fi`)
  - If-else statements (`elfi`)
  - For loops (`fori`)
  - Function declarations (`fn`)
  - Console logging (`log`)
- Auto-closing brackets and parentheses

## Project Structure
- `/compiler` - Contains the Lumina language compiler implementation
- `/extension` - Contains the VS Code extension implementation

## Build Project
### In steps (from root)
1. change to compiler
```Bash
cd compiler
```
2. Install dependecies
```Bash
npm install
```
3. Build the compiler
```Bash
npm run build
```
4. change to extension
```Bash
cd ../extension
```
5. Install dependecies
```Bash
npm install
```
6. Build the extension
```Bash
npm run compile
```

### In one command (from root)
```Bash
cd compiler; npm install; npm run build; cd ../extension; npm install; npm run compile
```

Then follow the instructions in [Usage](./extension/README.md#usage) on how to run the extension in VS Code.


## Getting Started
See detailed setup and usage instructions in:
- [Compiler README](./compiler/README.md)
- [Extension README](./extension/README.md)
