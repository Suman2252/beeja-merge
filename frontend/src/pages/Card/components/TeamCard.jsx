<<<<<<< HEAD
// // components/TeamCard.js
// import React, { Fragment, useEffect, useState } from "react";
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import { FaQuoteRight } from "react-icons/fa";
// import data from "../api/data";
// // import "./css style/TeamCard.css"
// import '../css/TeamCard.css'

// const TeamCard = () => {
//   const [people, setPeople] = useState(data);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const lastIndex = people.length - 1;
//     if (index < 0) {
//       setIndex(lastIndex);
//     }
//     if (index > lastIndex) {
//       setIndex(0);
//     }
//   }, [index, people]);

//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1);
//     }, 3000);
//     return () => clearInterval(slider);
//   }, [index]);

//   return (
//     <Fragment>
//       <section className="section">
//         <div className="title">
//           <h2>
//             <span>/</span>Reviews
//           </h2>
//         </div>
//         <div className="section-center">
//           {people.map((person, personIndex) => {
//             const { id, image, name, title, quote } = person;
//             let position = "nextSlide";
            
//             if (personIndex === index) {
//               position = "activeSlide";
//             }
//             if (
//               personIndex === index - 1 ||
//               (index === 0 && personIndex === people.length - 1)
//             ) {
//               position = "lastSlide";
//             }

//             return (
//               <article id="card-container" className={position} key={id}>
//                 <img src={image} alt={name} className="person-img" />
//                 <h4>{name}</h4>
//                 <p className="title">{title}</p>
//                 <p className="text">{quote}</p>
//                 <FaQuoteRight className="icon" />
//               </article>
//             );
//           })}
//           <button className="prev" onClick={() => setIndex(index - 1)}>
//             <FiChevronLeft />
//           </button>
//           <button className="next" onClick={() => setIndex(index + 1)}>
//             <FiChevronRight />
//           </button>
//         </div>
//       </section>
//     </Fragment>
//   );
// };

// export default TeamCard;





















=======
>>>>>>> main
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
<<<<<<< HEAD
                className={`${styles.cardContainer} ${
=======
                className={`${styles.cardContainer} theme-card ${
>>>>>>> main
                  position === "activeSlide" ? styles.activeSlide :
                  position === "lastSlide" ? styles.lastSlide :
                  styles.nextSlide
                }`} 
                key={id}
              >
                <img src={image} alt={name} className={styles.personImg} />
<<<<<<< HEAD
                <h4>{name}</h4>
                <p className={styles.personTitle}>{title}</p>
                <p className={styles.text}>{quote}</p>
=======
                <h4 className={styles.cardContainer + " h4"}>{name}</h4>
                <p className="capitalize mb-3 theme-text-primary font-bold text-sm">{title}</p>
                <p className="max-w-[35em] mx-auto mt-8 leading-8 theme-text-primary font-bold">{quote}</p>
>>>>>>> main
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

<<<<<<< HEAD
export default TeamCard;
=======
export default TeamCard;
>>>>>>> main
