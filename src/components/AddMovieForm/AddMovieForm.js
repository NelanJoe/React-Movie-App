import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

const AddMovieForm = (props) => {
  // destructing props
  const { movies, setMovies } = props;

  // State title
  const [title, setTitle] = useState("");

  // State Year
  const [date, setDate] = useState("");

  // State type
  const [type, setType] = useState("");

  // State poster
  const [poster, setPoster] = useState("");

  // cek error
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handlePoster = (e) => {
    setPoster(e.target.value);
  };

  const handleSubmit = (e) => {
    // Mencegah browser untuk merefresh
    e.preventDefault();

    if (title === "") {
      setIsTitleError(true);
    } else if (date === "") {
      setIsDateError(true);
    } else if (type === "") {
      setIsTypeError(true);
    } else if (poster === "") {
      setIsPosterError(true);
    } else {
      const movie = {
        id: nanoid(10),
        title: title,
        year: date,
        type: type,
        poster: poster,
      };

      setMovies([...movies, movie]);
      setIsTitleError(false);
      setIsDateError(false);
      setIsTypeError(false);
      setIsPosterError(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.form__img}>
            <img src="https://picsum.photos/600/400" alt="form_img" />
          </div>
          <div>
            <h2 className={styles.form__title}>Add Movie</h2>
            <form className={styles.form__container} onClick={handleSubmit}>
              <div className={styles.form__group}>
                <label>Title</label>
                <input
                  onChange={handleTitle}
                  id="title"
                  type="text"
                  value={title}
                />
                {/* 
                  Jika error title true: muncul error
                  Jika tidak, munculkan string kosong
                 */}
                {isTitleError && <Alert>Title wajib diisi</Alert>}
              </div>
              <div className={styles.form__group}>
                <label>Date</label>
                <input
                  onChange={handleDate}
                  id="date"
                  type="number"
                  value={date}
                />
                {isDateError && <Alert>Date wajib diisi</Alert>}
              </div>
              <div className={styles.form__group}>
                <label>Type</label>
                <input
                  onChange={handleType}
                  id="title"
                  type="text"
                  value={type}
                />
                {isTypeError && <Alert>Type wajib diisi</Alert>}
              </div>
              <div className={styles.form__group}>
                <label>Poster</label>
                <input
                  onChange={handlePoster}
                  id="title"
                  type="text"
                  value={poster}
                />
                {isPosterError && <Alert>Poster wajib diisi</Alert>}
              </div>
              <button className={styles.form__btn}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMovieForm;
