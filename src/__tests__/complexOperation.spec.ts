import { describe, it, expect } from 'vitest';
import { complexOperation } from '../complexOperation';

// ❌ Bad tests - cover code but do not validate logic
describe('complexOperation - bad tests', () => {
    it('returns null for null input data', () => {
        expect(complexOperation(null, 5)).toBe(null);
    });

    it('throws an error for non-numeric input data', () => {
        expect(() => complexOperation('text', 5)).toThrow('Invalid input type');
    });

    it('returns a number for valid input data', () => {
        const result = complexOperation(4, 2);
        expect(typeof result).toBe('number');
    });

    it('returns a number for other valid data', () => {
        const result = complexOperation(10, 3);
        expect(typeof result).toBe('number');
    });
});


// ✅ Good tests - validate the actual business logic
describe.skip('complexOperation - good tests', () => {
    it('correctly calculates the result for integers', () => {
        expect(complexOperation(4, 2)).toBe(12.00);
    });

    it('correctly calculates the result for fractional numbers', () => {
        const result = complexOperation(1.5, 3);

        expect(result).toBeCloseTo(12.78, 1);
    });

    it('handles negative numbers', () => {
        expect(complexOperation(-4, 2)).toBeNaN();
    });

    it('throws an error when dividing by zero', () => {
        expect(() => complexOperation(5, 0)).toThrow('Division by zero is not allowed');
    });

    it('properly rounds the result to two decimals', () => {
        const result = complexOperation(3, 7);
        const decimalPlaces = result!.toString().split('.')[1]?.length || 0;

        expect(decimalPlaces).toBeLessThanOrEqual(2);
    });

    describe('edge cases', () => {
        it('works with very large numbers', () => {
            expect(() => complexOperation(1e15, 2)).not.toThrow();
        });

        it('works with very small numbers', () => {
            const result = complexOperation(0.0001, 0.0002);

            expect(typeof result).toBe('number');
        });
    });
});