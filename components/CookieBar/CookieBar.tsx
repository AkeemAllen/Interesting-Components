import React, { useState } from "react";
import styles from "./CookieBar.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const CookieBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <motion.div
      className={styles.container}
      animate={{
        y: isClicked ? 100 : 0,
        opacity: [1, isClicked ? 0 : 1],
      }}
      transition={{
        y: { type: "spring", duration: 1 },
        opacity: { duration: 0.5 },
      }}
    >
      <motion.div className={styles.cookieImage}>
        <Image
          src="/assets/images/cookie.png"
          layout="fixed"
          alt="me"
          width="30"
          height="30"
        />
      </motion.div>
      <p className={styles.message}>
        We use cookies to personalize your site experience and analyze the site
        traffic
      </p>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${styles.declineButton}`}
          onClick={() => setIsClicked(true)}
        >
          Decline
        </button>
        <button
          className={`${styles.button} ${styles.acceptButton}`}
          onClick={() => setIsClicked(true)}
        >
          Accept
        </button>
      </div>
    </motion.div>
  );
};

export default CookieBar;
