'use client';

import Bannertitle from './Bannertitle';

const Banner = ({ img,title,subtitle }: { img: string; title: string; subtitle: string; }) => {
  return (
    <>
      <div className="banner"
      style={{
        backgroundImage: `url(${img})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'top'
      }}
      >
        <Bannertitle
          mainheading={title}
          subheading={subtitle}
        />
      </div>
    </>
  );
};

export default Banner;
