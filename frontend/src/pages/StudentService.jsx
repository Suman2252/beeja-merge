import React from "react";
import { motion } from "framer-motion";
import { fadeIn, bounce, scaleUp } from "../components/common/motionFrameVarients";
import HighlightText from "../components/core/HomePage/HighlightText";
import ImprovedFooter from "../components/common/ImprovedFooter";
import { Link } from "react-router-dom";
import { 
  FaRocket, 
  FaCode, 
  FaBrain, 
  FaUsers, 
  FaTrophy, 
  FaLightbulb,
  FaGraduationCap,
  FaChartLine,
  FaStar,
  FaPlay,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";

const StudentService = () => {
  const features = [
    {
      icon: <FaRocket className="text-4xl theme-accent-blue" />,
      title: "Launch Your Career",
      description: "From zero to hero in tech with our accelerated learning programs for the students",
      color: "theme-accent-blue"
    },
    {
      icon: <FaCode className="text-4xl theme-accent-blue" />,
      title: "Master Modern Tech",
      description: "Learn cutting-edge technologies that companies are actively hiring for",
      color: "theme-accent-blue"
    },
    {
      icon: <FaBrain className="text-4xl theme-accent-blue" />,
      title: "Think Like a Pro",
      description: "Develop problem-solving skills and technical mindset of industry experts",
      color: "theme-accent-blue"
    },
    {
      icon: <FaUsers className="text-4xl theme-accent-blue" />,
      title: "Join the Community",
      description: "Connect with peers, mentors, and industry professionals in our network",
      color: "theme-accent-blue"
    }
  ];

  const learningPath = [
    {
      step: "Discover",
      title: "Find Your Path",
      description: "Explore different tech domains and discover what excites you most",
      icon: <FaLightbulb className="text-2xl" />
    },
    {
      step: "Learn",
      title: "Build Skills",
      description: "Master fundamentals through hands-on projects and real-world scenarios",
      icon: <FaGraduationCap className="text-2xl" />
    },
    {
      step: "Practice",
      title: "Apply Knowledge",
      description: "Work on industry-level projects and build an impressive portfolio",
      icon: <FaCode className="text-2xl" />
    },
    {
      step: "Launch",
      title: "Start Career",
      description: "Get placed in top companies with our comprehensive job assistance",
      icon: <FaRocket className="text-2xl" />
    }
  ];

  const stats = [
    { number: "5000+", label: "Students Trained", icon: <FaUsers /> },
    { number: "95%", label: "Placement Rate", icon: <FaTrophy /> },
    { number: "200+", label: "Partner Companies", icon: <FaChartLine /> },
    { number: "4.8/5", label: "Student Rating", icon: <FaStar /> }
  ];

  return (
    <div className="theme-bg-primary min-h-screen overflow-hidden">
      {/* Hero Section with Unique Design */}
      <section className="relative py-20 flex items-center justify-center">
        {/* Animated Background Elements */}
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px) translateX(0px); }
              25% { transform: translateY(-15px) translateX(15px); }
              50% { transform: translateY(0px) translateX(0px); }
              75% { transform: translateY(15px) translateX(-15px); }
              100% { transform: translateY(0px) translateX(0px); }
            }
            @keyframes floatReverse {
              0% { transform: translateY(0px) translateX(0px); }
              25% { transform: translateY(15px) translateX(-15px); }
              50% { transform: translateY(0px) translateX(0px); }
              75% { transform: translateY(-15px) translateX(15px); }
              100% { transform: translateY(0px) translateX(0px); }
            }
            .float { animation: float 8s ease-in-out infinite; }
            .float-reverse { animation: floatReverse 10s ease-in-out infinite; }
            .float-slow { animation: float 12s ease-in-out infinite; }
          `}
        </style>
        <div className="fixed inset-0 overflow-hidden z-0">
          <div className="fixed top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 float"></div>
          <div className="fixed top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 float-reverse"></div>
          <div className="fixed bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 float-slow"></div>
          <div className="fixed top-1/2 left-20 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 float"></div>
          <div className="fixed bottom-40 right-20 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 float-reverse"></div>
        </div>

        <div className="relative z-10 mx-auto w-11/12 max-w-maxContent text-center">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-8">
              <FaStar className="theme-accent-yellow" />
              <span className="theme-text-primary text-sm font-medium">Rated #1 Tech Training Platform</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
              <div className="theme-text-primary mb-1">Your</div>
              <div className="theme-highlight-bg p-3 rounded-2xl inline-block mb-1">
                <span className="theme-text-on-highlight font-extrabold">Dream Tech Career</span>
              </div>
              <div className="theme-text-primary">Starts Here</div>
            </h1>
            
            <p className="text-lg theme-text-secondary mb-8 lg:w-[60%] mx-auto leading-relaxed">
              Transform from a beginner to a job-ready developer with our immersive, project-based learning experience designed by industry experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/catalog">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group theme-button-primary px-6 py-3 rounded-full font-semibold text-base flex items-center gap-2 hover:shadow-2xl transition-all duration-300"
                >
                  Start Learning <FaPlay className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link to="/about">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group border-2 theme-border theme-text-primary px-6 py-3 rounded-full font-semibold text-base flex items-center gap-2 hover:theme-bg-secondary hover:theme-text-primary hover:shadow-lg transition-all duration-300"
                >
                  Watch Demo <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleUp}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl theme-accent-blue mb-1">{stat.icon}</div>
                  <div className="text-3xl font-bold theme-text-primary mb-1">{stat.number}</div>
                  <div className="theme-text-secondary text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Card Design */}
      <section className="py-20 relative">
        <div className="mx-auto w-11/12 max-w-maxContent">
          <motion.div 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <div className="theme-text-primary mb-2">Why Students</div>
              <div className="theme-highlight-bg p-4 rounded-2xl inline-block mb-2">
                <span className="theme-text-on-highlight font-extrabold">Choose Us</span>
              </div>
            </h2>
            <p className="theme-text-secondary text-xl lg:w-[50%] mx-auto">
              We don't just teach code, we build careers and transform lives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative theme-card backdrop-blur-sm border theme-border rounded-2xl p-8 hover:border-opacity-60 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold theme-text-primary mb-4">{feature.title}</h3>
                  <p className="theme-text-secondary text-lg leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Timeline */}
      <section className="py-20 theme-bg-secondary">
        <div className="mx-auto w-11/12 max-w-maxContent">
          <motion.div 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <div className="theme-text-primary mb-2">Your</div>
              <div className="theme-highlight-bg p-4 rounded-2xl inline-block">
                <span className="theme-text-on-highlight font-extrabold">Learning Journey</span>
              </div>
            </h2>
            <p className="theme-text-secondary text-xl">
              A structured path from beginner to professional
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500 rounded-full hidden lg:block"></div>
            
            {learningPath.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="theme-card rounded-2xl p-8 border theme-border hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="theme-highlight-bg p-3 rounded-full theme-text-on-highlight">
                        {item.icon}
                      </div>
                      <div>
                        <div className="theme-accent-blue font-semibold text-sm uppercase tracking-wider">{item.step}</div>
                        <h3 className="text-2xl font-bold theme-text-primary">{item.title}</h3>
                      </div>
                    </div>
                    <p className="theme-text-secondary text-lg">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="hidden lg:block relative z-10">
                  <div className="w-6 h-6 theme-highlight-bg rounded-full border-4 theme-bg-primary"></div>
                </div>
                
                <div className="lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-cyan-700/20"></div>
        <div className="relative mx-auto w-11/12 max-w-maxContent">
          <motion.div 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center mb-16"
          >
            {/* <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Success Stories</span> That Inspire
            </h2> */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <div className="p-4 rounded-2xl inline-block">
                <span className="font-extrabold success-stories-text">Success Stories</span>
              </div>
              <div className="theme-text-primary mb-2">That Inspire</div>
            </h2>
            <p className="theme-text-secondary text-xl">
              Real students, real transformations, real careers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "Frontend Developer at Google", salary: "₹18 LPA", story: "From marketing to tech in 6 months" },
              { name: "Rahul Sharma", role: "Full Stack Developer at Microsoft", salary: "₹22 LPA", story: "College dropout to tech leader" },
              { name: "Priya Patel", role: "Data Scientist at Amazon", salary: "₹25 LPA", story: "Career switch at 30, now thriving" }
            ].map((story, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.2 }}
                className="theme-card backdrop-blur-sm border theme-border rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF512F] to-[#F09819] border-2 border-orange-600 rounded-full flex items-center justify-center text-white font-bold hover:from-[#F09819] hover:to-[#FF512F] transition-all duration-300 shadow-lg shadow-orange-500/20">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="theme-text-primary font-semibold">{story.name}</h4>
                    <p className="theme-text-secondary text-sm">{story.role}</p>
                  </div>
                </div>
                <div className="text-2xl font-bold theme-text-primary mb-2">{story.salary}</div>
                <p className="theme-text-secondary">{story.story}</p>
                <div className="flex theme-accent-yellow mt-3">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="text-sm" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Unique Design */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-blue-900/30"></div>
        <div className="relative mx-auto w-11/12 max-w-maxContent">
          <motion.div 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center theme-card backdrop-blur-sm border theme-border rounded-3xl p-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
              Ready to <span className="theme-accent-blue">Transform</span> Your Life?
            </h2>
            <p className="theme-text-secondary text-xl mb-8 lg:w-[60%] mx-auto">
              Join thousands of students who've already started their journey to a successful tech career
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link to="/catalog">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="theme-button-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Start Your Journey Today
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group border-2 theme-border theme-text-primary px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:theme-bg-secondary hover:theme-text-primary hover:shadow-lg transition-all duration-300"
                >
                  Talk to Counselor <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-4 theme-text-secondary">
              <FaCheckCircle className="theme-accent-green" />
              <span>No hidden fees</span>
              <span>•</span>
              <FaCheckCircle className="theme-accent-green" />
              <span>100% Job assistance</span>
              <span>•</span>
              <FaCheckCircle className="theme-accent-green" />
              <span>Lifetime support</span>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="student-page-footer">
        <ImprovedFooter />
      </footer>
    </div>
  );
};

export default StudentService;
