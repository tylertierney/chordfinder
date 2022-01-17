import String, { StringType } from "../String/String";
import styles from "./Fretboard.module.css";

interface FretboardProps {
  fretboardState: StringType[];
  setFretboardState: Function;
}

const Fretboard: React.FC<FretboardProps> = ({
  fretboardState,
  setFretboardState,
}) => {
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
