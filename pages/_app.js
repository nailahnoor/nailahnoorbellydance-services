// pages/_app.js
import '../styles/global.css'; // import all global CSS here

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}