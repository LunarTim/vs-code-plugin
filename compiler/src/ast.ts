interface ASTNode {
    type: string;
    children?: ASTNode[];
}

interface ProgramNode extends ASTNode {
    type: 'Program';
    body: StatementNode[];
}

interface StatementNode extends ASTNode {
    type: 'VariableDeclaration' | 'VariableAssignment' | 'FunctionDeclaration' | 'ExpressionStatement' | 'IfStatement' | 'ForStatement' | 'ForOfStatement' | 'WhileStatement' | 'ReturnStatement' | 'PrintStatement' | 'Block';
}

interface VariableDeclarationNode extends StatementNode {
    type: 'VariableDeclaration';
    kind: 'let' | 'const' | 'var';
    identifier: IdentifierNode;
    varType?: TypeNode;
    initializer?: ExpressionNode;
}

interface VariableAssignmentNode extends StatementNode {
    type: 'VariableAssignment';
    identifier: IdentifierNode;
    property?: IdentifierNode;
    operator: AssignmentOperatorNode;
    value: ExpressionNode;
}

interface FunctionDeclarationNode extends StatementNode {
    type: 'FunctionDeclaration';
    identifier: IdentifierNode;
    parameters: ParameterNode[];
    returnType?: TypeNode;
    body: BlockNode;
}

interface ParameterNode extends ASTNode {
    type: 'Parameter';
    identifier: IdentifierNode;
    paramType?: TypeNode;
    defaultValue?: ExpressionNode;
}

interface ExpressionStatementNode extends StatementNode {
    type: 'ExpressionStatement';
    expression: ExpressionNode;
}

interface IfStatementNode extends StatementNode {
    type: 'IfStatement';
    test: ExpressionNode;
    consequent: StatementNode;
    alternate?: StatementNode;
}

interface ForStatementNode extends StatementNode {
    type: 'ForStatement';
    init?: VariableDeclarationNode | ExpressionStatementNode;
    test?: ExpressionNode;
    update?: ExpressionNode;
    body: StatementNode;
    forOf?: ForOfStatementNode;
}

interface ForOfStatementNode extends StatementNode {
    type: 'ForOfStatement';
    kind: 'let' | 'const' | 'var';
    identifier: IdentifierNode;
    iterable: ExpressionNode;
    body: StatementNode;
}


interface WhileStatementNode extends StatementNode {
    type: 'WhileStatement';
    test: ExpressionNode;
    body: StatementNode;
}

interface ReturnStatementNode extends StatementNode {
    type: 'ReturnStatement';
    argument?: ExpressionNode;
}

interface PrintStatementNode extends StatementNode {
    type: 'PrintStatement';
    argument: ExpressionNode;
}

interface BlockNode extends StatementNode {
    type: 'Block';
    body: StatementNode[];
}

interface ExpressionNode extends ASTNode {
    type: 'Literal' | 'Identifier' | 'BinaryExpression' | 'CallExpression' | 'UnaryExpression' | 'ArrayExpression' | 'LambdaExpression' | 'ConditionalExpression' | 'AssignmentExpression' | 'LogicalExpression' | 'MemberExpression';
}

interface LiteralNode extends ExpressionNode {
    type: 'Literal';
    value: string | number | boolean | null;
}

interface IdentifierNode extends ExpressionNode {
    type: 'Identifier';
    name: string;
}

interface BinaryExpressionNode extends ExpressionNode {
    type: 'BinaryExpression';
    left: ExpressionNode;
    operator: string;
    right: ExpressionNode;
}

interface CallExpressionNode extends ExpressionNode {
    type: 'CallExpression';
    callee: ExpressionNode;
    arguments: ExpressionNode[];
}

interface UnaryExpressionNode extends ExpressionNode {
    type: 'UnaryExpression';
    operator: string;
    argument: ExpressionNode;
}

interface ArrayExpressionNode extends ExpressionNode {
    type: 'ArrayExpression';
    elements: ExpressionNode[];
}

interface LambdaExpressionNode extends ExpressionNode {
    type: 'LambdaExpression';
    params: ParameterNode[];
    body: BlockNode;
}

interface ConditionalExpressionNode extends ExpressionNode {
    type: 'ConditionalExpression';
    test: ExpressionNode;
    consequent: ExpressionNode;
    alternate: ExpressionNode;
}

interface AssignmentExpressionNode extends ExpressionNode {
    type: 'AssignmentExpression';
    left: ExpressionNode;
    operator: string;
    right: ExpressionNode;
}

interface LogicalExpressionNode extends ExpressionNode {
    type: 'LogicalExpression';
    left: ExpressionNode;
    operator: string;
    right: ExpressionNode;
}

interface MemberExpressionNode extends ExpressionNode {
    type: 'MemberExpression';
    object: ExpressionNode;
    property: IdentifierNode;
}

interface TypeNode extends ASTNode {
    type: 'Type';
    name: string;
}

interface AssignmentOperatorNode extends ASTNode {
    type: 'AssignmentOperator';
    operator: string;
}

export {
    ASTNode,
    ProgramNode,
    StatementNode,
    VariableDeclarationNode,
    VariableAssignmentNode,
    FunctionDeclarationNode,
    ParameterNode,
    ExpressionStatementNode,
    IfStatementNode,
    ForStatementNode,
    WhileStatementNode,
    ReturnStatementNode,
    PrintStatementNode,
    BlockNode,
    ExpressionNode,
    LiteralNode,
    IdentifierNode,
    BinaryExpressionNode,
    CallExpressionNode,
    UnaryExpressionNode,
    ArrayExpressionNode,
    LambdaExpressionNode,
    ConditionalExpressionNode,
    AssignmentExpressionNode,
    LogicalExpressionNode,
    MemberExpressionNode,
    TypeNode,
    AssignmentOperatorNode
};