import { Flex, Heading } from "@chakra-ui/react";
import { StringType } from "../String/String";
import {
  reduceNotesFromFretboard,
  determineChord,
} from "../../helperFunctions";
import styles from "./Result.module.css";
import { Text } from "@chakra-ui/react";
import chordDictionary from "../../chords.json";
import SmallFretboard from "../SmallDisplays/SmallFretboard/SmallFretboard";
import RelatedChords from "../SmallDisplays/RelatedChords/RelatedChords";

interface ResultProps {
  heading: string;
  currentChord: any;
  fretboardState: StringType[];
  setFretboardState: Function;
}

const Result: React.FC<ResultProps> = ({
  heading,
  currentChord,
  fretboardState,
  setFretboardState,
}) => {
  if (!currentChord) {
    return null;
  }

  const chordName = currentChord?.name;
  let suffix = currentChord?.suffix;
  if (suffix === "major") {
    suffix = null;
  }
  if (suffix === "minor") {
    suffix = "min";
  }

  let currentChordPositions: any = null;

  const chords: any = chordDictionary.chords;
  for (let chordKey in chords) {
    if (chordKey == undefined || chordKey == null) {
      return null;
    }
    for (let i = 0; i < chords[chordKey].length; i++) {
      const current = chords[chordKey][i];
      if (
        current.key === currentChord.name &&
        current.suffix === currentChord.suffix
      ) {
        currentChordPositions = current.positions.map(
          (position: any, index: number) => {
            return (
              <SmallFretboard
                key={index}
                position={position}
                chordKey={current.key}
                suffix={current.suffix}
                fretboardState={fretboardState}
                setFretboardState={setFretboardState}
              />
            );
          }
        );
      }
    }
  }

  return (
    <>
      <Flex
        align="center"
        justify="center"
        className={styles.resultContainer}
        display={!chordName ? "none" : "flex"}
      >
        <Heading
          className={styles.resultHeading}
          fontSize="2.4rem"
          userSelect="none"
        >
          <Text color="inherit" as="span">
            {chordName}
          </Text>
          <Text
            color="inherit"
            as="span"
            fontSize="65%"
            verticalAlign="text-top"
          >
            {suffix}
          </Text>
        </Heading>
      </Flex>

      <div className={styles.headingContainer}>
        <Heading>{heading}</Heading>
        <div className={styles.divider}></div>
      </div>
      <Flex align="center" width="100%" justify="center" wrap="wrap" mb="20px">
        {currentChordPositions}
      </Flex>
      <div className={styles.headingContainer}>
        <Heading>Related</Heading>
        <div className={styles.divider}></div>
      </div>
      <RelatedChords
        display={true}
        currentChord={currentChord}
        fretboardState={fretboardState}
        setFretboardState={setFretboardState}
      />
    </>
  );
};

export default Result;
