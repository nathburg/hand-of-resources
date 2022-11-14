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

  static async insert({
    city,
    company,
    preferred_currency,
    latitude,
    country,
  }) {
    const { rows } = await pool.query(
      'INSERT INTO companies (city, company, preferred_currency, latitude, country) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [city, company, preferred_currency, latitude, country]
    );
    return new Company(rows[0]);
  }

  static async updateByID(id, attrs) {
    const resp = await Company.getByID(id);
    if (!resp) return null;
    const { city, company, preferred_currency, latitude, country } = {
      ...resp,
      ...attrs,
    };
    const { rows } = await pool.query(
      `UPDATE companies
        SET city = $2, company = $3, preferred_currency = $4, latitude = $5, country = $6
        WHERE id = $1
        RETURNING *`,
      [id, city, company, preferred_currency, latitude, country]
    );
    return new Company(rows[0]);
  }
}

module.exports = { Company };
