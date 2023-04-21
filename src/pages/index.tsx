import { useState } from "react";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Center,
  HStack,
  Image,
  Container,
} from "@chakra-ui/react";

import { supabase } from "../../public/SupabaseClient";
import Footer from "./components/Footer";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import Stopwatch from "./components/Stopwatch";
import ConstructionAlertDialog from "./components/ConstructionAlertDialog";

export default function Index() {
  const [alertOpen, setAlertOpen] = useState<boolean>(false);

  const isAlertClose = () => setAlertOpen(false);
  const isAlertOpen = () => setAlertOpen(true);

  return (
    <>
      <Container maxWidth={"720px"} bgColor={"red"}>
        <NavigationBar />
        <Center paddingTop={100}>
          <Stopwatch />
        </Center>
      </Container>
      <Footer />
    </>
  );
}

const NavigationBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex maxWidth="720px" margin="0 auto">
      <Box width={"100%"}>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <HStack>
              <Image src="/focusstopwatch.logo.png" maxHeight={"30px"}></Image>
              <Text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                color={useColorModeValue("gray.800", "white")}
              >
                FocusStopwatch.com
              </Text>
            </HStack>

            <Flex display={{ base: "none", md: "flex" }} ml={10}></Flex>
          </Flex>
          <Flex py={{ base: 2 }} px={{ base: 4 }} align={"center"}>
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
              <Flex display={{ base: "none", md: "flex" }}>
                <DesktopNav />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Flex>
  );

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    console.log(data);
    console.log(error);
    console.log(2);
  }
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Stack direction={"row"} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Link
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
              onClick={onToggle}
            >
              {navItem.label}
            </Link>
          </Box>
        ))}
      </Stack>
      <ConstructionAlertDialog isOpen={isOpen} onClose={onToggle} />
    </>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Stack spacing={4} onClick={onToggle}>
        <Flex
          py={2}
          as={Link}
          href={"#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
            align={"right"}
            alignItems={"right"}
            onClick={onToggle}
          >
            {label}
          </Text>
        </Flex>
      </Stack>
      <ConstructionAlertDialog isOpen={isOpen} onClose={onToggle} />
    </>
  );
};

interface NavItem {
  label: string;
  isOpened: boolean;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Report",
    isOpened: true,
  },
  {
    label: "Login",
    isOpened: true,
  },
];
