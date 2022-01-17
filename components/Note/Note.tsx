import styles from "./Note.module.css";
import { Flex } from "@chakra-ui/react";
import { getFretNumber } from "../../helperFunctions";

export interface NoteType {
  name: string;
  value: boolean;
}

interface NoteProps {
  stringIndex: number;
  noteIndex: number;
  active: boolean;
  name: string;
  fretboardState: NoteType[][];
  setFretboardState: Function;
  stringIsMuted: boolean;
  setStringIsMuted: Function;
}

const Note: React.FC<NoteProps> = ({
  stringIndex,
  noteIndex,
  active,
  name,
  fretboardState,
  setFretboardState,
  stringIsMuted,
  setStringIsMuted,
}) => {
  const updateSelectedNotes = (active: boolean) => {
    const copyOfState = [...fretboardState];

    if (stringIsMuted) setStringIsMuted(false);
    copyOfState[stringIndex].forEach((note, idx) => {
      note.value = false;
      if (idx === noteIndex) {
        note.value = !active;
      }
    });

    setFretboardState(copyOfState);
  };

  const useFlatNoteCharacter = (name: string) => {
    if (name.length > 1)
      return (
        <>
          <span className={styles.noteLabel}>{name[0]}</span>
          <span className={styles.noteLabel}>&#9837;</span>
        </>
      );

    return name;
  };

  return (
    <Flex
      className={styles.note}
      borderColor="brand.primary.800"
      onClick={() => updateSelectedNotes(active)}
    >
      <span className={styles.fretNumber}>
        {getFretNumber(stringIndex, noteIndex + 1)}
      </span>
      <div className={styles.string}></div>
      <div
        className={styles.activeIndicator}
        style={{ visibility: active ? "visible" : "hidden" }}
      >
        {useFlatNoteCharacter(name)}
      </div>
    </Flex>
  );
};

export default Note;
