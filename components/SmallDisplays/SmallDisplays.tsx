import { Flex } from "@chakra-ui/react";
import SmallFretboard from "./SmallFretboard/SmallFretboard";

interface SmallDisplaysProps {
  chordsToDisplay: any;
}

const SmallDisplays: React.FC<SmallDisplaysProps> = ({ chordsToDisplay }) => {
  if (!chordsToDisplay) {
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

  return (
    <Flex
      align="center"
      width="100%"
      p="0 20px 20px 20px"
      justify="center"
      wrap="wrap"
    >
      {chordsToDisplay}
    </Flex>
  );
};

export default SmallDisplays;
