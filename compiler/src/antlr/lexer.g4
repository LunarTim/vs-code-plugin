lexer grammar lexer;

// Tokens
IDENTIFIER: [a-zA-Z][a-zA-Z0-9_]*;
NUMBER: [0-9]+;
PUNCTUATION: ';' | '(' | ')' | '[' | ']' | '{' | '}';
OPERATOR: '=' | '+' | '-' | '*' | '/' | '%';

// Keywords
LET: 'let';
INT: 'int';
FLOAT: 'float';
BOOL: 'bool';

// Whitespace and comments
WS: [ \t\r\n]+ -> skip;
LINE_COMMENT: '//' ~[\r\n]* -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;

// Error handling
error: . { notifyErrorListeners("Invalid token: " + $text); };