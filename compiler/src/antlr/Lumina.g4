grammar Lumina;

// Parser rules
program: statement* EOF;

statement
    : variableDeclaration
    | variableAssignment
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
    : ('let' | 'const' | 'var') IDENTIFIER (':' type)? (assignmentOperator expression)? SEMICOLON
    ;

variableAssignment
    : IDENTIFIER ('.' IDENTIFIER)* assignmentOperator expression SEMICOLON
    ;

functionDeclaration
    : 'function' IDENTIFIER '(' parameterList? ')' (':' type)? block
    ;

parameterList
    : parameter (',' parameter)*
    ;

parameter
    : IDENTIFIER (':' type)? (assignmentOperator expression)?
    ;

expressionStatement
    : expression SEMICOLON?
    ;

ifStatement
    : 'if' '(' expression ')' statement ('else' statement)?
    ;

forStatement
    : 'for' '(' (variableDeclaration | expressionStatement)? (IDENTIFIER  (relationalOperator | equalityOperator) expression)? SEMICOLON (IDENTIFIER unaryExpression)? ')' statement
    | 'for' '(' ('const' | 'let' | 'var') IDENTIFIER 'of' expression ')' statement
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
    : additiveExpression postfixExpression? (relationalOperator additiveExpression postfixExpression?)*
    ;

additiveExpression
    : multiplicativeExpression (additiveOperator multiplicativeExpression)*
    ;

multiplicativeExpression
    : unaryExpression (multiplicativeOperator unaryExpression)*
    ;

lambdaExpression
    : '(' parameterList? ')' '=>' block
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
    | methodCall
    | nonNullAssertion
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
    | parse
    | '!' ('.' expression)?
    ;

methodCall
    : primaryExpression ('.' IDENTIFIER)* '(' (primaryExpression ',')? (expression (',' expression)*)? ')'
    ;

nonNullAssertion
    : primaryExpression
    ;

type
    : 'number'
    | 'string'
    | 'boolean'
    | 'any'
    | IDENTIFIER
    | type '[' ']'
    ;

parse
    : parseInt
    | parseFloat
    | parseString
    | parseBoolean
    | parseNull
    ;

parseInt
    : 'parseInt' '(' expression ')'
    ;

parseFloat
    : 'parseFloat' '(' expression ')'
    ;

parseString
    : 'parseString' '(' expression ')'
    ;

parseBoolean
    : 'parseBoolean' '(' expression ')'
    ;

parseNull
    : 'parseNull' '(' expression ')'
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

WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
MULTILINE_COMMENT: '/*' .*? '*/' -> skip;
