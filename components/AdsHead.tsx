// components/AdsHead.tsx
import Head from 'next/head';

const AdsHead: React.FC = () => (
  <Head>
    <title>Home - Trailerbuzz</title>
    <link rel="icon" href="/favicon.ico" />
    {typeof window !== 'undefined' && (
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7464883274987320"
        crossOrigin="anonymous"
      ></script>
    )}
  </Head>
);

export default AdsHead;

