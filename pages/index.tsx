import Head from 'next/head';
import App from './app';

const Index = () => {
  return (
    <>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4774589443305457" crossOrigin="anonymous"></script>
      </Head>
      <App />
      <div className="flag" dangerouslySetInnerHTML={{__html:"<!--FLAG IS COMMENT-->"}}/>
    </>
  );
};

export default Index;
