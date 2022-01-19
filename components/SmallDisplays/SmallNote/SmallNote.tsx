import styles from "./SmallNote.module.css";
import { Flex } from "@chakra-ui/react";
import { determineFretDecoration } from "../../../helperFunctions";

interface SmallNoteProps {
  noteIndex: number;
  fretNum: number;
  stringIndex: number;
  baseFret: number;
}

const SmallNote: React.FC<SmallNoteProps> = ({
  noteIndex,
  fretNum,
  stringIndex,
  baseFret,
}) => {
  let isDecorated = determineFretDecoration(noteIndex);
  if (fretNum === -1) {
    isDecorated = false;
  }

  let active = false;
  if (noteIndex === fretNum + baseFret - 1) {
    active = true;
  }

  return (
    <Flex className={styles.note}>
      <span
        className={styles.fretNumber}
        style={{
          display: stringIndex === 0 ? "initial" : "none",
          visibility: isDecorated ? "visible" : "hidden",
        }}
      >
        {noteIndex}
      </span>
      <div className={styles.string}></div>
      <div
        className={styles.activeIndicator}
        style={{ visibility: active ? "visible" : "hidden" }}
      ></div>
      <div
        className={styles.fretDecorator}
        style={{
          display: isDecorated ? "initial" : "none",
          visibility: stringIndex === 2 ? "visible" : "hidden",
        }}
      ></div>
    </Flex>
  );
};

export default SmallNote;
