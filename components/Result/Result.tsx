import { Flex, Heading } from "@chakra-ui/react";
import { StringType } from "../String/String";
import {
  reduceNotesFromFretboard,
  determineChord,
} from "../../helperFunctions";
import styles from "./Result.module.css";
import { Text } from "@chakra-ui/react";
import chordDictionary from "../../chords.json";

interface ResultProps {
  currentChord: any;
}

const Result: React.FC<ResultProps> = ({ currentChord }) => {
  const chordName = currentChord?.name;
  let suffix = currentChord?.suffix;

  if (suffix === "major") {
    suffix = null;
  }

  if (suffix === "minor") {
    suffix = "min";
  }

  return (
    <Flex
      align="center"
      justify="center"
      className={styles.resultContainer}
      display={!chordName ? "none" : "flex"}
    >
      <Heading
        className={styles.resultHeading}
        fontSize="3rem"
        userSelect="none"
      >
        <Text color="inherit" as="span">
          {chordName}
        </Text>
        <Text color="inherit" as="span" fontSize="65%" verticalAlign="text-top">
          {suffix}
        </Text>
      </Heading>
    </Flex>
  );
};

export default Result;
