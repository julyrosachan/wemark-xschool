"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

export default function FAQ({ title, items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.faq}>
      <h2>{title}</h2>

      <div className={styles.list}>
        {items?.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div className={styles.item} key={index}>
              <button
                className={styles.question}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
              </button>

              <div className={`${styles.answerWrap} ${isOpen ? styles.open : ""}`}>
                <div
                  className={styles.answer}
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}