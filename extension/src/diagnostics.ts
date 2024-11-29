import { Diagnostic, DiagnosticSeverity, Range, Position, DiagnosticTag } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';

interface CompilerDiagnostic {
    message: string;
    line: number;
    character: number;
    length: number;
    severity: 'error' | 'warning';
    code?: string;
    source?: string;
}

export function convertDiagnostics(document: TextDocument, compilerDiagnostics: CompilerDiagnostic[]): Diagnostic[] {
    return compilerDiagnostics.map(diagnostic => {
        const range = getRange(document, diagnostic);
        return {
            severity: getSeverity(diagnostic.severity),
            range,
            message: diagnostic.message,
            source: diagnostic.source || 'lumina',
            code: diagnostic.code,
            tags: getDiagnosticTags(diagnostic),
            relatedInformation: getRelatedInformation(diagnostic)
        };
    });
}

function getRange(document: TextDocument, diagnostic: CompilerDiagnostic): Range {
    const start: Position = {
        line: diagnostic.line,
        character: diagnostic.character
    };

    const end: Position = {
        line: diagnostic.line,
        character: diagnostic.character + (diagnostic.length || 1)
    };

    return { start, end };
}

function getSeverity(severity: 'error' | 'warning'): DiagnosticSeverity {
    switch (severity) {
        case 'error':
            return DiagnosticSeverity.Error;
        case 'warning':
            return DiagnosticSeverity.Warning;
        default:
            return DiagnosticSeverity.Information;
    }
}

function getDiagnosticTags(diagnostic: CompilerDiagnostic): DiagnosticTag[] {
    const tags: DiagnosticTag[] = [];
    
    if (diagnostic.message.includes('unused')) {
        tags.push(DiagnosticTag.Unnecessary);
    }
    if (diagnostic.message.includes('deprecated')) {
        tags.push(DiagnosticTag.Deprecated);
    }

    return tags;
}

function getRelatedInformation(diagnostic: CompilerDiagnostic) {
    // Add related information if available
    // This could include things like:
    // - The original declaration of a variable that's being misused
    // - Similar variables that might have been meant instead
    // - Documentation references
    return undefined;
}

export function categorizeErrors(diagnostics: Diagnostic[]): {
    syntaxErrors: number;
    typeErrors: number;
    unusedVariables: number;
    undefinedVariables: number;
    other: number;
} {
    return diagnostics.reduce((acc, diagnostic) => {
        if (diagnostic.message.includes('syntax')) {
            acc.syntaxErrors++;
        } else if (diagnostic.message.includes('type')) {
            acc.typeErrors++;
        } else if (diagnostic.message.includes('unused')) {
            acc.unusedVariables++;
        } else if (diagnostic.message.includes('undefined') || diagnostic.message.includes('not defined')) {
            acc.undefinedVariables++;
        } else {
            acc.other++;
        }
        return acc;
    }, {
        syntaxErrors: 0,
        typeErrors: 0,
        unusedVariables: 0,
        undefinedVariables: 0,
        other: 0
    });
}
