# TDD with AI: Participant Guide

Welcome to the **Test Driven Development with AI** workshop! Today, you will learn how to combine the discipline of TDD with the speed and creativity of AI assistants.

## Prerequisites
-   Node.js installed.
-   A code editor (VS Code recommended).
-   Access to an AI coding assistant (Gemini, ChatGPT, Claude, or GitHub Copilot).

---

## Part 1: String Calculator Kata (The Basics)

**Goal**: Build a simple calculator that takes a string of numbers and returns their sum.
**Focus**: Strictly follow the **Red -> Green -> Refactor** cycle. Do NOT write implementation code until you have a failing test.

### Setup
1.  Navigate to `string-calculator`.
2.  Run `npm install`.
3.  Run `npm test` to verify the environment is ready.

### Iteration 1: The Basics
1.  **Red**: Write a test for `add("")` expecting `0`.
2.  **Green**: Implement the method to return `0`.
3.  **Red**: Write a test for `add("1")` expecting `1`.
4.  **Green**: Update implementation to parse the integer. (Hint: `parseInt` or `Number`).
5.  **Red**: Write a test for `add("1,2")` expecting `3`.
6.  **Green**: Update implementation to split by `,` and sum the numbers.

### Iteration 2: Handling Unknown Amount of Numbers
1.  **Red**: Write a test for `add("1,2,3,4,5")`.
2.  **Green**: Ensure your splitting logic handles any array length (e.g., using `reduce`).

### Iteration 3: New Line Delimiters
1.  **Red**: Write a test for input `"1\n2,3"` expecting `6`.
2.  **Green**: Update your split logic to handle both `\n` and `,`. (Hint: Regex `[,\n]`).

---

## Part 2: Smart Expense Analyzer (AI integration)

**Goal**: Build a system to validate and categorize expenses.
**Focus**: Use AI to think *for* you (generating test cases) and *with* you (refactoring).

### Step 1: Generate Test Cases with AI
Instead of thinking of all edge cases yourself, ask the AI.

**Action**:
Copy your `Expense` model (or the idea of it) into your AI chat and run this prompt:
> "I am building a function `validateExpense(expense)` that checks for valid dates, positive amounts, and required fields. Generate 10 diverse test cases (valid and invalid) in JSON format that identify edge cases I might miss (e.g., future dates, leap years, negative zero)."

**Task**: Implement the failing tests provided by the AI.

### Step 2: AI-Assisted Implementation
Once you have failing tests, use AI to help write the complex validation logic.

**Action**:
Run this prompt:
> "Write a JavaScript function `validateExpense` that satisfies these tests. Handle the edge cases strictly."

### Step 3: Refactoring with AI
We often write messy code to pass tests quickly. Let AI clean it up.

**Action**:
Select your passing but messy code and prompt:
> "Refactor this code to make it more readable. Suggest a design pattern if applicable (like Strategy Pattern for categorization rules). Ensure the contract remains the same."

### Challenge
Can you get the AI to write a "Gold Master" test (Snapshot test) for a complex report output?
1.  Generate a complex list of mock expenses.
2.  Run your code to get the output.
3.  Ask AI to wrap this in a Jest snapshot test to ensure no regression in the future.
