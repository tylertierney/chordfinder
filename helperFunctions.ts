import { StringType } from "./components/String/String";

const generateString = (startingPosition: string) => {
  const musicalNotes = [
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
  ];

  let startingIndex = musicalNotes.indexOf(startingPosition);
  let string: StringType = {
    name: startingPosition,
    isMuted: false,
    notes: [],
  };

  for (let i = startingIndex + 1, j = 0; j < 21; j++, i++) {
    if (i == musicalNotes.length) i = 0;
    string.notes.push({ name: musicalNotes[i], value: false });
  }

  return string;
};

export const initialFretboardState = [
  generateString("E"),
  generateString("B"),
  generateString("G"),
  generateString("D"),
  generateString("A"),
  generateString("E"),
];

export const determineFretDecoration = (noteIndex: number) => {
  const decoratedFrets = [3, 5, 7, 9, 12, 15, 17, 19, 21];

  if (decoratedFrets.indexOf(noteIndex) >= 0) {
    return true;
  }

  return false;
};

export const reduceNotesFromFretboard = (fretboardState: StringType[]) => {
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

export const chordDictionary: any = {
  C: [
    ["E", "C", "G", "E", "C", "mute"],
    ["G", "E", "C", "G", "C", "mute"],
    ["C", "G", "C", "G", "E", "C"],
    ["C", "G", "E", "C", "G", "C"],
  ],
};

export const determineChord = (notesArr: string[]) => {
  for (let root in chordDictionary) {
    const rootChords = chordDictionary[`${root}`];
    for (let i = 0; i < rootChords.length; i++) {
      const currentChord = rootChords[i];
      for (let j = 0; j < currentChord.length; j++) {
        // if (i === 0) console.log(currentChord[j]);
        if (currentChord[j] !== notesArr[j]) {
          break;
        }

        if (j === currentChord.length - 1 && currentChord[j] === notesArr[j]) {
          return root;
        }
      }
    }
  }
};

console.log(determineChord(["D", "E", "C", "G", "C", "mute"]));
// determineChord(["G", "E", "C", "G", "C", "mute"]);
