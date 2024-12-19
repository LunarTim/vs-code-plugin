# Lumina Language VS Code Extension

## Overview

The Lumina Language VS Code Extension provides language support for the Lumina programming language. This extension offers features such as syntax highlighting, diagnostics, and code completion to enhance the development experience in Visual Studio Code.

## Features

- **Syntax Highlighting:** Provides syntax highlighting for Lumina source files.
- **Diagnostics:** Detects and reports syntax and semantic errors in Lumina code.
- **Code Completion:** Offers suggestions for keywords, variables, functions, and more.
- **Live Templates:** Includes snippets for common code patterns.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the `extension` directory:
   ```bash
   cd extension
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Open the `extension` directory in Visual Studio Code.
2. Press `Ctrl+Shift+B` to start compiling the client and server in watch mode.
3. Switch to the Run and Debug View in the Sidebar (`Ctrl+Shift+D`).
4. Select `Launch Client` from the dropdown.
5. Press `F5` to run the extension in a new Extension Development Host window.

## Development

### Build

To build the extension, run:
```bash
npm run compile
```

### Watch

To start the build process in watch mode, run:
```bash
npm run watch
```

### Lint

To lint the code, run:
```bash
npm run lint
```

## Testing

To run the test suite, execute:
```bash
npm test
```

## Examples

### Hello World

```Lumina
let message: string = "Hello, World!";
console.log(message);
```

![Hello World](./images/hello_world.png)

### Fibonacci Sequence

```Lumina
let a: number = 0;
let b: number = 1;
let c: number = 0;

for (let i: number = 0; i < 100; i++) {
    c = a + b;
    a = b;
    b = c;
}

console.log(c);
```

![Fibonacci Sequence](./images/fibonacci.png)

### Function Declaration and Call

```Lumina
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(1, 2));
```

![Function Declaration](./images/function_declaration.png)

### if else statement

```Lumina
let a: number = 1;

if (a > 0) {
    console.log("a is positive");
} else {
    console.log("a is negative");
}
```

![if else statement](./images/if_else.png)


## errors and warnings

### Unused Variable

```Lumina
let a: number = 1;
let b: number = 2;

console.log(a);
```

![Unused Variable](./images/unused_variable.png)
![Unused Variable Warning](./images/unused_variable_warning.png)

### Type Mismatch

```Lumina
let a: number = 1;
let b: string = "Hello, World!";

console.log(a + b);
```

![Type Mismatch](./images/type_mismatch.png)
![Type Mismatch Error](./images/type_mismatch_error.png)

### reassignment of constant variable

```Lumina
const a: number = 1;
a = 2;
```

![Reassignment of Constant Variable](./images/reassignment_of_constant_variable.png)
![Reassignment of Constant Variable Error](./images/reassignment_of_constant_variable_error.png)


### unknown variable

```Lumina
let a: number = 1;
let b: number = a;

console.log(b);
```

![Unknown Variable](./images/unknown_variable.png)
![Unknown Variable Error](./images/unknown_variable_error.png)

### function declaration error

```Lumina
function func

function func {}
```

![Function Declaration](./images/function_declaration_missing_brackets.png)

![Function Declaration](./images/function_declaration_missing_brackets2.png)

![Function Declaration Error](./images/function_declaration_missing_brackets_error.png)


### missing semicolon

```Lumina
let a: number = 1
```

![Missing Semicolon](./images/missing_semicolon.png)
![Missing Semicolon Error](./images/missing_semicolon_error.png)


## Completions
![function completions](./images/function_completion.png)
![fi completion](./images/fi_completion.png)

### Live Templates
#### If Statement
type `fi` and press `Tab` to get the following:
![fi completion](./images/fi_completion.png)
```Lumina
if () {
    
}
```

#### If Else Statement
type `elfi` and press `Tab` to get the following:
![elfi completion](./images/elfi_completion.png)
```Lumina
if () {
    
} else {
    
}
```

#### For Loop
type `fori` and press `Tab` to get the following:
![for completion](./images/fori_completion.png)
```Lumina
for (let i: number = 0; i < length; i++) {
    
}
```

#### Function Declaration
type `fn` and press `Tab` to get the following:
![func completion](./images/fn_completion.png)
```Lumina
function name(params): type {
    
}
```

#### Console Log
type `log` and press `Tab` to get the following:
![cl completion](./images/log_completion.png)
```Lumina
console.log();
```

### Other
When you type the left bracket `(` after a function name, it will automatically add the right bracket `)` and the parameters. `}` or `]` will be added when you type the left bracket `{` or `[`.