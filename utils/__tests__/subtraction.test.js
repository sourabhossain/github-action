const subtraction = require('../subtraction');

describe('subtraction', () => {
    it('should subtract two positive numbers', () => {
        expect(subtraction(5, 3)).toBe(2);
    });

    it('should handle negative numbers', () => {
        expect(subtraction(-2, -3)).toBe(1);
    });

    it('should handle zero', () => {
        expect(subtraction(0, 3)).toBe(-3);
        expect(subtraction(2, 0)).toBe(2);
    });
});
