import styles from "./SmallFretboard.module.css";
import { Flex, Heading, Text } from "@chakra-ui/react";
import SmallString from "../SmallString/SmallString";
import { StringType } from "../../String/String";

interface SmallFretboardProps {
  position: any;
  chordKey: string;
  suffix: string;
  fretboardState: StringType[];
  setFretboardState: Function;
}

const SmallFretboard: React.FC<SmallFretboardProps> = ({
  position,
  chordKey,
  suffix,
  fretboardState,
  setFretboardState,
}) => {
  let hasOpenOrMute = false;

  for (let j = 0; j < position.frets.length; j++) {
    if (position.frets[j] === -1 || position.frets[j] === 0) {
      hasOpenOrMute = true;
    }
  }

  const frets = [...position.frets].reverse();

  const strings = frets.map((note: number, index: number) => {
    const numberOfFretsToSpan: number = Math.max(...frets);
    return (
      <SmallString
        key={index}
        stringIndex={index}
        numberOfFretsToSpan={numberOfFretsToSpan}
        baseFret={position.baseFret}
        fretNum={note}
        hasOpenOrMute={hasOpenOrMute}
      />
    );
  });

  let chordSuffix: string | null = suffix;
  if (suffix === "major") {
    chordSuffix = null;
  }

  if (suffix === "minor") {
    chordSuffix = "min";
  }

  const updateMainFretboard = (fretboardState: StringType[]) => {
    const setStringToOpen = (string: StringType) => {
      string.isMuted = false;
      string.notes.forEach((note) => {
        note.value = false;
      });
      return string;
    };

    const setStringToMuted = (string: StringType) => {
      string.isMuted = true;
      string.notes.forEach((note) => {
        note.value = false;
      });
      return string;
    };

    const copyOfState = [...fretboardState];
    const frets = [...position.frets].reverse();

    for (let k = 0; k < frets.length; k++) {
      let fretDecrementor = -2;
      if (frets[k] === 4) fretDecrementor = -2;
      const noteToPlace = frets[k] + position.baseFret + fretDecrementor;
      let string = copyOfState[k];
      if (frets[k] === -1) {
        string = setStringToMuted(string);
      } else if (frets[k] === 0) {
        string = setStringToOpen(string);
      } else {
        string.isMuted = false;
        string.notes.forEach((note, index) => {
          note.value = false;
          if (index === noteToPlace) {
            note.value = true;
          }
        });
      }
    }
    setFretboardState(copyOfState);
  };

  return (
    <Flex
      className={styles.smallFretboardContainer}
      onClick={() => updateMainFretboard(fretboardState)}
    >
      <Heading
        fontSize="1.2rem"
        mb="14px"
        color="var(--secondaryColor)"
        userSelect="none"
      >
        <Text color="inherit" as="span">
          {chordKey}
        </Text>
        <Text color="inherit" as="span" fontSize="65%" verticalAlign="text-top">
          {chordSuffix}
        </Text>
      </Heading>
      {strings}
    </Flex>
  );
};

export default SmallFretboard;
