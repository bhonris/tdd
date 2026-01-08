# TDD with AI Workshop Plan

## Introduction
This workshop is designed to introduce developers to Test Driven Development (TDD) principles and demonstrate how Artificial Intelligence can accelerate and enhance the TDD cycle. We will progress through two projects: a simple kata to establish fundamentals, and a slightly more complex application to showcase AI integration.

## Project 1: The Foundation - String Calculator Kata
**Objective**: Master the Red-Green-Refactor cycle without the complexity of a real-world application.

### Description
We will build a `StringCalculator` class that can sum numbers provided in a string format. This is a classic TDD exercise that forces bite-sized iterations.

### Learning Outcomes
- **Red**: Writing a test that fails before writing any implementation code.
- **Green**: Writing the generic minimum code required to pass the test.
- **Refactor**: cleaning up the code while ensuring tests remain green.

### Steps
1.  **Step 1**: Create a simple `add(numbers: string): number` method.
    -   Input: empty string -> Output: 0
    -   Input: "1" -> Output: 1
    -   Input: "1,2" -> Output: 3
2.  **Step 2**: Allow the method to handle an unknown amount of numbers.
3.  **Step 3**: Allow the method to handle new lines between numbers (instead of commas).
    -   Input: "1\n2,3" -> Output: 6
4.  **Step 4**: Support different delimiters.
    -   Input: "//;\n1;2" -> Output: 3 (delimiter is ";")
5.  **Step 5**: Throw an exception for negative numbers.

---

## Project 2: AI-Enhanced TDD - Smart Expense Analyzer
**Objective**: Leverage AI to identify edge cases, generate test data, and refine implementation details for a business-logic heavy component.

### Description
We will build a backend service that ingests a raw list of expense records (simulated CSV or JSON data), categorizes them based on keywords, and detects potential anomalies (e.g., duplicate timestamps, unusually high amounts).

### Why this project?
While simple to understand, parsing and validation often have many "hidden" edge cases (malformed dates, currency injection attacks, floating point errors) that humans miss but LLMs are great at identifying.

### AI Integration Points
1.  **Test Case Generation**:
    -   *Prompting AI*: "Given this `Expense` interface, generate 10 distinct edge cases for the `validate_expense` function, including boundary values and malformed inputs."
2.  **Implementation Assistance**:
    -   *Prompting AI*: "Write the regex to parse this specific CSV format, then write a test to verify it fails on these invalid inputs."
3.  **Refactoring Advice**:
    -   *Prompting AI*: "Analyze this `categorize` method. It acts as a long switch statement. refactor it to use the Strategy pattern, ensuring the existing tests cover the changes."

### Steps
1.  **Core Domain**: Define the `Expense` model and the `ExpenseReport` result.
2.  **Validation Logic**: use AI warnings to suggest validation rules we didn't think of (e.g., future dates, negative amounts).
3.  **Categorization Engine**: TDD a keyword-matcher. Use AI to generate a large list of vendor names mapped to categories to test the engine's accuracy.
4.  **Reporting**: Generate a summary. Use AI to write a "Gold Master" test (Snapshot test) for the output format.
