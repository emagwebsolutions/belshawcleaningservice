'use client'

type Headings = {
  subheading: string;
  mainheading: string;
};

const Bannertitle = ({ subheading, mainheading }: Headings) => {
  return (
    <div className="bannertitle">
      <h5>{subheading}</h5>
      <h2>{mainheading}</h2>
    </div>
  );
};

export default Bannertitle;
