import type { NextPage } from "next";
import Head from "next/head";
import Fretboard from "../components/Fretboard/Fretboard";
import Greeting from "../components/Greeting/Greeting";
import Result from "../components/Result/Result";
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting />
      <Fretboard
        fretboardState={fretboardState}
        setFretboardState={setFretboardState}
      />
      <Result currentChord={userSelectedChord} />
      <SmallDisplays
        currentChord={userSelectedChord}
        fretboardState={fretboardState}
        setFretboardState={setFretboardState}
      />
    </>
  );
};

export default Home;
