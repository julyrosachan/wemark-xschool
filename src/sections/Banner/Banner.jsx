import styles from "./Banner.module.css";

export default function Banner({ data }) {
  const lines = data.banner_title.split("\r\n");

  return (
    <section className={styles.banner}>
      <img src={data.banner_image} alt="banner" className={styles.bannerImage} />

      <div className={styles.bannerContent}>
       <h1>
  <span className={styles.line1}>
    <span>{lines[0]}</span>
  </span>

  <span className={styles.line2}>
    <span>{lines[1]}</span>
  </span>

  <span className={styles.line3}>
    <span>{lines[2]}</span>
  </span>
</h1>
      </div>
    </section>
  );
}