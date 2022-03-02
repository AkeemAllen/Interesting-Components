import type { NextPage } from "next";
import StarButton from "../components/StarButton";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <StarButton />
        </div>
    );
};

export default Home;
