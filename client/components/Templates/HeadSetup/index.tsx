import Head from "next/head";

const HeadSetup = () => {
  return (
    <Head key="customHeadComponent">
      <title>Treehouse</title>
      <meta
        name="description"
        content="Treehouse: An app developed by Andrés Siri to solve the Rather Labs challenge"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadSetup;
