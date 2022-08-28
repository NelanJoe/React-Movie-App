import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Spiderman</h2>
          <h3 className={styles.hero__genre}>
            Gendre: Thriller, Drama, Romance
          </h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dicta
            tenetur sit inventore nam minus dolores sapiente repellat doloribus
            consequuntur at, saepe magni eligendi, harum ea exercitationem
            ipsam, assumenda illo.{" "}
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className={styles.hero__right}>
          <img
            src="https://picsum.photos/600/400"
            alt="photos"
            className={styles.hero__img}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
