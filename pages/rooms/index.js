import Head from 'next/head';
import sanityClient from '../../client';
import Room from '../../components/Room';

const Rooms = ({ rooms }) => {
  return (
    <div>
      <Head>
        <title>Rooms</title>
        <meta name="description" content="Rooms in hotel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {rooms.map(room => <Room key={room._rev} data={room} />)}
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

export default Rooms