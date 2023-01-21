import { NextPage } from "next";
import CookieBar from "../components/CookieBar";
import styles from "../styles/Home.module.css";

const CookieBarPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <CookieBar />
        </div>
    );
};

export default CookieBarPage;