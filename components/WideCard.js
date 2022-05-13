import Image from 'next/image';
import { FadeInWhenVisible } from '../helpers/framer';
import styles from '../styles/WideCard.module.sass'

const WideCard = ({data, positionRight}) => {
    const { title, description, imageUrl } = data;

    return (
        <div className={styles.wideCard}>
            {positionRight && <div className={styles.wideImg}><Image src={imageUrl} width={450} height={350} alt={title} layout='fixed'/></div>}
            <FadeInWhenVisible className={styles.wideCardDescription} delay={0.3} y={100}>
                <span className={styles.borderTop}></span>
                <div className={styles.wideTitle}>{title}</div>
                <div className={styles.wideDescription}>{description}</div>
            </FadeInWhenVisible>
            {!positionRight && <div className={styles.wideImg}><Image src={imageUrl} width={450} height={350} alt={title} layout='fixed' /></div>}
        </div>
    )
}

export default WideCard