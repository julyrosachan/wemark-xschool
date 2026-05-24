import styles from "./Founder.module.css";

export default function Founder({ founders }) {
  const founder = founders?.[0];

  if (!founder) return null;

  return (
    <section className={styles.founder}>
      <h2 className={styles.title}>FOUNDER</h2>

      <div className={styles.content}>
        <div className={styles.imageBox}>
          <img src={founder.image} alt={founder.name} />

          <div className={styles.badge}>
            <strong>{founder.name}</strong>
            <span> - {founder.position}</span>
          </div>
        </div>

        <div className={styles.textBox}>
          <h3>{founder.title}</h3>
          <p>{founder.description}</p>
        </div>
      </div>
    </section>
  );
}