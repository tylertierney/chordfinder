import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { StringType } from "../../String/String";
import styles from "./RandomChords.module.css";
import chordDictionary from "../../../chords.json";
import { BiShuffle } from "react-icons/bi";
import { getRandomChords } from "../../../helperFunctions";
import SmallFretboard from "../SmallFretboard/SmallFretboard";
import { useState, useEffect } from "react";

interface RandomChordsProps {
  fretboardState: StringType[];
  setFretboardState: Function;
}

const RandomChords: React.FC<RandomChordsProps> = ({
  fretboardState,
  setFretboardState,
}) => {
  const [randomChords, setRandomChords] = useState<any>([]);

  useEffect(() => {
    setRandomChords(getRandomChords(chordDictionary));
  }, []);

  const randomChordsArr = randomChords.map((chord: any, index: number) => {
    return (
      <SmallFretboard
        key={index}
        position={chord.position}
        chordKey={chord.key}
        suffix={chord.suffix}
        fretboardState={fretboardState}
        setFretboardState={setFretboardState}
      />
    );
  });

  return (
    <>
      <Flex w="100%" justify="flex-end">
        <Button
          bgColor="var(--primaryColor)"
          variant="unstyled"
          _focus={{ outline: "none" }}
          className="resetBtn"
          height="32px"
          minW="90px"
          display="flex"
          onClick={() => setRandomChords(getRandomChords(chordDictionary))}
        >
          Shuffle&nbsp;
          <BiShuffle />
        </Button>
      </Flex>
      <Flex align="center" justify="center" className={styles.titleContainer}>
        <Heading
          className={styles.resultHeading}
          fontSize="2rem"
          userSelect="none"
        >
          <Text color="inherit" as="span">
            Or try these...
          </Text>
        </Heading>
      </Flex>
      <div className={styles.headingContainer}>
        <Heading>Random</Heading>
        <div className={styles.divider}></div>
      </div>
      <Flex align="center" width="100%" justify="center" wrap="wrap" mb="20px">
        {randomChordsArr}
      </Flex>
    </>
  );
};

export default RandomChords;
