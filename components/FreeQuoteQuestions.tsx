
import {motion} from 'motion/react'
import { childVariants, variantsProps } from './variants';



const FreeQuoteQuestions = () => {
  return (
    <motion.div
     className="freequotequestions"
     {...variantsProps}
     >
      <motion.h3 variants={childVariants}>Questions or Comments?</motion.h3>

      <motion.p variants={childVariants}>
        We understand that every situation has unique cleaning or sanitization
        needs. Feel free to message or call us with any specifics.
      </motion.p>

      <motion.p variants={childVariants}>
        Your time is valuable, and we will make sure to get back to you as soon
        as we can.
      </motion.p>
    </motion.div>
  );
};

export default FreeQuoteQuestions;
