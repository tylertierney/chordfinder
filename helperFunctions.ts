export const initialFretboardState = [
  [
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
  [
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
  [
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
  [
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
  [
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
  [
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
