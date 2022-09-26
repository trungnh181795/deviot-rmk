import { Navbar, Content, Footer } from '../components';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </>
  );
}

export default MyApp;
