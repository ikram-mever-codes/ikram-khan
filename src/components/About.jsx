import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc";
import style from "./styles/about.module.css";
import { textVariant, fadeIn } from "../utils/motion";

const About = () => (
  <div style={{ marginBottom: "5rem" }}>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <img src="/me.png" alt="IKRAM KHAN" className={style.ikImage} />

      <div className={style.wrapper}>
        <motion.p variants={fadeIn("", "", 0.5, 1)} className={style.text}>
          I'm{" "}
          <a
            href="https://www.linkedin.com/in/ikram-khan-b93251311"
            target="_blank"
            className={style.link}
            rel="noreferrer"
          >
            IKRAM KHAN
          </a>
          , a Senior Software Engineer & Technology Leader with 6+ years of
          industry expertise. As a former CTO of multinational company and Tech
          Lead at high-growth startups, I bring comprehensive experience across
          full-stack development, cloud architecture, project management, and
          UI/UX design.
        </motion.p>

        <motion.p variants={fadeIn("", "", 0.75, 1)} className={style.text}>
          My journey in technology began at 12, transforming a childhood
          fascination with computers into a thriving career. I specialize in
          transforming complex business challenges into scalable digital
          solutions, having successfully delivered 50+ projects across diverse
          industries from startups to enterprise-level organizations.
        </motion.p>

        <motion.p variants={fadeIn("", "", 1.25, 1)} className={style.text}>
          What sets me apart is my unique blend of deep technical expertise and
          strategic leadership. I excel at bridging the gap between technical
          execution and business objectives, ensuring every solution delivers
          tangible business value while meeting the highest technical standards.
        </motion.p>

        <motion.p variants={fadeIn("", "", 1.75, 1)} className={style.text}>
          Let's build something extraordinary together.{" "}
          <a href="/#contact" className={style.link} rel="noreferrer">
            Get in touch
          </a>{" "}
          at <b>ikram.codes@gmail.com</b> to discuss how we can collaborate on
          your next big project.
        </motion.p>
      </div>
    </div>
  </div>
);

export default SectionWrapper(About, "about", "");
