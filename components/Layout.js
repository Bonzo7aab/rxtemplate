import { useState } from "react"
import Link from "next/link"
import styles from '../styles/Layout.module.sass'
import { AiOutlineMenu, AiOutlineClose, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai'
import { motion } from "framer-motion"
import { MotionLetter } from '../helpers/framer'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const variants = {
    open: { opacity: 1, top: 75 },
    closed: { opacity: 0, top: "-100%" },
  }

  return (
    <div  className={styles.header}>
      <div className={styles.hamburger}>
        {menuOpen ? <AiOutlineClose onClick={() => setMenuOpen(false)}/> : <AiOutlineMenu onClick={() => setMenuOpen(true)}/>}
      </div>
      <motion.div
        animate={menuOpen ? "open" : "closed"}
        variants={variants}
        className={styles.menu}
      >
        <ul>
          <li><Link href='/rooms'><><MotionLetter menuOpen={menuOpen}>Rooms</MotionLetter></></Link></li>
          <li><Link href='/activities'><><MotionLetter menuOpen={menuOpen}>Activities</MotionLetter></></Link></li>
          <li><Link href='/wellness'><><MotionLetter menuOpen={menuOpen}>Wellness</MotionLetter></></Link></li>
          <li><Link href='/events'><><MotionLetter menuOpen={menuOpen}>Events</MotionLetter></></Link></li>
          <li><Link href='/contact'><><MotionLetter menuOpen={menuOpen}>Contact</MotionLetter></></Link></li>
        </ul>
        <span className={styles.menuText}><MotionLetter menuOpen={menuOpen} stagger={0.02}>&#8220;We truly hope you’ll enjoy your stay with us and leave ElWell viewing your own world in a whole new light&#8221;</MotionLetter></span>
      </motion.div>
      <Link href='/'>
        <span className={styles.title}>ElWell</span>
      </Link>
      <div className={styles.bookNow}>
        <div>Book now</div>
      </div>
    </div>
  )}

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.bottomSection}>
      <div className={styles.bottomThought}>
        <span>We use therapies from across the globe — hand-picked for their efficacy and relaxing, non-invasive nature — to build a wellness story with each guest, and improve their mental and physiological function regardless of age or malady</span>
      </div>
      <div className={styles.bottomMenu}>
        <ul>
          <li><Link href='/news'>News</Link></li>
          <li><Link href='/faq'>F.A.Q</Link></li>
          <li><Link href='/careers'>Careers</Link></li>
          <li><Link href='/privacy-policy'>Privacy Policy</Link></li>
          <li><Link href='/contact'>Contact Us</Link></li>
        </ul>
      </div>
    </div>
    <div className={styles.socialLinks}>
      <ul>
        <li><Link href='/'><div><AiFillFacebook /><span>Facebook</span></div></Link></li>
        <li><Link href='/'><div><AiFillInstagram /><span>Instagram</span></div></Link></li>
        <li><Link href='/'><div><AiFillTwitterSquare /><span>Twitter</span></div></Link></li>
        <li><Link href='/'><div><AiFillLinkedin /><span>LinkedIn</span></div></Link></li>
      </ul>
    </div>
  </div>
)

function Layout({children}) {
  return (
    <>
        <Header />
          {children}
        <Footer />
    </>
  )
}

export default Layout