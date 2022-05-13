import policy from '../../data/privacy-policy.json'
import styles from '../../styles/Policy.module.sass'

const PrivacyPolicy = () => {
  return (
    <div>
        <div className={styles.policyHeading}>Privacy Policy</div>
        {policy.map((el, i) =>
            <div key={el.title} className={styles.privacyPolicy}>
                <div className={styles.policyTitle}>{`${i+1}.${el.title}`}</div>    
                <div className={styles.policyDescription}>{el.description}</div>
            </div>    
        )}
    </div>
  )
}

export default PrivacyPolicy