// components/LapList.tsx
import React from "react";
import { List, ListItem, useColorModeValue } from "@chakra-ui/react";

interface Lap {
  lapNumber: number;
  time: string;
}

interface LapListProps {
  laps: Lap[];
}

const LapList = (props: LapListProps) => {
  if (!props.laps) {
    return null;
  }

  return (
    <List spacing={3} mt={4} borderRadius="md">
      {props.laps.map((lap) => (
        <ListItem
          key={lap.lapNumber}
          borderRadius="md"
          p={2}
          bgColor={"gray.100"}
        >
          Lap {lap.lapNumber}: {lap.time}
        </ListItem>
      ))}
    </List>
  );
};

export default LapList;
