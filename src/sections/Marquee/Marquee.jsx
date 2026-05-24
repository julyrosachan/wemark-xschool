"use client";

import { useEffect, useRef } from "react";
import styles from "./Marquee.module.css";

export default function Marquee({ textSlider }) {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const items = [textSlider.xline1, textSlider.xline2, textSlider.xline3];
  const repeatedItems = [...items, ...items, ...items, ...items, ...items, ...items];

  useEffect(() => {
    let topX = 0;
    let bottomX = 0;
    let lastScrollY = window.scrollY;
    let speed = 1.2;
    let targetSpeed = 1.2;
    let direction = 1;
    let frame;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (delta > 0) {
        direction = 1; // aşağı: top sağa, bottom sola
      } else if (delta < 0) {
        direction = -1; // yuxarı: top sola, bottom sağa
      }

      targetSpeed = Math.min(7, 1.5 + Math.abs(delta) * 0.12);
      lastScrollY = currentScrollY;
    }

    function animate() {
      speed += (targetSpeed - speed) * 0.08;
      targetSpeed += (1.2 - targetSpeed) * 0.04;

      topX += speed * direction;
      bottomX -= speed * direction;

      const topWidth = topRef.current?.scrollWidth / 2 || 1000;
      const bottomWidth = bottomRef.current?.scrollWidth / 2 || 1000;

      if (topX > 0) topX = -topWidth;
      if (topX < -topWidth) topX = 0;

      if (bottomX > 0) bottomX = -bottomWidth;
      if (bottomX < -bottomWidth) bottomX = 0;

      if (topRef.current) {
        topRef.current.style.transform = `translate3d(${topX}px, 0, 0)`;
      }

      if (bottomRef.current) {
        bottomRef.current.style.transform = `translate3d(${bottomX}px, 0, 0)`;
      }

      frame = requestAnimationFrame(animate);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const Group = ({ prefix }) => (
    <div className={styles.group}>
      {repeatedItems.map((item, index) => (
        <div className={styles.item} key={`${prefix}-${index}`}>
          <span>{item}</span>
          <span className={styles.star}>*</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className={styles.marquee}>
      <div className={styles.row}>
        <div className={styles.track} ref={topRef}>
          <Group prefix="top-a" />
          <Group prefix="top-b" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.track} ref={bottomRef}>
          <Group prefix="bottom-a" />
          <Group prefix="bottom-b" />
        </div>
      </div>
    </section>
  );
}