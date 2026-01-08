# TDD with AI: คู่มือสำหรับผู้เข้าร่วม

ยินดีต้อนรับสู่เวิร์กช็อป **Test Driven Development (TDD) ร่วมกับ AI**! วันนี้คุณจะได้เรียนรู้วิธีการผสานวินัยของ TDD เข้ากับความเร็วและความคิดสร้างสรรค์ของผู้ช่วย AI

## สิ่งที่ต้องเตรียม (Prerequisites)
-   ติดตั้ง Node.js แล้ว
-   โปรแกรมแก้ไขโค้ด (แนะนำให้ใช้ VS Code)
-   การเข้าถึงผู้ช่วยเขียนโค้ด AI (เช่น Gemini, ChatGPT, Claude หรือ GitHub Copilot)

---

## ส่วนที่ 1: String Calculator Kata (พื้นฐาน)

**เป้าหมาย**: สร้างเครื่องคิดเลขง่ายๆ ที่รับค่าตัวเลขแบบสตริงและส่งค่าผลรวมกลับมา
**จุดเน้น**: ปฏิบัติตามวงจร **Red -> Green -> Refactor** อย่างเคร่งครัด **ห้าม** เขียนโค้ดทำงาน (implementation) จนกว่าคุณจะมีเทสต์ที่พัง (failing test) ก่อน

### การติดตั้ง (Setup)
1.  เข้าไปที่โฟลเดอร์ `string-calculator`
2.  รันคำสั่ง `npm install`
3.  รันคำสั่ง `npm test` เพื่อตรวจสอบว่าสภาพแวดล้อมพร้อมใช้งาน

### รอบที่ 1: พื้นฐาน (Iteration 1: The Basics)
1.  **Red**: เขียนเทสต์สำหรับ `add("")` โดยคาดหวังผลลัพธ์เป็น `0`
2.  **Green**: เขียนโค้ดเพื่อให้คืนค่า `0`
3.  **Red**: เขียนเทสต์สำหรับ `add("1")` โดยคาดหวังผลลัพธ์เป็น `1`
4.  **Green**: อัปเดตโค้ดเพื่อแปลงค่าเป็นตัวเลข (คำใบ้: ใช้ `parseInt` หรือ `Number`)
5.  **Red**: เขียนเทสต์สำหรับ `add("1,2")` โดยคาดหวังผลลัพธ์เป็น `3`
6.  **Green**: อัปเดตโค้ดเพื่อแยกสตริงด้วย `,` และรวมผลตัวเลข

### รอบที่ 2: รองรับจำนวนตัวเลขที่ไม่จำกัด
1.  **Red**: เขียนเทสต์สำหรับ `add("1,2,3,4,5")`
2.  **Green**: ตรวจสอบให้แน่ใจว่าลอจิกการแยกสตริงของคุณรองรับความยาวอาร์เรย์เท่าใดก็ได้ (เช่น การใช้ `reduce`)

### รอบที่ 3: ตัวแบ่งบรรทัดใหม่ (New Line Delimiters)
1.  **Red**: เขียนเทสต์สำหรับอินพุต `"1\n2,3"` โดยคาดหวังผลลัพธ์เป็น `6`
2.  **Green**: อัปเดตลอจิกการแยกสตริงให้รองรับทั้ง `\n` และ `,` (คำใบ้: Regex `[,\n]`)

---

## ส่วนที่ 2: Smart Expense Analyzer (การใช้ร่วมกับ AI)

**เป้าหมาย**: สร้างระบบเพื่อตรวจสอบและจัดหมวดหมู่ค่าใช้จ่าย
**จุดเน้น**: ใช้ AI เพื่อช่วยคิด *แทน* คุณ (สร้างกรณีทดสอบ) และคิด *ร่วมกับ* คุณ (การปรับปรุงโครงสร้างโค้ด - refactoring)

### ขั้นตอนที่ 1: สร้าง Test Cases ด้วย AI
แทนที่จะคิดกรณีขอบเขต (edge cases) ทั้งหมดด้วยตัวเอง ให้ลองถาม AI

**การกระทำ (Action)**:
คัดลอกโมเดล `Expense` ของคุณ (หรือแนวคิดของมัน) ลงในแชท AI แล้วรันคำสั่งนี้:
> "I am building a function `validateExpense(expense)` that checks for valid dates, positive amounts, and required fields. Generate 10 diverse test cases (valid and invalid) in JSON format that identify edge cases I might miss (e.g., future dates, leap years, negative zero)."

**งาน (Task)**: นำเทสต์ที่ได้จาก AI (ซึ่งควรจะ fail ในตอนแรก) มาใส่ในโค้ดของคุณ

### ขั้นตอนที่ 2: การเขียนโค้ดโดยมี AI ช่วย (AI-Assisted Implementation)
เมื่อคุณมีเทสต์ที่ fail แล้ว ให้ใช้ AI เพื่อช่วยเขียนลอจิกการตรวจสอบที่ซับซ้อน

**การกระทำ (Action)**:
รันคำสั่งนี้:
> "Write a JavaScript function `validateExpense` that satisfies these tests. Handle the edge cases strictly."

### ขั้นตอนที่ 3: การปรับปรุงโค้ดด้วย AI (Refactoring with AI)
เรามักจะเขียนโค้ดที่ยุ่งเหยิงเพื่อให้ผ่านเทสต์ไปก่อน ให้ AI ช่วยทำความสะอาดโค้ดเหล่านั้น

**การกระทำ (Action)**:
เลือกโค้ดของคุณที่ผ่านเทสต์แล้วแต่ยังดูไม่เรียบร้อย แล้วสั่งว่า:
> "Refactor this code to make it more readable. Suggest a design pattern if applicable (like Strategy Pattern for categorization rules). Ensure the contract remains the same."

### ความท้าทาย (Challenge)
คุณสามารถให้ AI เขียน "Gold Master" test (Snapshot test) สำหรับรายงานที่ซับซ้อนได้หรือไม่?
1.  สร้างรายการค่าใช้จ่ายจำลองที่ซับซ้อน
2.  รันโค้ดของคุณเพื่อให้ได้ผลลัพธ์
3.  ขอให้ AI ห่อหุ้มสิ่งนี้ใน Jest snapshot test เพื่อให้แน่ใจว่าจะไม่มีข้อผิดพลาดเกิดขึ้นในอนาคต
