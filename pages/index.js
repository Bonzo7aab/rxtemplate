import Head from 'next/head';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from '../styles/Home.module.sass';
import { BsHouse } from 'react-icons/bs'

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import sanityClient from '../client';
import Card from '../components/Card';
import WideCard from '../components/WideCard';
import advantages from '../data/advantages.json'
import comments from '../data/comments.json'
import { FadeInWhenVisible } from '../helpers/framer';

const Video = () => (
  <section className={styles.videoWrapper}>
    <video autoPlay loop muted id="myVideo">
      <source src="/mountain.mp4" type="video/mp4"/>
    </video>
    <div className={styles.titleWrapper}>
      <FadeInWhenVisible className={styles.titleBig} delay={0.2}>Mountain Home</FadeInWhenVisible>
      <FadeInWhenVisible className={styles.titleSmall} delay={0.4}>An Alpine haven of warmth, tranquillity and restoration</FadeInWhenVisible>
      <FadeInWhenVisible className={styles.titleButton} delay={0.8}>
        <Link href='/rooms'>
          <div>
            <span><BsHouse /></span>
            <span className={styles.checkRooms}>Check rooms</span>
          </div>
        </Link>
      </FadeInWhenVisible>
    </div>
  </section>
);

const Main = () => (
  <section className={styles.mainWrapper}>
    <FadeInWhenVisible className={styles.mainText} delay={0.2} x={-400}>
      <p className={styles.textHeader}>A remote part of the world to deeply switch off and unwind</p>
      <p className={styles.text}>LeCrans is an Alpine haven of exceptionally refined warmth, restorative tranquillity and discerning care. Located above Crans-Montana mountain resort on the edge of a peaceful Alpine forest, this is the ultimate setting to spoil yourself within lush green surroundings that allow you to absorb and engage in the comforts of nature.</p>
      <p className={styles.text}>Explore a remote and beautiful part of the world surrounded by exhilarating scenery and striking landscapes. Indulge in sleek and luxurious interiors that will far surpass your expectations. Enjoy impeccable service, gourmet cuisine, delectable delights and a world-class spa that all combine to create an unforgettable experience that???s guaranteed to leave a footprint on your heart.</p>
      <p className={styles.text}>Each suite???s design harnesses all there is to love about Switzerland???s breath-taking natural landscape. Rooms features rustic designs and unique architecture, as well as balconies and terraces where you can watch the sunset over the mountains.</p>
    </FadeInWhenVisible>
    <FadeInWhenVisible className={styles.subText} delay={0.5}>
      <p>Seeking a truly peaceful experience? Indulge, escape and relax at LeCrans</p>
    </FadeInWhenVisible>
  </section>
);

const Rooms = ({ rooms }) => (
  <section>
    <Swiper
      slidesPerView={3.7}
      spaceBetween={20}
      loop={true}
      autoplay={{delay: 0}}
      speed={10000}
      centeredSlides={true}
      centeredSlidesBounds={true}
    >
      {rooms.map(room => 
        <SwiperSlide key={room._rev}>
          <Card data={room} />
        </SwiperSlide>
      )}
    </Swiper>
  </section>
);

const Advantages = () => (
  <section className={styles.advantages}>
    {advantages.map((el, i) => <WideCard data={el} key={i} positionRight={i % 2 ? true : false} />)}
  </section>
);

const Comments = () => (
  <section className={styles.comments}>
    <div className={styles.commentsTitle}>Comments</div>
    <Swiper
      slidesPerView={4.2}
      spaceBetween={150}
      loop={true}
      autoplay={{delay: 0}}
      speed={10000}
      centeredSlides={true}
      centeredSlidesBounds={true}
    >
      {comments.map(({comment}) => 
        <SwiperSlide key={comment}>
          <div className={styles.comment}>&#8220;{comment}&#8221;</div>
        </SwiperSlide>
        )}
    </Swiper>
  </section>
);

const Home = ({ rooms }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Video />
      <Main />
      <Rooms rooms={rooms}/>
      <Advantages />
      <Comments />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "room"]{
    title,
    description,
    tags,
    surface,
    price,
    "imageUrl": image.asset->url,
    _rev
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
        rooms: data
      }
    }
  }
}

export default Home;