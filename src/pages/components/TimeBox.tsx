// components/TimeBox.tsx
import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

interface TimeBoxProps {
  value: number;
}

const width = "120px";
const height = "160px";

const TimeBox = (props: TimeBoxProps) => {
  return (
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
        {props.value?.toString().padStart(2, "0")}
      </Text>
    </Box>
  );
};

export default TimeBox;
