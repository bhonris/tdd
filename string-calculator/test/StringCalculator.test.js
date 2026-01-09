const StringCalculator = require('../src/StringCalculator');

describe('StringCalculator', () => {
    const calculator = new StringCalculator();
    it('should return 0 for an empty string', () => {
        // Act
        const result = calculator.add("");

        // Assert
        expect(result).toBe(0);
    });
});
