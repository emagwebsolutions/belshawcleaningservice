'use client';

import Headertitle from '@/components/Headertitle';
import Link from 'next/link';
import Slider from '@/components/Slider';
import FreeQuote from '@/components/FreeQuote';
import FreeQuoteQuestions from '@/components/FreeQuoteQuestions';
import useGetQuery from '@/data/queryprovider/useGetQuery';
import { useEffect, useState } from 'react';
import Clients from '@/components/Clients';
import { motion } from 'motion/react';
import { childVariants, variantsProps } from '@/components/variants';
//import {motion} from 'motion/react'

export default function Home() {
  const post: {
    title: string;
    body: string;
    excerpt: string;
    image: string;
    slug: string;
    cat_title: string;
  }[] = useGetQuery('post', '/post') || [];

  const [getHeight, setHeight] = useState('100vh');

  useEffect(() => {
    const size = window.innerWidth;
    if (size < 769) {
      setHeight('60vh');
    }
  }, []);

  //Get Residention Cleaning

  const residentialInfo = post.filter((v) => {
    return v.slug === 'residential-cleaning-excerpt';
  });

  //Get Residention Cleaning Services thumbnails

  const residentialCleaning = post.filter((v) => {
    return v.cat_title == 'Residential Cleaning  ';
  });

  //Get Commercial Cleaning
  const commercialInfo = post.filter((v) => {
    return v.slug === 'commercial-cleaning-excerpt';
  });

  //Get Commercial Cleaning Services thumbnails
  const commercialCleaning = post.filter((v) => {
    return v.cat_title == 'Commercial Cleaning ';
  });

  //Get Laundry Service
  const laundryservice = post.filter((v) => {
    return v.slug === 'laundry-services';
  });

  //Get Our Customes

  const ourcustomers = Object.values(post)
    .filter((v) => {
      return v.cat_title == 'Customers';
    })
    .map((v) => ({ image: v.image }));

  return (
    <>
      <section className="slideshow">
        <Slider width="100%" height={getHeight} />
        <Headertitle />
      </section>
      <section className="sectiontwo">
        <motion.div className="container" {...variantsProps}>
          <motion.div variants={childVariants}>
            <div>
              <h2>{residentialInfo[0]?.title}</h2>
              <div>{residentialInfo[0]?.excerpt}</div>
              <Link href="/services" className="btn">
                View All
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={childVariants}
            style={{
              backgroundImage: `url(${residentialCleaning[0]?.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></motion.div>
        </motion.div>
      </section>

      <motion.section
        className="container residentialCleaning"
        {...variantsProps}
      >
        <motion.div
          variants={childVariants}
          style={{
            backgroundImage: `url(${commercialCleaning[4]?.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></motion.div>
        <motion.div variants={childVariants}>
          <div>
            <h2>{commercialInfo[0]?.title}</h2>
            <div>{commercialInfo[0]?.excerpt}</div>
            <Link href="/services" className="btn">
              View All
            </Link>
          </div>
        </motion.div>
      </motion.section>

      <motion.section {...variantsProps} className=" laundry-services">
        <motion.div variants={childVariants}>
          <h2>{laundryservice[0]?.title}</h2>
          <div>{laundryservice[0]?.excerpt}</div>
        </motion.div>
        <motion.div
          {...variantsProps}
          style={{
            backgroundImage: `url(${laundryservice[0]?.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
          }}
        ></motion.div>
      </motion.section>

      <Clients clients={ourcustomers} />

      <motion.section className="sectionone">
        <motion.div className="container" {...variantsProps}>
          <motion.div variants={childVariants}>
            <FreeQuote />
            <FreeQuoteQuestions />
          </motion.div>
        </motion.div>
        <br />
      </motion.section>
    </>
  );
}
