import { Heading } from "@chakra-ui/react";
import { StringType } from "../String/String";
import {
  reduceNotesFromFretboard,
  determineChord,
} from "../../helperFunctions";
import styles from "./Result.module.css";
import { Text } from "@chakra-ui/react";

interface ResultProps {
  fretboardState: StringType[];
}

const Result: React.FC<ResultProps> = ({ fretboardState }) => {
  const reduced = reduceNotesFromFretboard(fretboardState);

  let result = determineChord(reduced);

  const replaceSpecialCharacters = (result: string | undefined) => {
    if (!result) return null;

    console.log(result);

    let root = (
      <Text as="span" color="inherit">
        {result[0]}
      </Text>
    );
    let flatOrSharp;
    let majorOrMinor;
    let number;

    if (result[1] === "b") {
      flatOrSharp = (
        <Text as="span" color="inherit">
          &#9837;
        </Text>
      );
    }
    if (result[1] === "s") {
      flatOrSharp = (
        <Text as="span" color="inherit">
          &#9839;
        </Text>
      );
    }

    if (result.includes("maj")) {
      majorOrMinor = (
        <Text as="span" fontSize="75%" color="inherit">
          maj
        </Text>
      );
    }

    if (result.includes("min")) {
      majorOrMinor = (
        <Text as="span" fontSize="75%" color="inherit">
          min
        </Text>
      );
    }

    if (result.includes("6")) {
      number = (
        <Text as="span" color="inherit">
          6
        </Text>
      );
    }

    if (result.includes("7")) {
      number = (
        <Text as="span" color="inherit">
          7
        </Text>
      );
    }
    if (result.includes("9")) {
      number = (
        <Text as="span" color="inherit">
          9
        </Text>
      );
    }

    return (
      <>
        {root}
        {flatOrSharp}
        {majorOrMinor}
        {number}
      </>
    );
  };

  return (
    <Heading className={styles.resultHeading} fontSize="3rem">
      {replaceSpecialCharacters(result)}
    </Heading>
  );
};

export default Result;
