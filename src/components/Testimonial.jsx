import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaQuoteLeft, FaStar } from "react-icons/fa";
import {
  PiArrowFatLinesLeftBold,
  PiArrowFatLinesRightBold,
} from "react-icons/pi";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import SectionWrapper from "../hoc";
import { testimonials } from "../constants";
import style from "./styles/testimonial.module.css";

const Testimonial = () => {
  const [number, setNumber] = useState(1);
  const [showPerPage, setShowPerPage] = useState(1);
  const [desktop, setDesktop] = useState(false);
  const lastNumber = number * showPerPage;
  const firstNumber = lastNumber - showPerPage;
  const filterTestimonial = testimonials.slice(firstNumber, lastNumber);

  const prev = () => {
    if (desktop) {
      setNumber((prevNumber) => (prevNumber === 2 ? prevNumber - 1 : 1));
    } else {
      setNumber((prevNumber) =>
        prevNumber === 1 ? testimonials.length : prevNumber - 1
      );
    }
  };

  const next = () => {
    if (desktop) {
      setNumber((prevNumber) => (prevNumber === 1 ? prevNumber + 1 : 2));
    } else {
      setNumber((prevNumber) =>
        prevNumber === testimonials.length ? 1 : prevNumber + 1
      );
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1200px)");

    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        setShowPerPage(3);
        setDesktop(true);
      } else {
        setShowPerPage(1);
        setDesktop(false);
      }
    };

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Star rating component
  const StarRating = ({ rating = 5 }) => (
    <div className={style.starRating}>
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? style.starFilled : style.star}
        />
      ))}
    </div>
  );

  return (
    <div className={style.container}>
      <motion.h1 variants={textVariant()} className={style.title}>
        Client Testimonials
      </motion.h1>
      <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.subtitle}>
        Don't just take my word for it - hear what clients say about working
        with me
      </motion.p>

      <div className={style.carousel_container}>
        {/* Testimonials card */}
        <motion.div
          variants={fadeIn("", "", 0.5, 1)}
          className={style.card_container}
        >
          {filterTestimonial.map((testimonial) => (
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn("", "", 0.15, 1)}
              key={testimonial.id}
              className={style.card}
            >
              <div className={style.header}>
                <div className={style.quoteSection}>
                  <FaQuoteLeft className={style.openquote} />
                  <StarRating rating={5} />
                </div>
                <img
                  className={style.img}
                  src={testimonial.image}
                  alt={testimonial.name}
                />
              </div>

              <motion.p
                variants={fadeIn("", "", 0.15, 1)}
                className={style.para}
              >
                "{testimonial.text}"
              </motion.p>

              <div className={style.label}>
                <motion.div
                  variants={slideIn("left", "", 0.3, 0.75)}
                  className={style.clientInfo}
                >
                  <p className={style.name}>
                    {testimonial.name}
                    &nbsp;{" "}
                    <span className={style.country}>
                      ({testimonial.country})
                    </span>
                  </p>
                  <p className={style.category}>{testimonial.category}</p>
                </motion.div>
                <motion.abbr
                  variants={slideIn("right", "", 0.3, 0.75)}
                  title="LinkedIn Profile"
                >
                  <a
                    href={testimonial.linkedIn}
                    target="_blank"
                    className={style.icon}
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedinIn />
                  </a>
                </motion.abbr>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation */}
        <div className={style.btn_container}>
          <button
            className={`${style.button} ${style.prev} ${
              desktop && number === 1 ? style.hidden : ""
            }`}
            type="button"
            onClick={prev}
          >
            <PiArrowFatLinesLeftBold />
          </button>
          <button
            className={`${style.button} ${style.next} ${
              desktop && number === 2 ? style.hidden : ""
            }`}
            type="button"
            onClick={next}
          >
            <PiArrowFatLinesRightBold />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className={style.indicators}>
          {desktop
            ? [1, 2].map((dot) => (
                <button
                  key={dot}
                  className={`${style.indicator} ${
                    number === dot ? style.indicatorActive : ""
                  }`}
                  onClick={() => setNumber(dot)}
                />
              ))
            : testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${style.indicator} ${
                    number === index + 1 ? style.indicatorActive : ""
                  }`}
                  onClick={() => setNumber(index + 1)}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonial, "testimonial", "my-0");
