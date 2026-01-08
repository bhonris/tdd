const StringCalculator = require('../src/StringCalculator');

describe('StringCalculator', () => {
    it('should return 0 for an empty string', () => {
        // Arrange
        const calculator = new StringCalculator();

        // Act
        const result = calculator.add("");

        // Assert
        expect(result).toBe(0);
    });
});
