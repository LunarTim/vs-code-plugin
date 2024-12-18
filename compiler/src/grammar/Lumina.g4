grammar Lumina;

// Parser Rules
program
    : statement* EOF
    ;

statement
    : variableDeclaration
    | functionDeclaration
    | expressionStatement
    | ifStatement
    | forStatement
    | returnStatement
    ;

variableDeclaration
    : 'let' IDENTIFIER (':' type)? ('=' expression)? ';'
    ;

functionDeclaration
    : 'function' IDENTIFIER '(' parameterList? ')' (':' type)? block
    ;

parameterList
    : parameter (',' parameter)*
    ;

parameter
    : IDENTIFIER ':' type
    ;

type
    : 'number'
    | 'string'
    | 'boolean'
    | 'void'
    ;

block
    : '{' statement* '}'
    ;

expressionStatement
    : expression ';'
    ;

ifStatement
    : 'if' '(' expression ')' block ('else' block)?
    ;

forStatement
    : 'for' '(' variableDeclaration expression ';' expression ')' block
    ;

returnStatement
    : 'return' expression? ';'
    ;

expression
    : literal                                  #literalExpr
    | IDENTIFIER                              #identifierExpr
    | functionCall                            #functionCallExpr
    | expression ('*'|'/') expression         #multiplicativeExpr
    | expression ('+'|'-') expression         #additiveExpr
    | expression ('=='|'!='|'<'|'>'|'<='|'>=') expression  #comparisonExpr
    | expression '&&' expression              #logicalAndExpr
    | expression '||' expression              #logicalOrExpr
    | '(' expression ')'                      #parenExpr
    ;

functionCall
    : IDENTIFIER '(' argumentList? ')'
    ;

argumentList
    : expression (',' expression)*
    ;

literal
    : NUMBER        #numberLiteral
    | STRING        #stringLiteral
    | BOOLEAN       #booleanLiteral
    ;

// Lexer Rules
NUMBER: [0-9]+ ('.' [0-9]+)?;
STRING: '"' (~["\r\n] | '\\"')* '"';
BOOLEAN: 'true' | 'false';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
MULTILINE_COMMENT: '/*' .*? '*/' -> skip; 