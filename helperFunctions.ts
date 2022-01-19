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
  const resultAsNotes = [];
  const resultAsFretNums = [];

  for (let i = 0; i < fretboardState.length; i++) {
    if (fretboardState[i].isMuted) {
      resultAsNotes.push("mute");
      resultAsFretNums.push(-1);
    } else {
      for (let j = 0; j < fretboardState[i].notes.length; j++) {
        if (fretboardState[i].notes[j].value === true) {
          resultAsNotes.push(fretboardState[i].notes[j].name);
          resultAsFretNums.push(j + 1);
          break;
        }

        if (
          j === fretboardState[i].notes.length - 1 &&
          fretboardState[i].notes[j].value === false
        ) {
          resultAsNotes.push(fretboardState[i].name);
          resultAsFretNums.push(0);
        }
      }
    }
  }
  return { resultAsNotes, resultAsFretNums };
};

export const resetFretboard = (fretboardState: StringType[]) => {
  let copyOfState = [...fretboardState];

  for (let i = 0; i < copyOfState.length; i++) {
    copyOfState[i].isMuted = false;
    for (let j = 0; j < copyOfState[i].notes.length; j++) {
      const note = copyOfState[i].notes[j];
      note.value = false;
    }
  }

  return copyOfState;
};

export const determineChord = (chordDictionary: any, userInput: number[]) => {
  let reversedUserInput: any = [];
  for (let i = userInput.length - 1; i > -1; i--) {
    reversedUserInput.push(userInput[i]);
  }

  reversedUserInput = JSON.stringify(reversedUserInput);

  chordDictionary = chordDictionary.chords;

  for (let key in chordDictionary) {
    for (let i = 0; i < chordDictionary[key].length; i++) {
      const chord = chordDictionary[key][i];

      for (let j = 0; j < chord.positions.length; j++) {
        const position = chord.positions[j];
        const increasedFretValues = position.frets.map((fretNum: number) => {
          if (fretNum === 0) {
            return 0;
          } else if (fretNum === -1) {
            return -1;
          } else {
            return fretNum + position.baseFret - 1;
          }
        });

        if (JSON.stringify(increasedFretValues) === reversedUserInput) {
          const name = chord.key;
          const suffix = chord.suffix;
          const result = { name, suffix };
          return result;
        }
      }
    }
  }
};

export const calculateRelatedChords = (
  chordDictionary: any,
  currentChord: any
) => {
  chordDictionary = chordDictionary.chords;

  let suffixToSearchFor = currentChord.suffix;
  switch (suffixToSearchFor) {
    case "major":
      suffixToSearchFor = "maj";
      break;
    case "minor":
      suffixToSearchFor = "min";
      break;
  }

  for (let key in chordDictionary) {
    if (key === currentChord.name) {
      const result = [];
      for (let i = 0; i < 4; i++) {
        const currentChordIteration = chordDictionary[key][i];
        const suffix = currentChordIteration.suffix;
        // if (
        //   suffix !== currentChord.suffix &&
        //   suffix.includes(suffixToSearchFor)
        // ) {
        //   return currentChordIteration;

        // }
        // if (suffix !== currentChord.suffix) {
        //   if (suffix.includes(suffixToSearchFor)) {
        //     return currentChordIteration;
        //   } else {
        //     if (suffix.includes(suffixToSearchFor[0])) {
        //       return currentChordIteration;
        //     }
        //   }
        // }
        if (suffix !== currentChord.suffix) {
          result.push(currentChordIteration);
        }
      }
      return result;
    }
  }
  return null;
};
