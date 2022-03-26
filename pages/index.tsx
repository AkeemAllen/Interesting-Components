import type { NextPage } from "next";
import CookieBar from "../components/CookieBar";
import StarButton from "../components/StarButton";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            {/* <StarButton /> */}
            <CookieBar />
        </div>
    );
};

export default Home;
