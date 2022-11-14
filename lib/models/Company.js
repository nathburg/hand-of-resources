const pool = require('../utils/pool');

class Company {
  id;
  city;
  company;
  preferred_currency;
  latitude;
  country;

  constructor(row) {
    this.id = row.id;
    this.city = row.city;
    this.company = row.company;
    this.preferred_currency = row.preferred_currency;
    this.latitude = row.latitude;
    this.country = row.country;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM companies');
    return rows.map((company) => new Company(company));
  }

  static async getByID(id) {
    const { rows } = await pool.query('SELECT * FROM companies WHERE id = $1', [
      id,
    ]);
    return new Company(rows[0]);
  }
}

module.exports = { Company };
