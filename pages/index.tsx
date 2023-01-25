import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navigationContainer}>
        <Link href={"/cookiebar"}>
          <Button disableElevation variant="contained">
            Cookie Bar Component
          </Button>
        </Link>
        <Link href={"/starbutton"}>
          <Button disableElevation variant="contained">
            Star Button Component
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
