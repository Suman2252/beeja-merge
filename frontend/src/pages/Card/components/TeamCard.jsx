import React, { Fragment, useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "../api/data";
import styles from '../css/TeamCard.module.css';

const TeamCard = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className={styles.teamCardContainer}>
      <section className={styles.section}>
        
        <div className={styles.sectionCenter}>
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            let position = "nextSlide";
            
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article
                className={`${styles.cardContainer} theme-card ${
                  position === "activeSlide" ? styles.activeSlide :
                  position === "lastSlide" ? styles.lastSlide :
                  styles.nextSlide
                }`} 
                key={id}
              >
                <img src={image} alt={name} className={styles.personImg} />
                <h4 className={styles.cardContainer + " h4"}>{name}</h4>
                <p className="capitalize mb-3 theme-text-primary font-bold text-sm">{title}</p>
                <p className="max-w-[35em] mx-auto mt-8 leading-8 theme-text-primary font-bold">{quote}</p>
                <FaQuoteRight className={styles.icon} />
              </article>
            );
          })}
          <button className={styles.prev} onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className={styles.next} onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default TeamCard;
