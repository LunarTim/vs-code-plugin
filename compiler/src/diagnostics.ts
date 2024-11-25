import { SemanticError } from './semanticAnalyzer';

interface Diagnostic {
    message: string;
    line: number;
    character: number;
    length: number;
    severity: 'error' | 'warning';
}

export function getDiagnostics(errors: SemanticError[]): Diagnostic[] {
    return errors.map(error => ({
        message: error.message,
        line: error.line,
        character: error.character,
        length: error.length,
        severity: error.severity
    }));
}