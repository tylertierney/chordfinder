import String, { StringType } from "../String/String";
import styles from "./Fretboard.module.css";
import { Button } from "@chakra-ui/react";
import React, { useRef } from "react";
import { NotAllowedIcon } from "@chakra-ui/icons";
import { clearFretboard } from "../../helperFunctions";

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

  const getFretboardPosition = (fretboardRef: any, topOrHeight: string) => {
    if (!fretboardRef?.current) {
      return null;
    }

    if (topOrHeight === "top") {
      return fretboardRef.current.getBoundingClientRect().top;
    }

    if (topOrHeight === "height") {
      return fretboardRef.current.getBoundingClientRect().height;
    }
  };

  const clearFretboardNotes = (fretboardState: StringType[]) => {
    setFretboardState(clearFretboard(fretboardState));
  };

  return (
    <div className={styles.controllerContainer}>
      <div className={styles.controllerToolbar}>
        <Button
          color="white"
          _focus={{ outline: "none" }}
          className={styles.clearAllBtn}
          onClick={() => clearFretboardNotes(fretboardState)}
        >
          Clear&nbsp;
          <NotAllowedIcon fontSize="1.2rem" />
        </Button>
      </div>
      <div ref={fretboardContainerRef} className={styles.fretboardContainer}>
        {strings}
      </div>
      <div
        style={{
          top: getFretboardPosition(fretboardContainerRef, "top"),
          height: getFretboardPosition(fretboardContainerRef, "height"),
        }}
        className={styles.controllerRightFade}
      ></div>
      <div className={styles.fretboardRightSpacer}></div>
    </div>
  );
};

export default Fretboard;
