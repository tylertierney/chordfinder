import type { NextPage } from "next";
import Head from "next/head";
import Fretboard from "../components/Fretboard/Fretboard";
import Greeting from "../components/Greeting/Greeting";
import { useState } from "react";
import { initialFretboardState } from "../helperFunctions";
import SmallDisplays from "../components/SmallDisplays/SmallDisplays";
import { reduceNotesFromFretboard, determineChord } from "../helperFunctions";
import chordDictionary from "../chords.json";

const Home: NextPage = () => {
  const [fretboardState, setFretboardState] = useState(initialFretboardState);

  const reducedNotesFromFretboard = reduceNotesFromFretboard(fretboardState);

  let userSelectedChord: any = determineChord(
    chordDictionary,
    reducedNotesFromFretboard.resultAsFretNums
  );

  return (
    <>
      <Head>
        <title>Chord Finder</title>
        <meta
          name="description"
          content="Select notes to identify guitar chords"
        />
        <link rel="icon" href="/chordfinder_logo_16x16.png" />
      </Head>
      <Greeting />
      <Fretboard
        fretboardState={fretboardState}
        setFretboardState={setFretboardState}
      />

      {userSelectedChord && (
        <SmallDisplays
          type="result"
          heading="Positions"
          currentChord={userSelectedChord}
          fretboardState={fretboardState}
          setFretboardState={setFretboardState}
        />
      )}
      <SmallDisplays
        type="random"
        heading="Random"
        currentChord={userSelectedChord}
        fretboardState={fretboardState}
        setFretboardState={setFretboardState}
      />
    </>
  );
};

export default Home;
