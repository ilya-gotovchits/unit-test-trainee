export function complexOperation(a: number, b: number): number | null {
    if (a === null || b === null) {
        return null;
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input type');
    }

    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }

    const result = (a * b) + (a / b) - Math.sqrt(a) + Math.pow(b, 2);

    return Number(result.toFixed(2));
}