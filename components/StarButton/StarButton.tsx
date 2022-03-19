import { forwardRef, useState } from "react";
import styles from "./StarButton.module.css";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";

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
                        animate={{ scale: hover ? 1.5 : 1 }}
                        className={styles.star}
                    >
                        <AiFillStar
                            size={30}
                            color={hover ? "#f5f3a1" : "#797a83"}
                        />
                    </motion.div>
                )}
                <p>{isStarred ? "Starred" : "Star"}</p>
            </div>
            <motion.div>
                <div
                    className={`${styles.right}, ${
                        isStarred && styles.highlightColor
                    }`}
                >
                    {count}
                </div>
            </motion.div>
        </motion.button>
    );
};

export default StarButton;
