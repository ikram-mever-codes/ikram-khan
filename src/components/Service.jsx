import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc";
import style from "./styles/service.module.css";
import { services } from "../constants";

const Service = () => (
  <div className={style.container}>
    <motion.div variants={textVariant()} className={style.header}>
      <h1 className={style.title}>Strategic Technology Services</h1>
      <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.subtitle}>
        From architectural design to full-scale digital transformation -
        delivering enterprise-grade solutions
      </motion.p>
      <div className={style.expertiseBadge}>
        <span className={style.badge}>Senior Software Engineer & CTO</span>
      </div>
    </motion.div>

    <div className={style.card_container}>
      {services.map((service, index) => (
        <Tilt
          key={service.id}
          className={style.tilt}
          options={{ max: 15, scale: 1.05, speed: 1000 }}
        >
          <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className={style.card}
          >
            <div className={style.card_front}>
              <div className={style.icon_container}>
                <img
                  className={style.icon}
                  src={service.icon}
                  alt={service.title}
                  loading="lazy"
                />
                <div className={style.icon_overlay}></div>
              </div>
              <h3 className={style.name}>{service.title}</h3>
              <p className={style.tech_stack}>{service.tech}</p>
              <div className={style.arrow}>
                <span>→</span>
              </div>
            </div>

            <div className={style.card_back}>
              <h4 className={style.back_title}>{service.title}</h4>
              <p className={style.text}>{service.text}</p>
              {service.features && (
                <ul className={style.features}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={style.feature}>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              <div className={style.cta}>
                <span className={style.cta_text}>Let's Discuss</span>
              </div>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
  </div>
);

export default SectionWrapper(Service, "service", "my-0");
