import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    service = new CalculatorService();
  });

  it('adds numbers', () => {
    expect(service.add(2, 3)).toBe(5);
  });

  it('subtracts numbers', () => {
    expect(service.subtract(5, 2)).toBe(3);
  });

  it('multiplies numbers', () => {
    expect(service.multiply(4, 3)).toBe(12);
  });

  it('divides numbers', () => {
    expect(service.divide(10, 2)).toBe(5);
  });

  it('throws when dividing by zero', () => {
    expect(() => service.divide(1, 0)).toThrow('Cannot divide by zero');
  });
});

