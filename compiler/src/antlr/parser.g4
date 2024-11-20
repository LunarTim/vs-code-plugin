parser grammar Parser;

options { tokenVocab=Lexer; }

// Entry point
program: statement* EOF;

classDeclaration: 'public' 'class' IDENTIFIER '{' classBody '}'; 

classBody: attributeDeclaration | methodDeclaration;

attributeDeclaration: 'public' 'final' type IDENTIFIER ';';

methodDeclaration: 'public' type IDENTIFIER '(' parameterList? ')' block;

parameterList: parameter (',' parameter)*;

parameter: type IDENTIFIER;

block: '{' statement* '}';


statement: declaration | assignment | expression;


declaration: 'let' IDENTIFIER ':' type ('=' expression)?;


assignment: IDENTIFIER '=' expression;


expression: primary (operator primary)*;
primary: IDENTIFIER | NUMBER | '(' expression ')';
operator: '+' | '-' | '*' | '/' | '%';


type: 'int' | 'float' | 'bool';


error: . { notifyErrorListeners("Invalid token: " + $text); }


WS: [ \t\r\n]+ -> skip;


LINE_COMMENT: '//' ~[\r\n]* -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;


IDENTIFIER: [a-zA-Z][a-zA-Z0-9_]*;
NUMBER: [0-9]+;
PUNCTUATION: ';' | '(' | ')' | '[' | ']' | '{' | '}';
OPERATOR: '=' | '+' | '-' | '*' | '/' | '%';

// Keywords
LET: 'let';
INT: 'int';
FLOAT: 'float';
BOOL: 'bool';