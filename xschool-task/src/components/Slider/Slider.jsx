"use client";

import { useRef } from "react";
import styles from "./Slider.module.css";

export default function Slider({ images }) {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  function handleMouseDown(e) {
    isDown.current = true;
    sliderRef.current.classList.add(styles.dragging);
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  }

  function handleMouseLeave() {
    isDown.current = false;
    sliderRef.current.classList.remove(styles.dragging);
  }

  function handleMouseUp() {
    isDown.current = false;
    sliderRef.current.classList.remove(styles.dragging);
  }

  function handleMouseMove(e) {
    if (!isDown.current) return;
    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  }

  return (
    <div
      ref={sliderRef}
      className={styles.slider}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {images.map((item, index) => (
        <div key={index} className={styles.slideWrapper}>
          <img
            src={item.image}
            alt="About xSchool"
            className={styles.slide}
            draggable="false"
          />
        </div>
      ))}
    </div>
  );
}