import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../../common/motionFrameVarients";
import styles from "./TeamSlider.module.css";

const teamMembers = [
  {
    id: 1,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "Sarah Johnson",
    title: "Lead Instructor",
    description: "Expert in web development with 8+ years of teaching experience."
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "Michael Chen",
    title: "Technical Director",
    description: "Specialized in cloud architecture and DevOps practices."
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    name: "Emily Rodriguez",
    title: "Course Coordinator",
    description: "Passionate about creating engaging learning experiences."
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "David Kim",
    title: "Senior Mentor",
    description: "Full-stack developer with expertise in modern frameworks."
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "Lisa Patel",
    title: "Career Coach",
    description: "Helping students transition into successful tech careers."
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "Alex Thompson",
    title: "Industry Expert",
    description: "Bringing real-world industry experience to our curriculum."
  }
];

const TeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Always show one card at a time
  const cardsToShow = 1;

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          return nextIndex >= teamMembers.length ? 0 : nextIndex;
        });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAutoplay(true), 5000);
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % teamMembers.length
    );
    setTimeout(() => setIsAutoplay(true), 5000);
  };

  const handleDotClick = (index) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoplay(true), 5000);
  };

  const getVisibleCards = () => {
    return [{ ...teamMembers[currentIndex], displayIndex: 0 }];
  };

  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
      className={`w-11/12 max-w-maxContent mx-auto py-12 ${styles.sliderContainer}`}
    >
      <div className="relative px-8 sm:px-12 md:px-20">
        {/* Cards Container */}
        <div className={`flex gap-8 justify-center items-stretch ${styles.cardContainer}`}>
          {getVisibleCards().map((member, idx) => (
            <motion.div
              key={`${member.id}-${currentIndex}`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className={`${styles.teamCard} theme-card rounded-xl p-4 sm:p-6 flex flex-col items-center border border-richblack-700 hover:border-yellow-50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-50/10`}
              style={{
                width: '300px',
                height: '300px',
                flex: '0 0 300px'
              }}
            >
              <div className="flex flex-col items-center justify-between h-full w-full">
                <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 border-yellow-50 ${styles.imageContainer}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover ${styles.memberImage}`}
                    loading="lazy"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold theme-footer-text">{member.name}</h3>
                  <p className="text-sm theme-footer-text font-medium">{member.title}</p>
                  <p className="theme-footer-text text-sm leading-relaxed line-clamp-3">{member.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className={`${styles.navButton} absolute left-0 top-1/2 -translate-y-1/2 theme-card p-2 md:p-3 rounded-full text-yellow-50 border border-richblack-700 hover:border-yellow-50 shadow-lg z-10`}
          aria-label="Previous slide"
        >
          <FiChevronLeft size={20} className="md:text-2xl" />
        </button>
        <button
          onClick={handleNext}
          className={`${styles.navButton} absolute right-0 top-1/2 -translate-y-1/2 theme-card p-2 md:p-3 rounded-full text-yellow-50 border border-richblack-700 hover:border-yellow-50 shadow-lg z-10`}
          aria-label="Next slide"
        >
          <FiChevronRight size={20} className="md:text-2xl" />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {teamMembers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`${styles.paginationDot} h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                idx === currentIndex ? "bg-yellow-50 w-6" : "bg-richblack-300 w-2 hover:bg-richblack-200"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamSlider;
