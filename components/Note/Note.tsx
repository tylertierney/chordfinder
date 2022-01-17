import styles from "./Note.module.css";
import { Flex } from "@chakra-ui/react";
import { getFretNumber, getNotes } from "../../helperFunctions";
import { StringType } from "../String/String";

export interface NoteType {
  name: string;
  value: boolean;
}

interface NoteProps {
  stringIndex: number;
  noteIndex: number;
  active: boolean;
  name: string;
  fretboardState: StringType[];
  setFretboardState: Function;
}

const Note: React.FC<NoteProps> = ({
  stringIndex,
  noteIndex,
  active,
  name,
  fretboardState,
  setFretboardState,
}) => {
  const updateSelectedNotes = (active: boolean) => {
    const copyOfState = [...fretboardState];

    if (copyOfState[stringIndex].isMuted)
      copyOfState[stringIndex].isMuted = false;
    copyOfState[stringIndex].notes.forEach((note, idx) => {
      note.value = false;
      if (idx === noteIndex) {
        note.value = !active;
      }
    });

    setFretboardState(copyOfState);
    console.log(getNotes(copyOfState));
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
