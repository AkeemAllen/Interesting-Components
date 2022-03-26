import React, { useState } from "react";
import styles from "./CookieBar.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const CookieBar = () => {
    const [isDeclined, setIsDeclined] = useState(false);
    return (
        <motion.div
            className={styles.container}
            animate={{
                y: isDeclined ? 100 : 0,
                opacity: [1, isDeclined ? 0 : 1],
            }}
            transition={{
                y: { type: "spring", duration: 1 },
                opacity: { duration: 0.5 },
            }}
        >
            <motion.div
                className={styles.cookieImage}
                // animate={{ x: [null, 20, 10, 0] }}
                // transition={{ duration: 0.3 }}
            >
                <Image
                    src="/assets/images/cookie.png"
                    layout="fixed"
                    alt="me"
                    width="30"
                    height="30"
                />
            </motion.div>
            <p className={styles.message}>
                We use cookies to personalize your site experience and analyze
                the site traffic
            </p>
            <div className={styles.buttonContainer}>
                <button
                    className={`${styles.button} ${styles.declineButton}`}
                    onClick={() => setIsDeclined(true)}
                >
                    Decline
                </button>
                <button className={`${styles.button} ${styles.acceptButton}`}>
                    Accept
                </button>
            </div>
        </motion.div>
    );
};

export default CookieBar;
