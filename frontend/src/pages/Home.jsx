import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import "./css style/home.css"

import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ImprovedFooter from '../components/common/ImprovedFooter';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import ReviewSlider from '../components/common/ReviewSlider';
import Course_Slider from '../components/core/Catalog/Course_Slider';
import TeamSlider from '../components/core/HomePage/TeamSlider';
import CertificationSection from '../components/core/HomePage/CertificationSection';

import { getCatalogPageData } from '../services/operations/pageAndComponentData';

import { MdOutlineRateReview } from 'react-icons/md';
import { FaArrowRight } from "react-icons/fa";

import { motion } from 'framer-motion';
import { fadeIn, scaleUp } from './../components/common/motionFrameVarients';

import BackgroundEffect from './BackgroundEffect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [CatalogPageData, setCatalogPageData] = useState(null);
    const categoryID = "6506c9dff191d7ffdb4a3fe2";
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCatalogPageData = async () => {
            try {
                const result = await getCatalogPageData(categoryID, dispatch);
                setCatalogPageData(result);
            } catch (error) {
                console.error("Error fetching catalog data:", error);
            }
        };
        if (categoryID) {
            fetchCatalogPageData();
        }
    }, [categoryID, dispatch]);

    const learnerRef1 = useRef(null);
    const learnerRef2 = useRef(null);
    const learnerRef3 = useRef(null);

    const animateCount = (ref) => {
        if (!ref.current) return;
        let count = 0;
        const target = parseInt(ref.current.getAttribute('data-target'));
        const speed = 130;

        const updateCount = () => {
            const increment = Math.ceil(target / speed);
            count += increment;
            if (count > target) count = target;
            ref.current.innerText = count;
            if (count < target) {
                requestAnimationFrame(updateCount);
            }
        };

        updateCount();
    };

    useEffect(() => {
        animateCount(learnerRef1);
        animateCount(learnerRef2);
        animateCount(learnerRef3);
    }, []);

    return (
        <React.Fragment>
            {/* Background with Gradient and Particles */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-0"
            >
                <BackgroundEffect />
            </motion.div>

            {/* Main Content above background */}
            <div className="relative z-10">
                {/* Section 1 - Hero */}
                <div id='home-welcome' className='relative h-[600px] md:h-[400px] justify-center mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white'>
                    <motion.div
                        variants={fadeIn('left', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className='text-center text-3xl lg:text-4xl font-semibold mt-7 theme-text-primary'
                    >
                        Welcome to
                        <HighlightText text={" Beeja "} />
                        Igniting Minds, Transforming Futures
                    </motion.div>

                    <motion.div
                        variants={fadeIn('right', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className='mt-4 w-[90%] text-center text-base lg:text-lg font-bold theme-text-secondary'
                    >
                        Embark on a seamless learning experience with our state of the art platform. Dive into courses crafted to inspire, challenge, and empower you for success.
                    </motion.div>

                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className='flex flex-row gap-7 mt-8'
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <CTAButton active={true} linkto={"/signup"}>
                                Get Started
                            </CTAButton>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <CTAButton active={false} linkto={"/login"}>
                                Learn More <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </CTAButton>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats Counter Section */}
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className='parent-count-container'
                >
                    <motion.div
                        variants={scaleUp}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className='count-container'
                    >
                        <div className="increase-count">
                            <i>
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </i>
                            <div className='num'>
                                <div ref={learnerRef1} className="count-num" data-target="25">0</div>
                                <div className="count-num">K+</div>
                            </div>
                            <div className='text'>Active Learners</div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={scaleUp}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: 0.2 }}
                        className='count-container'
                    >
                        <div className="increase-count">
                            <i>
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </i>
                            <div className='num'>
                                <div ref={learnerRef3} className="count-num" data-target="100">0</div>
                                <div className="count-num">+</div>
                            </div>
                            <div className='text'>Total Courses</div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={scaleUp}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: 0.4 }}
                        className='count-container'
                    >
                        <div className="increase-count">
                            <i>
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </i>
                            <div className='num'>
                                <div ref={learnerRef2} className="count-num" data-target="1200">0</div>
                                <div className="count-num">+</div>
                            </div>
                            <div className='text'>Total Students</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Code Blocks Section */}
                <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center theme-text-primary justify-between'>
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <CodeBlocks
                            position={"lg:flex-row"}
                            heading={<div className='text-3xl lg:text-4xl font-semibold'>Master Coding with <HighlightText text={"Beeja's Expert-Led "} /> courses</div>}
                            subheading={"Elevate your programming skills with Beeja, where hands-on learning meets expert guidance to unlock your full coding potential."}
                            ctabtn1={{ btnText: "try it yourself", linkto: "/signup", active: true }}
                            ctabtn2={{
                                btnText: (
                                    <>
                                        Learn More <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
                                    </>
                                ),
                                link: "/signup",
                                active: false
                            }}
                            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                            codeColor={"text-yellow-25"}
                            backgroundGradient={"code-block1-grad"}
                        />
                    </motion.div>

                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <CodeBlocks
                            position={"lg:flex-row-reverse"}
                            heading={<div className="w-[100%] text-3xl lg:text-4xl font-semibold lg:w-[50%]">Code Instantly  <HighlightText text={"with Beeja"} /></div>}
                            subheading={"Jump right into coding at Beeja, where our interactive lessons get you building real-world projects from the very start."}
                            ctabtn1={{ btnText: "Continue Lesson", link: "/signup", active: true }}
                            ctabtn2={{ btnText: "Learn More", link: "/signup", active: false }}
                            codeColor={"text-white"}
                            codeblock={`import React from \"react\";\n import CTAButton from \"./Button\";\nimport TypeAnimation from \"react-type\";\nimport { FaArrowRight } from \"react-icons/fa\";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                            backgroundGradient={"code-block2-grad"}
                        />
                    </motion.div>

                    {/* Certification Section */}
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <CertificationSection />
                    </motion.div>

                    {/* Team Slider Section */}
                    <motion.div
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className='text-center text-3xl lg:text-4xl font-semibold mt-16 mb-8 theme-text-primary'
                    >
                        Meet Our Expert
                        <HighlightText text={" Team"} />
                    </motion.div>
                    <motion.div
                        variants={scaleUp}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <TeamSlider />
                    </motion.div>

                    {/* Course Sections */}
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className='mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent'
                    >
                        <h2 className='theme-text-primary mb-6 text-2xl'>Popular Picks for You 🏆</h2>
                        <Course_Slider Courses={CatalogPageData?.selectedCategory?.courses} />
                    </motion.div>

                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className='mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent'
                    >
                        <h2 className='theme-text-primary mb-6 text-2xl'>Top Enrollments Today 🔥</h2>
                        <Course_Slider Courses={CatalogPageData?.mostSellingCourses} />
                    </motion.div>

                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <ExploreMore />
                    </motion.div>
                </div>

                {/* Section 2 - Skills */}
                <div className='bg-pure-greys-5 text-richblack-700 skills-section'>
                    <div className='homepage_bg h-[310px]'>
                        <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                            <div className='h-[150px]'></div>
                            <motion.div
                                variants={fadeIn('up', 0.2)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.2 }}
                                className='flex flex-row gap-7 theme-text-primary'
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <CTAButton active={true} linkto={"/signup"}>
                                        <div className='flex items-center gap-3'>
                                            Explore Full Catalog <FaArrowRight />
                                        </div>
                                    </CTAButton>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <CTAButton active={false} linkto={"/signup"}>
                                        <div>Learn more <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></div>
                                    </CTAButton>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
                        <div className='flex flex-col lg:flex-row gap-5 mb-10 mt-[95px]'>
                            <motion.div
                                variants={fadeIn('right', 0.2)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.2 }}
                                className='text-3xl lg:text-4xl font-semibold w-full lg:w-[45%] theme-text-primary'
                            >
                                Get the Skills you need for a <HighlightText text={"Job that is in demand"} />
                            </motion.div>

                            <motion.div
                                variants={fadeIn('left', 0.2)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.2 }}
                                className='flex flex-col gap-10 w-full lg:w-[40%] items-start'
                            >
                                <div className='text-[16px] theme-text-secondary'>
                                    The modern Beeja Academy dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="learn-more-btn"
                                >
                                    <CTAButton active={true} linkto={"/signup"}>
                                        <div>Learn more <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></div>
                                    </CTAButton>
                                </motion.div>
                            </motion.div>
                        </div>

                        <motion.div
                            variants={fadeIn('up', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <TimelineSection />
                        </motion.div>

                        <motion.div
                            variants={fadeIn('up', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <LearningLanguageSection />
                        </motion.div>
                    </div>
                </div>

                {/* Section 3 - Instructor & Reviews */}
                <div className='mt-14 w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 theme-text-primary'>
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <InstructorSection />
                    </motion.div>

                    <motion.h1
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className="text-center text-3xl lg:text-4xl font-semibold mt-8 flex justify-center items-center gap-x-3 theme-text-primary"
                    >
                        Reviews from other learners <MdOutlineRateReview className='text-yellow-25' />
                    </motion.h1>

                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <ReviewSlider />
                    </motion.div>
                </div>

                {/* Footer */}
                <ImprovedFooter />
            </div>
        </React.Fragment>
    );
};

export default Home;
