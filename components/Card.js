import Image from "next/image"
import styles from '../styles/Card.module.sass'
import Link from "next/link";

const Card = ({data}) => {
    const { description, imageUrl, price, surface, tags, title, _rev } = data
    return (
        <div className={styles.card}>
            {data && <Image src={imageUrl} width={500} height={400} alt={title} />}
            <div className={styles.cardBody}>
                <p className={styles.title}>{title}</p>
                <p className={styles.tags}>{`${surface} m&#178; / ${tags[0]} / ${tags[1]}`}</p>
                <p className={styles.description}>{description.slice(0, 110)}...</p>
                <div className={styles.price}><span>{price}&euro;</span> per night</div>
            </div>
            <Link href={`/room/${_rev}`}>
                <div className={styles.discoverMore}>Discover more</div>
            </Link>
        </div>
    )
}

export default Card