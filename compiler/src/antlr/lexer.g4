lexer grammar Lexer;

// Tokens
IDENTIFIER: [a-zA-Z][a-zA-Z0-9_]*;
NUMBER: [0-9]+;
PUNCTUATION: ';' | '(' | ')' | '[' | ']' | '{' | '}';
OPERATOR: '=' | '+' | '-' | '*' | '/' | '%';
WS: [ \t\r\n]+ -> skip