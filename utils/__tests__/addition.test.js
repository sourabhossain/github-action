const addition = require('../addition');

describe('addition', () => {
    it('should add two numbers', () => {
        expect(addition(2, 3)).toBe(5);
    });

    it('should handle negative numbers', () => {
        expect(addition(-2, 3)).toBe(1);
    });

    it('should handle zero', () => {
        expect(addition(0, 3)).toBe(3);
        expect(addition(2, 0)).toBe(2);
    });
});
