import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

const Movies = (props) => {
  // Destructing props
  const { movies } = props;

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {/*
           * Looping movie array menggunakan => map
           * Render component movie
           * Kirim props movie
           */}
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Movies;
