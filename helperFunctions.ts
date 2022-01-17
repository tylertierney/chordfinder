import { NoteType } from "./components/Note/Note";
import { StringType } from "./components/String/String";

export const initialFretboardState = [
  {
    name: "E",
    isMuted: false,
    notes: [
      { name: "F", value: false },
      { name: "Gb", value: false },
      { name: "G", value: false },
      { name: "Ab", value: false },
      { name: "A", value: false },
      { name: "Bb", value: false },
      { name: "B", value: false },
      { name: "C", value: false },
      { name: "Db", value: false },
      { name: "D", value: false },
      { name: "Eb", value: false },
      { name: "E", value: false },
      { name: "F", value: false },
      { name: "Gb", value: false },
      { name: "G", value: false },
      { name: "Ab", value: false },
      { name: "A", value: false },
      { name: "Bb", value: false },
      { name: "B", value: false },
      { name: "C", value: false },
      { name: "Db", value: false },
    ],
  },
  {
    name: "B",
    isMuted: false,
    notes: [
      { name: "C", value: false },
      { name: "Db", value: false },
      { name: "D", value: false },
      { name: "Eb", value: false },
      { name: "E", value: false },
      { name: "F", value: false },
      { name: "Gb", value: false },
      { name: "G", value: false },
      { name: "Ab", value: false },
      { name: "A", value: false },
      { name: "Bb", value: false },
      { name: "B", value: false },
      { name: "C", value: false },
      { name: "Db", value: false },
      { name: "D", value: false },
      { name: "Eb", value: false },
      { name: "E", value: false },
      { name: "F", value: false },
      { name: "Gb", value: false },
      { name: "G", value: false },
      { name: "Ab", value: false },
    ],
  },
  {
    name: "G",
    isMuted: false,
    notes: [
      { name: "Ab", value: false },
      { name: "A", value: false },
      { name: "Bb", value: false },
      { name: "B", value: false },
      { name: "C", value: false },
      { name: "Db", value: false },
      { name: "D", value: false },
      { name: "Eb", value: false },
      { name: "E", value: false },
      { name: "F", value: false },
      { name: "Gb", value: false },
      { name: "G", value: false },
      { name: "Gb", value: false },
      { name: "G", value: false },
      { name: "Ab", value: false },
      { name: "A", value: false },
      { name: "Bb", value: false },
      { name: "B", value: false },
      { name: "C", value: false },
      { name: "Db", value: false },
      { name: "D", value: false },
    ],
  },
  {
    name: "D",
    isMuted: false,
    notes: [
      { name: "Eb", value: false },
      { name: "E", value: false },
      { name: "F", value: false },
      { name: "Gb", value: false },
      { name: "G", value: false },
      { name: "Ab", value: false },
      { name: "A", value: false },
      { name: "Bb", value: false },
      { name: "B", value: false },
      { name: "C", value: false },
      { name: "Db", value: false },
      { name: "D", value: false },
      { name: "Eb", value: false },
      { name: "E", value: false },
      { name: "F", value: false },
      { name: "Gb", value: false },
      { name: "G", value: false },
      { name: "Ab", value: false },
      { name: "A", value: false },
      { name: "Bb", value: false },
      { name: "B", value: false },
    ],
  },
  {
    name: "A",
    isMuted: false,
    notes: [
      { name: "Bb", value: false },
      { name: "B", value: false },
      { name: "C", value: false },
      { name: "Db", value: false },
      { name: "D", value: false },
      { name: "Eb", value: false },
      { name: "E", value: false },
      { name: "F", value: false },
      { name: "Gb", value: false },
      { name: "G", value: false },
      { name: "Ab", value: false },
      { name: "A", value: false },
      { name: "Bb", value: false },
      { name: "B", value: false },
      { name: "C", value: false },
      { name: "Db", value: false },
      { name: "D", value: false },
      { name: "Eb", value: false },
      { name: "E", value: false },
      { name: "F", value: false },
      { name: "Gb", value: false },
    ],
  },
  {
    name: "E",
    isMuted: false,
    notes: [
      { name: "F", value: false },
      { name: "Gb", value: false },
      { name: "G", value: false },
      { name: "Ab", value: false },
      { name: "A", value: false },
      { name: "Bb", value: false },
      { name: "B", value: false },
      { name: "C", value: false },
      { name: "Db", value: false },
      { name: "D", value: false },
      { name: "Eb", value: false },
      { name: "E", value: false },
      { name: "F", value: false },
      { name: "Gb", value: false },
      { name: "G", value: false },
      { name: "Ab", value: false },
      { name: "A", value: false },
      { name: "Bb", value: false },
      { name: "B", value: false },
      { name: "C", value: false },
      { name: "Db", value: false },
    ],
  },
];

export const getFretNumber = (stringIndex: number, noteIndex: number) => {
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
    case 19:
      return 19;
    case 21:
      return 21;
    case 23:
      return 23;
  }
};

export const getNotes = (fretboardState: StringType[]) => {
  const result = [];
  for (let i = 0; i < fretboardState.length; i++) {
    if (fretboardState[i].isMuted) {
      result.push("mute");
    } else {
      for (let j = 0; j < fretboardState[i].notes.length; j++) {
        if (fretboardState[i].notes[j].value === true) {
          result.push(fretboardState[i].notes[j].name);
          break;
        }

        if (
          j === fretboardState[i].notes.length - 1 &&
          fretboardState[i].notes[j].value === false
        ) {
          result.push(fretboardState[i].name);
        }
      }
    }
  }
  return result;
};
