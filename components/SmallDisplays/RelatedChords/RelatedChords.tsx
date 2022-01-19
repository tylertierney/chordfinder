import styles from "../SmallDisplays.module.css";

import { Flex, Heading } from "@chakra-ui/react";

import { calculateRelatedChords } from "../../../helperFunctions";
import chordDictionary from "../../../chords.json";
import SmallFretboard from "../SmallFretboard/SmallFretboard";
import { StringType } from "../../String/String";

interface RelatedChordsProps {
  display: boolean;
  currentChord: any;
  fretboardState: StringType[];
  setFretboardState: Function;
}

const RelatedChords: React.FC<RelatedChordsProps> = ({
  display,
  currentChord,
  fretboardState,
  setFretboardState,
}) => {
  if (!display) return null;

  const relatedChords = calculateRelatedChords(chordDictionary, currentChord);

  const relatedChordsPositions = relatedChords?.map((relatedChord) => {
    return relatedChord?.positions?.map((position: any, index: number) => {
      return (
        <SmallFretboard
          key={index}
          position={position}
          chordKey={relatedChord.key}
          suffix={relatedChord.suffix}
          fretboardState={fretboardState}
          setFretboardState={setFretboardState}
        />
      );
    });
  });

  return (
    <>
      <div className={styles.headingContainer}>
        <Heading className={styles.heading}>Related</Heading>
        <div className={styles.divider}></div>
      </div>
      <Flex align="center" width="100%" justify="center" wrap="wrap" mb="20px">
        {relatedChordsPositions}
      </Flex>
    </>
  );
};

export default RelatedChords;
