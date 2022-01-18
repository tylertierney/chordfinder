import { Text, Heading, Flex } from "@chakra-ui/react";

const Greeting = () => {
  return (
    <Flex
      margin="1rem 0"
      direction="column"
      align="center"
      justifyContent="center"
    >
      <Text
        lineHeight="1.1"
        fontSize={["1.35rem", "1.4rem", "1.6rem"]}
        fontWeight="light"
        textAlign="center"
        maxW="75%"
      >
        Enter
        <Text as="span" fontWeight="bold" color="brand.secondary.1000">
          &nbsp;notes&nbsp;
        </Text>
        and we'll show you what
        <Text as="span" fontWeight="bold" color="brand.secondary.1000">
          &nbsp;chord&nbsp;
        </Text>
        you're playing
      </Text>
    </Flex>
  );
};

export default Greeting;
