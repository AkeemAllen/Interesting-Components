import { NextPage } from "next";
import ToggleButton from "../components/ToggleButton/ToggleButton";
import styles from "../styles/Home.module.css";

const ToggleButtonPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <ToggleButton />
        </div>
    );
};

export default ToggleButtonPage;