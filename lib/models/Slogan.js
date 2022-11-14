const pool = require('../utils/pool');

class Slogan {
  id;
  stock;
  saying;

  constructor(row) {
    this.id = row.id;
    this.stock = row.stock;
    this.saying = row.saying;
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

  static async insert({ stock, saying }) {
    const { rows } = await pool.query(
      'INSERT INTO slogans (stock, saying) VALUES ($1, $2) RETURNING *',
      [stock, saying]
    );
    return new Slogan(rows[0]);
  }

  static async updateByID(id, attrs) {
    const data = await Slogan.getByID(id);
    if (!data) return null;
    const { stock, saying } = { ...data, ...attrs };
    const { rows } = await pool.query(
      `UPDATE slogans
        SET stock = $2, saying = $3
        WHERE id = $1
        RETURNING *`,
      [id, stock, saying]
    );
    return new Slogan(rows[0]);
  }
}

module.exports = { Slogan };
