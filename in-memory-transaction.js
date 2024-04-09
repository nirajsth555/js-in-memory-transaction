module.exports = class Database {
  constructor() {
    this.db = {};
    this.transactions = [];
  }

  get(key) {
    if (key in this.db) {
      return this.db[key];
    } else if (
      this.transactions.length &&
      key in this.transactions[this.transactions.length - 1]
    ) {
      return this.transactions[this.transactions.length - 1][key];
    }
    return null;
  }

  set(key, value) {
    if (this.transactions.length) {
      this.transactions[this.transactions.length - 1][key] = value;
    } else {
      throw new Error("Transaction not initiated");
    }
  }

  count() {
    let totalCount = Object.keys(this.db).length;
    return totalCount;
  }

  beginTransaction() {
    this.transactions.push({});
  }

  commitTransaction() {
    if (this.transactions.length === 0) {
      throw new Error("Transaction not initiated");
    }
    const transaction = this.transactions.pop();
    for (const [key, value] of Object.entries(transaction)) {
      this.db[key] = value;
      if (
        this.transactions.length &&
        key in this.transactions[this.transactions.length - 1]
      ) {
        this.transactions[this.transactions.length - 1][key] = value;
      }
    }
  }

  rollbackTransaction() {
    this.transactions.pop();
  }
};
