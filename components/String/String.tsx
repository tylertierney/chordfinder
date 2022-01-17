import Note from "../Note/Note";
import { Flex, Button } from "@chakra-ui/react";
import { NoteType } from "../Note/Note";
import styles from "./String.module.css";
import { CloseIcon } from "@chakra-ui/icons";

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
      />
    );
  });

  return (
    <Flex align="center">
      <Button
        variant="ghost"
        height="30px"
        margin="0 8px"
        padding="0"
        className={styles.muteBtn}
        opacity="0.4"
        _hover={{ opacity: "1", border: "2px solid white" }}
        _focus={{ outline: "none" }}
      >
        <CloseIcon fontSize="0.6rem" />
      </Button>
      {arr}
    </Flex>
  );
};

export default String;
