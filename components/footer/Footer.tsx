'use client';
import ScrollToTop from 'react-scroll-to-top';
import { motion } from 'motion/react';
import { childVariants, variantsProps } from '../variants';

const Footer = () => {
  return (
    <>
      <footer>
        <motion.div {...variantsProps}>
          <motion.div variants={childVariants} className="social">
            <a href="https://www.facebook.com/Belshawcleaningservice/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/belshawcleaningservices/?igshid=YmMyMTA2M2Y=">
              <i className="fa fa-instagram"></i>
            </a>
          </motion.div>
          <motion.h1 variants={childVariants}>
            BELSHAW CLEANING SERVICES
          </motion.h1>

          <motion.div variants={childVariants}>
            <i className="fa fa-envelope"></i> info@belshawcleaningservices.com
          </motion.div>

          <motion.div variants={childVariants}>
            <i className="fa fa-phone"></i> 030 330 2878 / 055 477 3252
          </motion.div>

          <motion.div variants={childVariants}>&copy; all rights reserved BELSHAW CLEANING SERVICES</motion.div>
        </motion.div>
        <ScrollToTop smooth className="scrolltotop" />

        <a
          className="whatsappbtn"
          href="https://wa.me/233554773252?text=Hello%2C%20I%20want%20to%20make%20enquiry%20on%20your%20cleaning%20service"
        >
          <i className="fa fa-whatsapp"></i>
        </a>
      </footer>
    </>
  );
};

export default Footer;
