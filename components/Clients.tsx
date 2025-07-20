'use client';

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { childVariants, variantsProps } from './variants';
type ClientsType = { clients: { image: string }[] };
import { motion } from 'motion/react';

const Clients = (clients: ClientsType) => {
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) =>
    e.preventDefault();

  const items = Object.values(clients)[0].map((v, k) => {
    return (
      <motion.div
        variants={childVariants}
        className="clients-thumbs"
        onDragStart={handleDragStart}
        role="presentation"
        key={k}
        style={{
          backgroundImage: `url(${v.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      ></motion.div>
    );
  });

  return (
    <motion.div {...variantsProps} className="carousel-wrapper">
      <AliceCarousel
        autoWidth={true}
        disableDotsControls={true}
        mouseTracking
        items={items}
      />
    </motion.div>
  );
};

export default Clients;
