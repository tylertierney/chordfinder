import type { NextPage } from "next";
import Head from "next/head";
import Fretboard from "../components/Fretboard/Fretboard";
import Greeting from "../components/Greeting/Greeting";
import Result from "../components/Result/Result";
import { useState } from "react";
import { initialFretboardState } from "../helperFunctions";
import SmallDisplays from "../components/SmallDisplays/SmallDisplays";
import mockData from "../mockData.json";

const Home: NextPage = () => {
  const [fretboardState, setFretboardState] = useState(initialFretboardState);

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
      <Greeting />
      <Fretboard
        fretboardState={fretboardState}
        setFretboardState={setFretboardState}
      />
      <Result fretboardState={fretboardState} />
      <SmallDisplays chordsToDisplay={mockData} />
    </>
  );
};

export default Home;
