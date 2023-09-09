import { About, Contact, Main, Navbar, OurServices } from "components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Sell your DFW House Now!</title>
          <link rel="favicon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Main />
        <About />
        <OurServices />
        <Contact />
      </div>
    </>
  );
}
