import { AnimatePresence, motion } from "framer-motion"

const FadeInWhenVisible = ({ children,  className, delay, x, y }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
                hidden: { opacity: 0, x, y },
                visible: { 
                    opacity: 1, 
                    x: 0,
                    y: 0, 
                    transition: {
                        delay: delay,
                        duration: 0.6
                    } 
                }
            }} 
            className={className}
        >
            {children}
        </motion.div>
    )
}

const MotionLetter = ({ children, className, menuOpen, stagger = 0.12 }) => {
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
        }
    }
    }
    const letter = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    return (
        <AnimatePresence>
            <motion.div
                animate={menuOpen ? "visible" : "hidden"}
                variants={sentence}
                className={className}
            >
                {children.split("").map((char, index) => 
                    <motion.span
                        key={`${char}-${index}`}
                        variants={letter}
                    >
                        {char}
                    </motion.span>
                )}
            </motion.div>
         </AnimatePresence>
    )
}

export { FadeInWhenVisible, MotionLetter }