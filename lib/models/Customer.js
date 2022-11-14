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

  static async getByID(id) {
    const { rows } = await pool.query('SELECT * FROM customers WHERE id = $1', [
      id,
    ]);
    return new Customer(rows[0]);
  }

  static async insert({ first_name, last_name, email, gender }) {
    const { rows } = await pool.query(
      'INSERT INTO customers (first_name, last_name, email, gender) VALUES ($1, $2, $3, $4) RETURNING *',
      [first_name, last_name, email, gender]
    );
    return new Customer(rows[0]);
  }

  static async updateByID(id, attrs) {
    const customer = await Customer.getByID(id);
    if (!customer) return null;
    const { first_name, last_name, email, gender } = { ...customer, ...attrs };
    const { rows } = await pool.query(
      `UPDATE customers
        SET first_name = $2, last_name = $3, email = $4, gender = $5
        WHERE id = $1
        RETURNING *`,
      [id, first_name, last_name, email, gender]
    );
    return new Customer(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM customers WHERE id = $1 RETURNING *',
      [id]
    );
    return new Customer(rows[0]);
  }
}

module.exports = { Customer };
