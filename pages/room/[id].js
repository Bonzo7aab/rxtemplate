import Room from '../../components/Room';
import sanityClient from '../../client';

const slug = ({ room }) => {
  console.log(room)
  return (
    <Room data={room} />
  )
}

export async function getServerSideProps (context) {
    const { id } = context.query;
    const query = `*[_type == "room" && _rev == "${id}"]{
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
          room: data[0]
        }
      }
    }
}
  
export default slug