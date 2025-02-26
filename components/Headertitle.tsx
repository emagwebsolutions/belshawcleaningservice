'use client'
import useGetQuery from '@/data/queryprovider/useGetQuery';


const Headertitle = () => {
  const  post: {
    title: string;
    body: string;
    excerpt: string;
    image: string;
    slug: string;
    cat_title: string;
  }[] = useGetQuery('post','/post') || [] 

  const res = Object.values(post)
    .filter((v) => {
      return v.slug === 'spotless-cleaning-at-your-doorstep';
    })


  return (
    <div  className="headeer-title">
   
        <div>
        <h1>{res ? res[0]?.title : ''}</h1>
        {res ? res[0]?.excerpt: ''}
        </div>
      </div>
  )
};

export default Headertitle;
