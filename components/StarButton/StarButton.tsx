import { useState } from "react";
import styles from "./StarButton.module.css";
import { AiFillStar } from "react-icons/ai";

const StarButton = () => {
    const [count, setCount] = useState(23);
    const [isStarred, setIsStarred] = useState(false);

    const handleClick = () => {
        if (isStarred) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        setIsStarred(!isStarred);
    };

    return (
        <button className={styles.container} onClick={handleClick}>
            <div className={styles.left}>
                {!isStarred && <AiFillStar size={30} color={"#797a83"} />}
                <p>{isStarred ? "Starred" : "Star"}</p>
            </div>
            <div
                className={`${styles.right}, ${
                    isStarred && styles.highlightColor
                }`}
            >
                {count}
            </div>
        </button>
    );
};

export default StarButton;
