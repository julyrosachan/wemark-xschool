import Slider from "../../components/Slider/Slider";
import styles from "./About.module.css";

export default function About({ data }) {
  const images = data.about_images || [];

  return (
    <section className={styles.about}>
      <div className={styles.aboutTop}>
        <h2>{data.about_title}</h2>

        <a className={styles.aboutLink} href="#">
          Go to xSchool
        </a>
      </div>

      <p className={styles.aboutText}>{data.about_description}</p>

      <Slider images ={images} />
    </section>
  );
}