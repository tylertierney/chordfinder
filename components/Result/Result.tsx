import { Heading } from "@chakra-ui/react";
import { StringType } from "../String/String";
import {
  reduceNotesFromFretboard,
  determineChord,
} from "../../helperFunctions";
import styles from "./Result.module.css";
import { Text } from "@chakra-ui/react";
import chordDictionary from "../../chords.json";

interface ResultProps {
  fretboardState: StringType[];
}

const Result: React.FC<ResultProps> = ({ fretboardState }) => {
  const reduced = reduceNotesFromFretboard(fretboardState);

  let result = determineChord(chordDictionary, reduced.resultAsFretNums);
  const chordName = result?.name;
  let suffix = result?.suffix;

  if (suffix === "maj") {
    suffix = null;
  }

  return (
    <Heading className={styles.resultHeading} fontSize="3rem">
      <Text color="inherit" as="span">
        {chordName}
      </Text>
      <Text color="inherit" as="span" fontSize="65%" verticalAlign="text-top">
        {suffix}
      </Text>
    </Heading>
  );
};

export default Result;
