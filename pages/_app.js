// pages/_app.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);

    const handleComplete = () => {
      // small delay makes fade feel smoother (more premium)
      setTimeout(() => setLoading(false), 60);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div className={loading ? "page page-fade-out" : "page page-fade-in"}>
      <Component {...pageProps} />
    </div>
  );
}