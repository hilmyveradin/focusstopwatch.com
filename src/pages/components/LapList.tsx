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

const LapList: React.FC<LapListProps> = ({ laps }) => (
  <List spacing={3} mt={4} borderRadius="md">
    {laps.map((lap) => (
      <ListItem
        key={lap.lapNumber}
        borderRadius="md"
        p={2}
        bgColor={useColorModeValue("gray.100", "gray.700")}
      >
        Lap {lap.lapNumber}: {lap.time}
      </ListItem>
    ))}
  </List>
);

export default LapList;
