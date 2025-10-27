import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import style from "./styles/home.module.css";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const Home = () => {
  const [currentRole, setCurrentRole] = React.useState(0);
  const roles = [
    "Software Engineer",
    "CTO & Tech Lead",
    "Full-Stack Developer",
    "SaaS Founder",
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={style.hero_section}
    >
      <div className={style.container}>
        {/* Main Title */}
        <motion.div variants={textVariant()} className={style.title_container}>
          <p className={style.greeting}>Hello, I'm</p>
          <h1 className={style.name}>
            IKRAM <span className={style.name_highlight}>KHAN</span>
          </h1>
          <div className={style.title_rotator}>
            <span className={style.title_static}>Senior</span>
            <div className={style.title_dynamic}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={style.role_text}
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p variants={fadeIn("", "", 0.3, 1)} className={style.desc}>
          Transforming ideas into scalable digital solutions with{" "}
          <span className={style.highlight}>8+ years</span> of expertise in
          full-stack development, technical leadership, and building
          high-performance teams.
        </motion.p>

        {/* Stats */}
        <motion.div variants={fadeIn("", "", 0.4, 1)} className={style.stats}>
          <div className={style.stat_item}>
            <span className={style.stat_number}>80+</span>
            <span className={style.stat_label}>Projects</span>
          </div>
          <div className={style.stat_item}>
            <span className={style.stat_number}>6+</span>
            <span className={style.stat_label}>Years</span>
          </div>
          <div className={style.stat_item}>
            <span className={style.stat_number}>20+</span>
            <span className={style.stat_label}>Clients</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeIn("", "", 0.5, 1)}
          className={style.cta_container}
        >
          <motion.button
            className={style.primary_btn}
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View My Work</span>
            <MdOutlineArrowForwardIos className={style.arrow} />
          </motion.button>

          <motion.button
            className={style.secondary_btn}
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeIn("", "", 0.7, 1)}
          className={style.scroll_indicator}
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className={style.scroll_arrow}></div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
