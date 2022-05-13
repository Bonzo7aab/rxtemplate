import Image from 'next/image'
import React from 'react'
import sanityClient from '../../client';

const News = ({ news }) => {
    console.log(news)
    return (
        <div>
            {news.map(({ title, images, description, date }) => 
                <div key={title}>
                    {images.map((el, i) => <Image key={i} width={200} height={100} src={el.asset.url}/>)}
                    <div>{date}</div>
                    <div>{title}</div>
                    <div>{description}</div>
                </div>
            )}
        </div>
    )
}

export const getServerSideProps = async () => {
    const query = `*[_type == "news"]{
      title,
      description,
      date,
      images[]{
          asset->{
              url
          }
      }
    }`
  
    const data = await sanityClient.fetch(query)
  
    if(!data){
      return {
        props: null,
        notFound: true
      }
    } else {
      return {
        props: {
          news: data
        }
      }
    }
}

export default News