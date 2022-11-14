const pool = require('../utils/pool');

class Car {
  id;
  make;
  model;
  year;
  VIN;

  constructor(row) {
    this.id = row.id;
    this.make = row.make;
    this.model = row.model;
    this.year = row.year;
    this.VIN = row.VIN;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM cars');
    return rows.map((car) => new Car(car));
  }
  static async getByID(id) {
    const { rows } = await pool.query('SELECT * FROM cars WHERE id = $1', [id]);
    return new Car(rows[0]);
  }

  static async insert({ make, model, year, VIN }) {
    const { rows } = await pool.query(
      'INSERT INTO cars (make, model, year, VIN) VALUES ($1, $2, $3, $4) RETURNING *',
      [make, model, year, VIN]
    );
    return new Car(rows[0]);
  }
}

module.exports = { Car };
