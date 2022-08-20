import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/layout/layout";
import { NotificationContextProvider } from "../store/notification-context";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width , initial-scale=1"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
