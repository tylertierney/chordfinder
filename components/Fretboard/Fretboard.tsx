import String from "../String/String";
import { useState } from "react";
import { initialFretboardState } from "../../helperFunctions";

const Fretboard: React.FC = () => {
  const [fretboardState, setFretboardState] = useState(initialFretboardState);

  console.log(fretboardState);

  const strings = fretboardState.map((string, index) => {
    return (
      <String
        key={index}
        index={index}
        stringState={string}
        fretboardState={fretboardState}
        setFretboardState={setFretboardState}
      />
    );
  });

  return <>{strings}</>;
};

export default Fretboard;
