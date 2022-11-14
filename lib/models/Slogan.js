const pool = require('../utils/pool');

class Slogan {
  id;
  stock;
  slogan;

  constructor(row) {
    this.id = row.id;
    this.stock = row.stock;
    this.slogan = row.stock;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM slogans');
    return rows.map((slogan) => new Slogan(slogan));
  }
}

module.exports = { Slogan };
