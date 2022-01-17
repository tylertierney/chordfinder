import Note from "../Note/Note";
import { Flex, Button } from "@chakra-ui/react";
import { NoteType } from "../Note/Note";
import styles from "./String.module.css";
import { CloseIcon } from "@chakra-ui/icons";
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
    // setStringIsMuted(!stringIsMuted);
  };

  return (
    <Flex align="center">
      <Button
        variant="ghost"
        height="30px"
        margin="0 4px"
        padding="0"
        className={styles.muteBtn}
        opacity={stringState.isMuted ? "1" : "0.08"}
        _hover={{ opacity: "1", backgroundColor: "rgb(255, 255, 255, 0.05)" }}
        _focus={{ outline: "none" }}
        onClick={() => muteString(index)}
        name="Mute string"
      >
        <CloseIcon fontSize="0.6rem" />
      </Button>
      {arr}
    </Flex>
  );
};

export default String;
