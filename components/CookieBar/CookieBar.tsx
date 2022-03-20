import React from "react";
import styles from "./CookieBar.module.css";
import Image from "next/image";

const CookieBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cookieImage}>
        <Image
          src="/assets/images/cookie.png"
          layout="fixed"
          alt="me"
          width="30"
          height="30"
        />
      </div>
      <p className={styles.message}>
        We use cookies to personalize your site experience and analyze the site
        traffic
      </p>
      <div className={styles.buttonContainer}>
        <button className={styles.declineButton}>Decline</button>
        <button className={styles.acceptButton}>Accept</button>
      </div>
    </div>
  );
};

export default CookieBar;
