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

## Getting Started
See detailed setup and usage instructions in:
- [Compiler README](./compiler/README.md)
- [Extension README](./extension/README.md)

## License
This project is licensed under the MIT License.
