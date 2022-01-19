import String, { StringType } from "../String/String";
import styles from "./Fretboard.module.css";
import { Button } from "@chakra-ui/react";
import React, { useRef } from "react";
import { RepeatIcon } from "@chakra-ui/icons";
import { resetFretboard } from "../../helperFunctions";

interface FretboardProps {
  fretboardState: StringType[];
  setFretboardState: Function;
}

const Fretboard: React.FC<FretboardProps> = ({
  fretboardState,
  setFretboardState,
}) => {
  const fretboardContainerRef = useRef(null);

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

  const getFretboardPosition = (fretboardRef: any) => {
    if (!fretboardRef?.current) {
      return null;
    }

    return fretboardRef.current.getBoundingClientRect().top;
  };

  const clearFretboardNotes = (fretboardState: StringType[]) => {
    setFretboardState(resetFretboard(fretboardState));
  };

  return (
    <div className={styles.controllerContainer}>
      <div className={styles.controllerToolbar}>
        <Button
          bgColor="var(--primaryColor)"
          variant="unstyled"
          _focus={{ outline: "none" }}
          className="resetBtn"
          height="32px"
          minW="90px"
          display="flex"
          onClick={() => clearFretboardNotes(fretboardState)}
        >
          Reset&nbsp;
          <RepeatIcon fontSize="1.2rem" />
        </Button>
      </div>
      <div ref={fretboardContainerRef} className={styles.fretboardContainer}>
        <div className={styles.noteContainer}>{strings}</div>
        <div className={styles.controllerRightFade}></div>
      </div>
    </div>
  );
};

export default Fretboard;
