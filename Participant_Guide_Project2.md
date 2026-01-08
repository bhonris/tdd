# Project 2: Smart Expense Analyzer - Participant Guide

## Introduction
In this session, we move from basic TDD to **AI-Assisted TDD**. 
You will build an `ExpenseAnalyzer` that parses, validates, and categorizes financial records.
Instead of writing everything from scratch, you will use AI to act as your **QA Engineer** (generating tests) and **Senior Pair Programmer** (refactoring and implementation).

## Setup
1. Open the `expense-analyzer` folder in your editor.
2. Run `npm install` to install dependencies.
3. Open `src/ExpenseAnalyzer.js`. You will see empty methods waiting for logic.
4. Check `sample_expenses.csv` to see the input format you will need to parse.

---

## Exercise 1: AI as a QA Engineer (Generating Tests)
**Goal**: Use AI to find edge cases you wouldn't think of.

1.  **Open** `test/ExpenseAnalyzer.test.js`.
2.  **Prompt your AI** (ChatGPT/Claude/Gemini):
    > "I have a Javascript class `ExpenseAnalyzer` with a method `validateExpense(expense)`. The expense object has `{ id, date, amount, vendor, category }`. 
    > Please generate 5-10 distinct test cases (in Jest format) that cover edge cases for validation. 
    > Consider things like: future dates, negative amounts, zero amounts, missing fields, and deeply nested invalid types.
    > The method should throw an error for invalid inputs."
3.  **Review & Paste**: Look at the tests. Did it find things you missed? (e.g. `NaN` amount, string date formats?). Copy relevant tests into `describe('validateExpense')` block in your test file.
4.  **Run Tests**: `npm test`. **They should FAIL (Red).**

## Exercise 2: AI as a Junior Dev (Implementation)
**Goal**: Use AI to write the routine validation logic to pass the tests.

1.  **Prompt your AI**:
    > "Here are the failing Jest tests for `validateExpense`. 
    > [Paste the tests here]
    > Write the implementation for `validateExpense` in `src/ExpenseAnalyzer.js` to pass these tests. Keep it clean and readable."
2.  **Paste & Verify**: Paste the code into your class. Run `npm test`.
3.  **Refine**: If it fails, paste the error message back to the AI: "It failed with this error: [Error]. Fix it."

---

## Exercise 3: Advanced Logic - Categorization
**Goal**: Use AI to suggest a Strategy or Dictionary implementation for vendor categorization.

1.  **Manual Test**: Write a test case in `ExpenseAnalyzer.test.js`:
    ```javascript
    test('categorizes Uber as Transport', () => {
        const exp = new Expense(1, new Date(), 15, 'Uber', null);
        analyzer.categorizeExpense(exp);
        expect(exp.category).toBe('Transport');
    });
    ```
2.  **Prompt AI**:
    > "I need to implement `categorizeExpense`. If the vendor contains 'Uber', 'Lyft', or 'Taxi', category is 'Transport'. If 'Starbucks' or 'McD', category is 'Food'. 
    > Suggest a scalable way to implement this (not a giant if-else chain) and provide the code."
3.  **Implement**: Use the suggestion (likely a mapping object or lookup function).

---

## Exercise 4: The "Gold Master" Snapshot Test
**Goal**: Verify the final report structure without writing 100 assertions.

1.  **Prompt AI**:
    > "Generate a JSON array of 5 complex expense objects with varied data."
2.  **Create Test**:
    ```javascript
    test('generates correct summary report', () => {
        const mockExpenses = [/* paste AI data here */];
        const analyzer = new ExpenseAnalyzer();
        // loading logic here if needed, or mock it
        analyzer.expenses = mockExpenses; 
        
        const report = analyzer.generateReport();
        expect(report).toMatchSnapshot();
    });
    ```
3.  **Run**: `npm test`. Jest will create a `__snapshots__` folder. Open it and inspect the output. This is now your baseline truth!

## Summary
You have practiced:
-   **Red**: Letting AI generate the failing tests (Edge Cases).
-   **Green**: Letting AI write the implementation to pass those tests.
-   **Refactor**: Asking AI for design patterns (Strategy/Lookup).
