import { motion } from "framer-motion";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import styles from "./StarButton.module.css";

const StarButton = () => {
    const [count, setCount] = useState(23);
    const [isStarred, setIsStarred] = useState(false);
    const [hover, setHover] = useState(false);

    const handleClick = () => {
        if (isStarred) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        setIsStarred(!isStarred);
    };

    return (
        <motion.button
            className={styles.container}
            onClick={handleClick}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
        >
            <div className={styles.left}>
                {!isStarred && (
                    <motion.div
                        animate={{ scale: hover ? 1.2 : 1 }}
                        className={styles.star}
                    >
                        <AiFillStar
                            size={30}
                            color={hover ? "#ffff2e" : "#797a83"}
                        />
                    </motion.div>
                )}
                {!isStarred && (
                    <motion.p
                        animate={{ opacity: [0, 1], x: [-40, 0] }}
                        transition={{ duration: 0.3 }}
                    >
                        Star
                    </motion.p>
                )}
                {isStarred && (
                    <motion.p
                        animate={{ opacity: [0, 1], x: [40, 0] }}
                        transition={{ duration: 0.3 }}
                    >
                        Starred
                    </motion.p>
                )}
            </div>
            {/* <div> */}
            {!isStarred && (
                <motion.div
                    animate={{ opacity: [0, 1], y: [-30, 0] }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className={`${styles.right}, ${
                        isStarred && styles.highlightColor
                    }`}
                >
                    {count}
                </motion.div>
            )}
            {isStarred && (
                <motion.div
                    animate={{ opacity: [0, 1], y: [30, 0] }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className={`${styles.right}, ${
                        isStarred && styles.highlightColor
                    }`}
                >
                    {count}
                </motion.div>
            )}
            {/* </div> */}
        </motion.button>
    );
};

export default StarButton;
