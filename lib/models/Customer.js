const pool = require('../utils/pool');

class Customer {
  id;
  first_name;
  last_name;
  email;
  gender;

  constructor(row) {
    this.id = row.id;
    this.first_name = row.first_name;
    this.last_name = row.last_name;
    this.email = row.email;
    this.gender = row.gender;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM customers');
    return rows.map((customer) => new Customer(customer));
  }
}

module.exports = { Customer };
