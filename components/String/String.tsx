import Note from "../Note/Note";
import { Flex, Button } from "@chakra-ui/react";
import { NoteType } from "../Note/Note";
import styles from "./String.module.css";
import { CloseIcon } from "@chakra-ui/icons";
import { BiCircle } from "react-icons/bi";
import { useState } from "react";

export interface StringType {
  name: string;
  isMuted: boolean;
  notes: NoteType[];
}

interface StringProps {
  index: number;
  stringState: StringType;
  fretboardState: StringType[];
  setFretboardState: Function;
}

const String: React.FC<StringProps> = ({
  index,
  stringState,
  fretboardState,
  setFretboardState,
}) => {
  const arr = stringState.notes.map((note, idx) => {
    return (
      <Note
        key={idx}
        stringIndex={index}
        noteIndex={idx}
        active={note.value}
        name={note.name}
        fretboardState={fretboardState}
        setFretboardState={setFretboardState}
      />
    );
  });

  const muteString = (stringIndex: number) => {
    let copyOfState = [...fretboardState];
    copyOfState[stringIndex].isMuted = !copyOfState[stringIndex].isMuted;
    copyOfState[stringIndex].notes.forEach((note) => (note.value = false));
    setFretboardState(copyOfState);
  };

  let hasNoteSelected = false;

  for (let i = 0; i < stringState.notes.length; i++) {
    if (stringState.notes[i].value === true) {
      hasNoteSelected = true;
    }
  }

  return (
    <Flex align="center">
      <Flex className={styles.muteBtnContainer} margin="0 4px">
        <Button
          variant="ghost"
          height="30px"
          padding="0"
          className={styles.muteBtn}
          opacity={hasNoteSelected ? "0" : "1"}
          _hover={{ opacity: "1", backgroundColor: "rgb(255, 255, 255, 0.05)" }}
          _focus={{ outline: "none" }}
          onClick={() => muteString(index)}
          name="Mute string"
          position="relative"
        >
          {stringState.isMuted ? <CloseIcon fontSize="0.6rem" /> : <BiCircle />}
        </Button>
        <Flex
          className={styles.muteBtnContainer}
          height="100%"
          width="100%"
          position="absolute"
          transform="translate(0, -100%)"
          display={index === 0 ? "initial" : "none"}
        />
      </Flex>

      {arr}
    </Flex>
  );
};

export default String;
