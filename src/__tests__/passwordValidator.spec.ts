import { describe, it, expect } from 'vitest';
import { validatePassword } from '../passwordValidator';

describe('passwordValidator', () => {
  it('should return isValid: true for a valid password', () => {
    const validPassword = 'Password123';

    const result = validatePassword(validPassword);

    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('should return isValid: false for an invalid password', () => {
    const invalidPassword = 'pass';

    const result = validatePassword(invalidPassword);

    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });
});

