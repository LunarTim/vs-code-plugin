grammar Lumina;

// Parser rules
program: (statement)*;

statement
    : variableDeclaration
    | functionDeclaration
    | expressionStatement
    | ifStatement
    | forStatement
    | whileStatement
    | returnStatement
    | block
    ;

variableDeclaration
    : ('let' | 'const' | 'var') IDENTIFIER (':' type)? ('=' expression)? PUNCTUATION
    ;

functionDeclaration
    : 'function' IDENTIFIER '(' parameterList? ')' (':' type)? block
    ;

parameterList
    : parameter (',' parameter)*
    ;

parameter
    : IDENTIFIER (':' type)?
    ;

expressionStatement
    : expression PUNCTUATION
    ;

ifStatement
    : 'if' '(' expression ')' statement ('else' statement)?
    ;

forStatement
    : 'for' '(' (variableDeclaration | expressionStatement)? ';' expression? ';' expression? ')' statement
    ;

whileStatement
    : 'while' '(' expression ')' statement
    ;

returnStatement
    : 'return' expression? PUNCTUATION
    ;

block
    : '{' statement* '}'
    ;

expression
    : assignmentExpression
    ;

assignmentExpression
    : conditionalExpression (assignmentOperator assignmentExpression)?
    ;

conditionalExpression
    : logicalOrExpression ('?' expression ':' conditionalExpression)?
    ;

logicalOrExpression
    : logicalAndExpression ('||' logicalAndExpression)*
    ;

logicalAndExpression
    : equalityExpression ('&&' equalityExpression)*
    ;

equalityExpression
    : relationalExpression (equalityOperator relationalExpression)*
    ;

relationalExpression
    : additiveExpression (relationalOperator additiveExpression)*
    ;

additiveExpression
    : multiplicativeExpression (additiveOperator multiplicativeExpression)*
    ;

multiplicativeExpression
    : unaryExpression (multiplicativeOperator unaryExpression)*
    ;

unaryExpression
    : postfixExpression
    | unaryOperator unaryExpression
    ;

postfixExpression
    : primaryExpression
    ;

primaryExpression
    : IDENTIFIER
    | NUMBER
    | STRING
    | 'true'
    | 'false'
    | 'null'
    | '(' expression ')'
    ;

type
    : 'number'
    | 'string'
    | 'boolean'
    | 'any'
    | IDENTIFIER
    ;

assignmentOperator
    : '=' | '+=' | '-=' | '*=' | '/=' | '%='
    ;

equalityOperator
    : '==' | '!=' | '===' | '!=='
    ;

relationalOperator
    : '<' | '>' | '<=' | '>='
    ;

additiveOperator
    : '+' | '-'
    ;

multiplicativeOperator
    : '*' | '/' | '%'
    ;

unaryOperator
    : '!' | '-'
    ;

// Lexer rules
IDENTIFIER: [a-zA-Z_$][a-zA-Z0-9_$]*;
NUMBER: [0-9]+ ('.' [0-9]+)?;
STRING: '"' (~["\\] | '\\' .)* '"' | '\'' (~['\\] | '\\' .)* '\'';
PUNCTUATION: ';' | ',' | '.' | '(' | ')' | '{' | '}' | '[' | ']';
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
MULTILINE_COMMENT: '/*' .*? '*/' -> skip;