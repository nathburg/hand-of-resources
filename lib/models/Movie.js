const pool = require('../utils/pool');

class Movie {
  id;
  title;
  genre;
  budget;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.genre = row.genre;
    this.budget = row.budget;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM movies');
    return rows.map((movie) => new Movie(movie));
  }
}
module.exports = { Movie };
