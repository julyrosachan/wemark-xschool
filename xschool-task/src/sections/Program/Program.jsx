import styles from "./Program.module.css";

export default function Program({ programs }) {
  const program = programs?.[0];

  if (!program) return null;

  return (
    <section className={styles.program}>
      <h2>{program.title}</h2>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: program.description }}
      />
    </section>
  );
}