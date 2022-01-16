import styles from "./Note.module.css";
import { Flex } from "@chakra-ui/react";

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

  const fretNumber = () => {
    let fretNumber = 3;
    if (stringIndex === 0) {
      switch (noteIndex) {
        case 3:
          return <span>3</span>;
        case 5:
          return <span>5</span>;
        case 7:
          return <span>7</span>;
        case 9:
          return <span>9</span>;
        case 12:
          return <span>12</span>;
        case 15:
          return <span>15</span>;
        case 17:
          return <span>17</span>;
        default:
          return null;
      }
    }
    return null;
  };

  const getFretNumber = (stringIndex: number, noteIndex: number) => {
    if (stringIndex !== 0) return null;

    switch (noteIndex) {
      case 3:
        return 3;
      case 5:
        return 5;
      case 7:
        return 7;
      case 9:
        return 9;
      case 12:
        return 12;
      case 15:
        return 15;
      case 17:
        return 17;
    }
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
