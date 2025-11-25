export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface ValidationOptions {
  minLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireNumbers?: boolean;
  requireSpecialChars?: boolean;
}

export function hasMinLength(password: string, minLength: number): boolean {
  return password.length >= minLength;
}

export function hasUppercase(password: string): boolean {
  return /[A-Z]/.test(password);
}

export function hasLowercase(password: string): boolean {
  return /[a-z]/.test(password);
}

export function hasNumbers(password: string): boolean {
  return /[0-9]/.test(password);
}

export function hasSpecialChars(password: string): boolean {
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
}

export function validatePassword(
  password: string,
  options: ValidationOptions = {}
): ValidationResult {
  const {
    minLength = 8,
    requireUppercase = true,
    requireLowercase = true,
    requireNumbers = true,
    requireSpecialChars = false,
  } = options;

  const errors: string[] = [];

  if (!password) {
    errors.push('Password cannot be empty');
    return { isValid: false, errors };
  }

  if (!hasMinLength(password, minLength)) {
    errors.push(`Password must contain at least ${minLength} characters`);
  }

  if (requireUppercase && !hasUppercase(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (requireLowercase && !hasLowercase(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (requireNumbers && !hasNumbers(password)) {
    errors.push('Password must contain at least one digit');
  }

  if (requireSpecialChars && !hasSpecialChars(password)) {
    errors.push('Password must contain at least one special character');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

