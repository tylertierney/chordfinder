import styles from "./SmallFretboard.module.css";
import { Flex, Heading, Text } from "@chakra-ui/react";
import SmallString from "../SmallString/SmallString";

interface SmallFretboardProps {
  position: any;
  chordKey: string;
  suffix: string;
}

const SmallFretboard: React.FC<SmallFretboardProps> = ({
  position,
  chordKey,
  suffix,
}) => {
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
      />
    );
  });

  let chordSuffix: string | null = suffix;
  if (suffix === "major") {
    chordSuffix = null;
  }

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      className={styles.smallFretboardContainer}
    >
      <Heading fontSize="1.2rem" mb="14px" color="var(--secondaryColor)">
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
