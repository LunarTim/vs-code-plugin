parser grammar parser;

options { tokenVocab=Lexer; }

// Entry point
program: statement* EOF;

statement
    : variableDeclaration
    | functionCall
    ;

variableDeclaration
    : LET IDENTIFIER OPERATOR expression PUNCTUATION
    ;

functionCall
    : IDENTIFIER '(' (expression (',' expression)*)? ')' PUNCTUATION
    ;

expression
    : primary (operator primary)*
    ;

primary
    : IDENTIFIER
    | NUMBER
    | '(' expression ')'
    ;

operator
    : '+' | '-' | '*' | '/' | '%'
    ;

type
    : 'int' | 'float' | 'bool'
    ;