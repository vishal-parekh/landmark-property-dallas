import { About, Contact, LandingHero, Navbar, OurServices } from "components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sell your DFW House Now!</title>
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingHero />
      <About />
      <OurServices />
      <Contact />
    </>
  );
}
