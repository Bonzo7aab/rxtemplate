import styles from '../styles/Rooms.module.sass';

export const Room = ({ data }) => {
    const { description, imageUrl, price, surface, tags, title } = data
  
    return (
        <div className={styles.rooms}>
          <div className={styles.roomImage}>
            <img src={imageUrl} alt={title} />
            <div className={styles.title}>{title}</div>
            <div className={styles.surface}>{surface} m&#178;</div>
          </div>
          <div className={styles.description}>{description}</div>
          <div className={styles.tags}>
            {tags && tags.map((tag, i) => 
              <span key={i} className={styles.tag}>{tag}</span>
            )}
          </div>
          <div className={styles.bookNow}>
            <div className={styles.price}>
              <span>{price}&euro;</span> per night
            </div>
            <div className={styles.bookNowButton}>
              <span className={styles.bookNowText}>Book Now</span>
            </div>
          </div>
        </div>
    )
}

export default Room