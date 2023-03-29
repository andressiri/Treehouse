import Head from "next/head";

const HeadSetup = () => {
  return (
    <Head key="customHeadComponent">
      <title>Treehouse</title>
      <meta name="description" content="Treehouse app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadSetup;
