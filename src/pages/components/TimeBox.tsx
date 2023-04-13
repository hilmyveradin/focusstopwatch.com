// components/TimeBox.tsx
import React from "react";
import { Box, Text, useColorModeValue, AspectRatio } from "@chakra-ui/react";

interface TimeBoxProps {
  value: number;
}

const width = "120px";
const height = "160px";

const TimeBox: React.FC<TimeBoxProps> = ({ value }) => (
  // <AspectRatio ratio={4/3} maxWidth={width} bgColor={"red"}>
  <Box
    w={width}
    h={height}
    borderRadius="md"
    bgColor={useColorModeValue("gray.100", "gray.700")}
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Text fontSize="6xl" fontWeight="bold">
      {value.toString().padStart(2, "0")}
    </Text>
  </Box>
  // </AspectRatio>
);

export default TimeBox;
