grammar Lumina;

// Parser Rules
program
    : statement* EOF
    ;

statement
    : variableDeclaration
    | variableAssignment
    | functionDeclaration
    | expressionStatement
    | ifStatement
    | forStatement
    | whileStatement
    | returnStatement
    ;

variableDeclaration
    : ('let' | 'const' | 'var') IDENTIFIER (':' type)? ('=' expression)? ';'
    ;

variableAssignment
    : IDENTIFIER ('='|'+='|'-='|'*='|'/=') expression ';'
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
    | 'for' '(' ('var' | 'let' | 'const') IDENTIFIER ':' type ';' expression ';' expression ')' block
    | 'for' '(' ('var' | 'let' | 'const') IDENTIFIER 'of' expression ')' block
    ;

whileStatement
    : 'while' '(' expression ')' block
    ;

returnStatement
    : 'return' expression? ';'
    ;

expression
    : literal                                  #literalExpr
    | IDENTIFIER                              #identifierExpr
    | IDENTIFIER ('++' | '--')                 #incrementDecrementExpr
    | IDENTIFIER ('+=' | '-=' | '*=' | '/=') expression #assignmentExpr
    | functionCall                            #functionCallExpr
    | expression '.' IDENTIFIER               #propertyAccessExpr
    | expression '[' expression ']'            #indexAccessExpr
    | expression '(' argumentList? ')'        #functionCallExpr
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