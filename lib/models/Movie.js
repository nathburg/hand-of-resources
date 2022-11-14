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

  static async getByID(id) {
    const { rows } = await pool.query('SELECT * FROM movies WHERE id = $1', [
      id,
    ]);
    return new Movie(rows[0]);
  }

  static async insert({ title, genre, budget }) {
    const { rows } = await pool.query(
      'INSERT INTO movies (title, genre, budget) VALUES ($1, $2, $3) RETURNING *',
      [title, genre, budget]
    );
    return new Movie(rows[0]);
  }

  static async updateByID(id, attrs) {
    const movie = await Movie.getByID(id);
    if (!movie) return null;
    const { title, genre, budget } = { ...movie, ...attrs };
    const { rows } = await pool.query(
      `UPDATE movies
        SET title = $2, genre = $3, budget = $4
        WHERE id = $1
        RETURNING *`,
      [id, title, genre, budget]
    );
    return new Movie(rows[0]);
  }
}
module.exports = { Movie };
