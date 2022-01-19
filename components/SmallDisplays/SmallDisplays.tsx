import { Flex } from "@chakra-ui/react";
import { StringType } from "../String/String";
import styles from "./SmallDisplays.module.css";
import Result from "../Result/Result";
import RandomChords from "./RandomChords/RandomChords";

interface SmallDisplaysProps {
  type: string;
  heading: string;
  currentChord: any;
  fretboardState: StringType[];
  setFretboardState: Function;
}

const SmallDisplays: React.FC<SmallDisplaysProps> = ({
  type,
  heading,
  currentChord,
  fretboardState,
  setFretboardState,
}) => {
  if (type === "result") {
    return (
      <Flex direction="column" className={styles.smallDisplaysContainer}>
        <Result
          heading={heading}
          currentChord={currentChord}
          fretboardState={fretboardState}
          setFretboardState={setFretboardState}
        />
      </Flex>
    );
  } else {
    return (
      <Flex direction="column" className={styles.smallDisplaysContainer}>
        <RandomChords
          fretboardState={fretboardState}
          setFretboardState={setFretboardState}
        />
      </Flex>
    );
  }
};

export default SmallDisplays;
