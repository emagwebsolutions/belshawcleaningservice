'use client'

import Bannertitle from '@/components/Bannertitle';
import Banner from '@/components/Banner';
import Image from 'next/image'
import useGetQuery from '@/data/queryprovider/useGetQuery';




const Team = () => {

  const post: {
    title: string;
    body: string;
    excerpt: string;
    image: string;
    slug: string;
    cat_title: string;
  }[] = useGetQuery('post', '/post') || [];

    //Get Laundry Service
    const laundryservice = Object.values(post).filter((v) => {
      return v.slug === 'our-team'
    }).map((vl,k) =>(
      <div key={k} className="about">
        <div>
          <h1>{vl.title}</h1>
          <div>
      {vl.excerpt}
          </div>
        </div>
        <div>
        <Image width="5" height="4" layout="responsive" src={vl.image+''} alt="" />
        </div>
      </div>
  ))


  return (
    <>
        <Banner img="/aboutus.jpeg" />

      <Bannertitle 
        mainheading='Our Team' 
        subheading='Meet our hardworking staff' 
      />

      <section className="sectiontwo">
        {laundryservice}
      </section>
    </>
  )
}



export default Team
