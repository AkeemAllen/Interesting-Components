import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Button from "@mui/material/Button";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
