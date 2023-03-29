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
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
    </Head>
  );
};

export default HeadSetup;
