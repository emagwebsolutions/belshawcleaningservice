'use client';
import useGetQuery from '@/data/queryprovider/useGetQuery';

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
      <div>
      <h1>CLEANING SERVICES IN GHANA</h1>
      <div>You can count oun us for all your cleaning services</div>
      </div>
    </div>
  );
};

export default Headertitle;
