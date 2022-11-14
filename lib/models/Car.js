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
}

module.exports = { Car };
