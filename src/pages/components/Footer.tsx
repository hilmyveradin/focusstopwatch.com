import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      justifyContent="center"
      position="fixed"
      bottom="0"
      paddingBottom="8"
      paddingTop={"8"}
    >
      <Text fontSize="sm">
        made with ❤️ by{" "}
        <Link
          href="https://twitter.com/hilmy_veradin"
          isExternal
          rel="noopener noreferrer"
          textDecoration="underline"
        >
          Hilmy Veradin
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
