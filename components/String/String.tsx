import { useState } from "react";
import Note from "../Note/Note";
import { Flex } from "@chakra-ui/react";
import { NoteType } from "../Note/Note";

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

  return <Flex style={{ display: "flex" }}>{arr}</Flex>;
};

export default String;
