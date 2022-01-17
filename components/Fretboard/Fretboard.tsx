import String from "../String/String";
import { useState } from "react";
import { initialFretboardState } from "../../helperFunctions";
import styles from "./Fretboard.module.css";

const Fretboard: React.FC = () => {
  const [fretboardState, setFretboardState] = useState(initialFretboardState);

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

  return (
    <div className={styles.controllerContainer}>
      <div className={styles.fretboardContainer}>{strings}</div>
      <div className={styles.controllerRightFade}></div>
      <div className={styles.fretboardRightSpacer}></div>
    </div>
  );
};

export default Fretboard;
