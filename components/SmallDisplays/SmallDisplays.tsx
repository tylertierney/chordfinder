import { Flex } from "@chakra-ui/react";
import SmallFretboard from "./SmallFretboard/SmallFretboard";
import chordDictionary from "../../chords.json";

interface SmallDisplaysProps {
  chordsToDisplay: any;
  currentChord: any;
}

const SmallDisplays: React.FC<SmallDisplaysProps> = ({
  chordsToDisplay,
  currentChord,
}) => {
  if (!chordsToDisplay || !currentChord) {
    return null;
  }

  chordsToDisplay = chordsToDisplay.positions.map(
    (position: any, index: number) => {
      return (
        <SmallFretboard
          key={index}
          position={position}
          chordKey={chordsToDisplay.key}
          suffix={chordsToDisplay.suffix}
        />
      );
    }
  );

  let currentChordPositions: any = null;

  const chordDictionary2: any = chordDictionary.chords;
  for (let chordKey in chordDictionary2) {
    if (chordKey == undefined || chordKey == null) {
      return null;
    }
    for (let i = 0; i < chordDictionary2[chordKey].length; i++) {
      const current = chordDictionary2[chordKey][i];
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
