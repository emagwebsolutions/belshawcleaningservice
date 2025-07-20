'use client';
import useGetQuery from '@/data/queryprovider/useGetQuery';
import { motion } from 'motion/react';
import { childVariants, variantsProps } from './variants';

const Headertitle = () => {
  const post: {
    title: string;
    body: string;
    excerpt: string;
    image: string;
    slug: string;
    cat_title: string;
  }[] = useGetQuery('post', '/post') || [];

  const res = Object.values(post).filter((v) => {
    return v.slug === 'spotless-cleaning-at-your-doorstep';
  });

  return (
    <div className="headeer-title">
      <motion.div {...variantsProps}>
        <motion.h1 variants={childVariants}>
          {res ? res[0]?.title : ''}
        </motion.h1>
        <motion.div variants={childVariants}>
          {res ? res[0]?.excerpt : ''}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Headertitle;
