import useGetQuery from '@/data/queryprovider/useGetQuery';

const LaundaryService = () => {
  const post: {
    title: string;
    body: string;
    excerpt: string;
    image: string;
    slug: string;
    cat_title: string;
  }[] = useGetQuery('post', '/post') || [];

  const laundryservice = post.filter((v) => {
    return v.slug === 'laundry-services';
  });

  return (
    <section className="laundaryservices"
        style={{
          backgroundImage: `url(${laundryservice[0]?.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <div>
          <h2>{laundryservice[0]?.title}</h2>
          <div>{laundryservice[0]?.excerpt}</div>
        </div>

    </section>
  );
};

export default LaundaryService;
