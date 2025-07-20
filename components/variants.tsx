export const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
      staggerChildren: 0.5,
      when: 'beforeChildren',
    },
  },
};

export const childVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const variantsProps = {
  variants: parentVariants,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: {
    once: true,
    margin: "-120px"
  },
};




