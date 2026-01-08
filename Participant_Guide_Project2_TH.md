# โปรเจกต์ที่ 2: Smart Expense Analyzer - คู่มือสำหรับผู้เข้าร่วม

## บทนำ (Introduction)
ในเซสชันนี้ เราจะเปลี่ยนจาก TDD แบบพื้นฐานมาเป็น **AI-Assisted TDD** (TDD ที่มี AI ช่วยเหลือ)
คุณจะได้สร้าง `ExpenseAnalyzer` ที่ทำหน้าที่แปลง (parse), ตรวจสอบ (validate) และจัดหมวดหมู่ (categorize) บันทึกทางการเงิน
แทนที่จะเขียนทุกอย่างเริ่มจากศูนย์ คุณจะใช้ AI ให้ทำหน้าที่เป็น **QA Engineer** (สร้าง test cases) และ **Senior Pair Programmer** (ช่วย refactor และเขียนโค้ด) ของคุณ

## การติดตั้ง (Setup)
1. เปิดโฟลเดอร์ `expense-analyzer` ในโปรแกรมแก้ไขโค้ดของคุณ
2. รันคำสั่ง `npm install` เพื่อติดตั้ง dependencies
3. เปิดไฟล์ `src/ExpenseAnalyzer.js` คุณจะเห็นเมธอดว่างๆ รอให้ใส่ลอจิกเข้าไป
4. เปิดดูไฟล์ `sample_expenses.csv` เพื่อดูรูปแบบข้อมูลนำเข้า (input format) ที่คุณจะต้องทำหน้าที่แปลง (parse)

---

## แบบฝึกหัดที่ 1: AI ในบทบาท QA Engineer (การสร้าง Tests)
**เป้าหมาย**: ใช้ AI เพื่อหากรณีขอบเขต (edge cases) ที่คุณอาจนึกไม่ถึง

1.  **เปิด** ไฟล์ `test/ExpenseAnalyzer.test.js`
2.  **สั่งงาน AI ของคุณ** (ChatGPT/Claude/Gemini):
    > "I have a Javascript class `ExpenseAnalyzer` with a method `validateExpense(expense)`. The expense object has `{ id, date, amount, vendor, category }`. 
    > Please generate 5-10 distinct test cases (in Jest format) that cover edge cases for validation. 
    > Consider things like: future dates, negative amounts, zero amounts, missing fields, and deeply nested invalid types.
    > The method should throw an error for invalid inputs."
3.  **ตรวจสอบและวางโค้ด**: ดู tests ที่ได้มา มันเจอสิ่งที่คุณพลาดไปไหม? (เช่น amount เป็น `NaN` หรือรูปแบบวันที่เป็น string?) คัดลอก tests ที่เกี่ยวข้องไปใส่ในบล็อก `describe('validateExpense')` ในไฟล์ test ของคุณ
4.  **รัน Tests**: `npm test` **ผลลัพธ์ควรจะ FAIL (Red)**

## แบบฝึกหัดที่ 2: AI ในบทบาท Junior Dev (การเขียนโค้ด)
**เป้าหมาย**: ใช้ AI เขียนลอจิกการตรวจสอบทั่วไปเพื่อให้ผ่าน tests

1.  **สั่งงาน AI ของคุณ**:
    > "Here are the failing Jest tests for `validateExpense`. 
    > [Paste the tests here]
    > Write the implementation for `validateExpense` in `src/ExpenseAnalyzer.js` to pass these tests. Keep it clean and readable."
2.  **วางโค้ดและตรวจสอบ**: วางโค้ดลงในคลาสของคุณ แล้วรัน `npm test`
3.  **ปรับปรุง**: ถ้ายัง fail ให้ก๊อปปี้ข้อความ error ส่งกลับไปให้ AI: "It failed with this error: [Error]. Fix it."

---

## แบบฝึกหัดที่ 3: ลอจิกขั้นสูง - การจัดหมวดหมู่ (Categorization)
**เป้าหมาย**: ใช้ AI เพื่อแนะนำรูปแบบ Strategy หรือ Dictionary สำหรับการจัดหมวดหมู่ร้านค้า

1.  **Manual Test**: เขียน test case ใน `ExpenseAnalyzer.test.js` ด้วยตัวเอง:
    ```javascript
    test('categorizes Uber as Transport', () => {
        const exp = new Expense(1, new Date(), 15, 'Uber', null);
        analyzer.categorizeExpense(exp);
        expect(exp.category).toBe('Transport');
    });
    ```
2.  **สั่งงาน AI**:
    > "I need to implement `categorizeExpense`. If the vendor contains 'Uber', 'Lyft', or 'Taxi', category is 'Transport'. If 'Starbucks' or 'McD', category is 'Food'. 
    > Suggest a scalable way to implement this (not a giant if-else chain) and provide the code."
3.  **เขียนโค้ด**: ใช้วิธีการที่ AI แนะนำ (น่าจะเป็น mapping object หรือ lookup function)

---

## แบบฝึกหัดที่ 4: The "Gold Master" Snapshot Test
**เป้าหมาย**: ตรวจสอบโครงสร้างรายงานสุดท้ายโดยไม่ต้องเขียน assertion เป็นร้อยบรรทัด

1.  **สั่งงาน AI**:
    > "Generate a JSON array of 5 complex expense objects with varied data."
2.  **สร้าง Test**:
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
3.  **รัน**: `npm test` Jest จะสร้างโฟลเดอร์ `__snapshots__` เปิดดูและตรวจสอบผลลัพธ์ นี่คือความจริงพื้นฐาน (baseline truth) ของคุณ!

## บทสรุป
คุณได้ฝึกฝน:
-   **Red**: ให้ AI สร้าง tests ที่ fail (Edge Cases)
-   **Green**: ให้ AI เขียนโค้ดเพื่อให้ผ่าน tests เหล่านั้น
-   **Refactor**: ขอคำแนะนำเรื่อง Design Patterns จาก AI (Strategy/Lookup)
