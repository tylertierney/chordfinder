import Note from "../Note/Note";
import { Flex, Button } from "@chakra-ui/react";
import { NoteType } from "../Note/Note";
import styles from "./String.module.css";
import { CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface StringProps {
  index: number;
  stringState: NoteType[];
  fretboardState: NoteType[][];
  setFretboardState: Function;
}

const String: React.FC<StringProps> = ({
  index,
  stringState,
  fretboardState,
  setFretboardState,
}) => {
  const [stringIsMuted, setStringIsMuted] = useState(false);

  const arr = stringState.map((note, idx) => {
    return (
      <Note
        key={idx}
        stringIndex={index}
        noteIndex={idx}
        active={note.value}
        name={note.name}
        fretboardState={fretboardState}
        setFretboardState={setFretboardState}
        stringIsMuted={stringIsMuted}
        setStringIsMuted={setStringIsMuted}
      />
    );
  });

  const muteString = (stringIndex: number) => {
    let copyOfState = [...fretboardState];
    copyOfState[stringIndex].forEach((note) => (note.value = false));
    setFretboardState(copyOfState);
    setStringIsMuted(!stringIsMuted);
  };

  return (
    <Flex align="center">
      <Button
        variant="ghost"
        height="30px"
        margin="0 4px"
        padding="0"
        className={styles.muteBtn}
        opacity={stringIsMuted ? "1" : "0.08"}
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
