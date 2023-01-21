import { NextPage } from "next";
import StarButton from "../components/StarButton";
import styles from "../styles/Home.module.css";

const StarButtonPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <StarButton />
        </div>
    );
};

export default StarButtonPage;