// pages/index.js
import Head from "next/head";
import { Box, Container, Heading } from "@chakra-ui/react";
import Stopwatch from "./components/Stopwatch";

export default function Home() {
  return (
    <Box minH="100vh" bgGradient="linear(to-b, teal.400, blue.500)">
      <Container maxW="container.sm" pt={20}>
        <Head>
          <title>Stopwatch</title>
          <meta
            name="description"
            content="A simple stopwatch application using Next.js and Chakra UI"
          />
        </Head>

        <Box borderRadius="md" p={8} boxShadow="xl">
          <Heading size="2xl" textAlign="center" mb={6}>
            Stopwatch
          </Heading>
          <Stopwatch />
        </Box>
      </Container>
    </Box>
  );
}
