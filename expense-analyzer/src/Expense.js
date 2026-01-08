class Expense {
    constructor(id, date, amount, vendor, category) {
        this.id = id;
        this.date = date; // Expecting Date object or ISO string
        this.amount = amount;
        this.vendor = vendor;
        this.category = category;
    }
}

module.exports = Expense;
