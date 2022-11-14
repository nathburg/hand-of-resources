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

  static async getByID(id) {
    const { rows } = await pool.query('SELECT * FROM slogans WHERE id = $1', [
      id,
    ]);
    if (!rows[0]) return null;
    return new Slogan(rows[0]);
  }
}

module.exports = { Slogan };
