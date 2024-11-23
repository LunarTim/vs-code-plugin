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
    | printStatement
    | block
    ;

variableDeclaration
    : ('let' | 'const' | 'var') IDENTIFIER (':' type)? ('=' expression)? SEMICOLON
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
    : expression SEMICOLON
    ;

ifStatement
    : 'if' '(' expression ')' statement ('else' statement)?
    ;

forStatement
    : 'for' '(' (variableDeclaration | expressionStatement)? (IDENTIFIER  (relationalOperator | equalityOperator) (IDENTIFIER | NUMBER))? SEMICOLON (IDENTIFIER unaryExpression)? ')' statement
    ;

whileStatement
    : 'while' '(' expression ')' statement
    ;

returnStatement
    : 'return' expression? SEMICOLON
    ;

printStatement
    : 'print' '(' expression ')' SEMICOLON
    ;

block
    : '{' statement* SEMICOLON? '}'
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

lambdaExpression
    : '(' parameterList? ')' '=>' expression
    ;

arrayExpression
    : '[' (expression (',' expression)*)? ']'
    ;

unaryExpression
    : postfixExpression
    | unaryOperator
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
    | lambdaExpression
    | arrayExpression
    ;

type
    : 'number'
    | 'string'
    | 'boolean'
    | 'any'
    | IDENTIFIER
    | type '[' ']'
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
    : '!' | '-' | '+' | '++' | '--'
    ;

// Lexer rules
IDENTIFIER: [a-zA-Z_$][a-zA-Z0-9_$]*;
NUMBER: [0-9]+ ('.' [0-9]+)?;
STRING: '"' (~["\\] | '\\' .)* '"' | '\'' (~['\\] | '\\' .)* '\'';
SEMICOLON: ';';
PUNCTUATION: SEMICOLON | ',' | '.' | '(' | ')' | '{' | '}' | '[' | ']';
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
MULTILINE_COMMENT: '/*' .*? '*/' -> skip;