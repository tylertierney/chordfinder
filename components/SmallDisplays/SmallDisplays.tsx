import { Divider, Flex, Heading } from "@chakra-ui/react";
import SmallFretboard from "./SmallFretboard/SmallFretboard";
import chordDictionary from "../../chords.json";
import { StringType } from "../String/String";
import styles from "./SmallDisplays.module.css";
import Result from "../Result/Result";
import { calculateRelatedChords } from "../../helperFunctions";

interface SmallDisplaysProps {
  type: string;
  heading: string;
  currentChord: any;
  fretboardState: StringType[];
  setFretboardState: Function;
}

const SmallDisplays: React.FC<SmallDisplaysProps> = ({
  type,
  heading,
  currentChord,
  fretboardState,
  setFretboardState,
}) => {
  if (!currentChord) {
    return null;
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

  console.log(calculateRelatedChords(chordDictionary, currentChord));

  const relatedChords = calculateRelatedChords(chordDictionary, currentChord);

  // const relatedChords = relatedChord?.positions?.map(
  //   (position: any, index: number) => {
  //     return (
  //       <SmallFretboard
  //         key={index}
  //         position={position}
  //         chordKey={relatedChord.key}
  //         suffix={relatedChord.suffix}
  //         fretboardState={fretboardState}
  //         setFretboardState={setFretboardState}
  //       />
  //     );
  //   }
  // );

  const relatedChordsPositions = relatedChords?.map((relatedChord) => {
    // if (relatedChord == null || relatedChord == undefined) return null;
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
    <Flex direction="column" className={styles.smallDisplaysContainer}>
      <div style={{ display: type === "result" ? "initial" : "none" }}>
        <Result currentChord={currentChord} />
      </div>
      <Heading className={styles.heading}>{heading}</Heading>
      <div className={styles.divider}></div>

      <Flex align="center" width="100%" justify="center" wrap="wrap">
        {currentChordPositions}
      </Flex>
      <div style={{ display: type === "result" ? "initial" : "none" }}>
        <Heading className={styles.heading}>Related</Heading>
        <div className={styles.divider}></div>

        <Flex align="center" width="100%" justify="center" wrap="wrap">
          {relatedChordsPositions}
        </Flex>
      </div>
    </Flex>
  );
};

export default SmallDisplays;
