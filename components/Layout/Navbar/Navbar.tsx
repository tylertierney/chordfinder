import { Flex, Text } from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import { GiGuitarHead } from "react-icons/gi";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Flex fontSize="1.5rem" align="center" userSelect="none" padding="0 10px">
        <Text as="span">Chord</Text>
        <Text as="span" fontWeight="extrabold">
          Finder&nbsp;
        </Text>
        <GiGuitarHead />
      </Flex>
    </nav>
  );
};

export default Navbar;
