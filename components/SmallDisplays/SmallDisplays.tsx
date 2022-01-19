import { Flex } from "@chakra-ui/react";
import SmallFretboard from "./SmallFretboard/SmallFretboard";
import chordDictionary from "../../chords.json";
import { StringType } from "../String/String";

interface SmallDisplaysProps {
  currentChord: any;
  fretboardState: StringType[];
  setFretboardState: Function;
}

const SmallDisplays: React.FC<SmallDisplaysProps> = ({
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

  return (
    <Flex
      align="center"
      width="100%"
      p="0 20px 20px 20px"
      justify="center"
      wrap="wrap"
    >
      {currentChordPositions}
    </Flex>
  );
};

export default SmallDisplays;
