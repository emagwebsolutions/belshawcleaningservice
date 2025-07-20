'use client';

import Banner from './Banner';
import useGetQuery from '@/data/queryprovider/useGetQuery';
import LaundaryService from './LaundaryService';

const Pages = ({
  term,
  imgNumb,
  title,
  subtitle,
}: {
  term: string;
  imgNumb: number;
  title: string;
  subtitle: string;
}) => {
  const post: {
    title: string;
    body: string;
    excerpt: string;
    image: string;
    slug: string;
    cat_title: string;
  }[] = useGetQuery('post', '/post') || [];


  //Get Laundry Service
  const output = Object.values(post)
    .filter((v) => {
      return v.slug === term;
    })
    .map((vl, k) => (
      <div key={k} className="pages">
        <div>
          <div>
            <h2>{vl.title}</h2>
            <div>{vl.excerpt}</div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${vl.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
      </div>
    ));

  const img = post.filter((v) => {
    return v.cat_title == 'Residential Cleaning  ';
  });

  return (
    <>
      <Banner img={img[imgNumb]?.image} title={title} subtitle={subtitle} />
      <section>{output}</section>

      <LaundaryService />
    </>
  );
};

export default Pages;
