import { Flex } from "@chakra-ui/react";
import SmallNote from "../SmallNote/SmallNote";
import styles from "./SmallString.module.css";

interface SmallStringProps {
  stringIndex: number;
  numberOfFretsToSpan: number;
  baseFret: number;
  fretNum: number;
}

const SmallString: React.FC<SmallStringProps> = ({
  stringIndex,
  numberOfFretsToSpan,
  baseFret,
  fretNum,
}) => {
  const arr = new Array(numberOfFretsToSpan).fill(fretNum);

  const notes = arr.map((fretNum: number, index: number) => {
    return (
      <SmallNote
        key={index}
        noteIndex={index + baseFret}
        stringIndex={stringIndex}
        fretNum={fretNum}
        baseFret={baseFret}
      />
    );
  });

  return (
    <>
      <Flex>{notes}</Flex>
    </>
  );
};

export default SmallString;
