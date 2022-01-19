import { Flex } from "@chakra-ui/react";
import SmallNote from "../SmallNote/SmallNote";
import styles from "./SmallString.module.css";
import { CloseIcon } from "@chakra-ui/icons";
import { BiCircle } from "react-icons/bi";

interface SmallStringProps {
  stringIndex: number;
  numberOfFretsToSpan: number;
  baseFret: number;
  fretNum: number;
  hasOpenOrMute: boolean;
}

const SmallString: React.FC<SmallStringProps> = ({
  stringIndex,
  numberOfFretsToSpan,
  baseFret,
  fretNum,
  hasOpenOrMute,
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

  let openOrMuteIcon = null;
  if (fretNum === -1) {
    openOrMuteIcon = <CloseIcon fontSize="0.5rem" />;
  }
  if (fretNum === 0) {
    openOrMuteIcon = <BiCircle fontSize="0.7rem" />;
  }

  return (
    <Flex justify="center" align="center" userSelect="none">
      {hasOpenOrMute ? (
        <Flex minW="14px" maxW="14px">
          {openOrMuteIcon}
        </Flex>
      ) : null}
      {notes}
    </Flex>
  );
};

export default SmallString;
