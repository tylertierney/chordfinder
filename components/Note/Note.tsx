import styles from "./Note.module.css";
import { Flex } from "@chakra-ui/react";
import {
  determineFretDecoration,
  reduceNotesFromFretboard,
} from "../../helperFunctions";
import { StringType } from "../String/String";
import { useState } from "react";

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
  const [isHovering, setIsHovering] = useState(false);

  const updateSelectedNotes = (active: boolean) => {
    const copyOfState = [...fretboardState];
    const string = copyOfState[stringIndex];

    if (string.isMuted) string.isMuted = false;
    string.notes.forEach((note, idx) => {
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

  const isDecorated = determineFretDecoration(noteIndex + 1);

  return (
    <Flex
      className={styles.note}
      borderColor="brand.primary.800"
      onClick={() => updateSelectedNotes(active)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span
        className={styles.fretNumber}
        style={{
          display: stringIndex === 0 ? "initial" : "none",
          visibility: isDecorated ? "visible" : "hidden",
        }}
      >
        {noteIndex + 1}
      </span>
      <div className={styles.string}></div>
      <div
        className={styles.activeIndicator}
        style={{
          opacity: "0.75",
          backgroundColor: "#dddddd",
          visibility: isHovering ? "visible" : "hidden",
        }}
      >
        {useFlatNoteCharacter(name)}
      </div>
      <div
        className={styles.activeIndicator}
        style={{ visibility: active ? "visible" : "hidden" }}
      >
        {useFlatNoteCharacter(name)}
      </div>
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

export default Note;
