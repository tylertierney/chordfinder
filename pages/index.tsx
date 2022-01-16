import type { NextPage } from "next";
import Head from "next/head";
import Fretboard from "../components/Fretboard/Fretboard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chord Finder</title>
        <meta
          name="description"
          content="Select notes to identify guitar chords"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fretboard />
    </>
  );
};

export default Home;
