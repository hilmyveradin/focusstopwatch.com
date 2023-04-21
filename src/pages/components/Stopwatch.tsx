// components/Stopwatch.tsx
import React, { useState, useEffect } from "react";
import { Button, VStack, HStack } from "@chakra-ui/react";
import TimeBox from "./TimeBox";
import LapList from "./LapList";
import FinishAlertDialog from "./FinishAlertDialog";
import { useDisclosure } from "@chakra-ui/react";

interface Lap {
  lapNumber: number;
  time: string;
}

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<Lap[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formatTime = (time: number): string => {
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / (1000 * 60)) % 60;
    const hours = Math.floor(time / (1000 * 60 * 60));

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (isRunning) {
      const tick = () => {
        setTime(performance.now() - startTime);
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, [isRunning, startTime]);

  const start = () => {
    setStartTime(performance.now() - time);
    setIsRunning(true);
  };

  const lapAndReset = () => {
    setLaps((prevLaps) => [
      ...prevLaps,
      { lapNumber: prevLaps.length + 1, time: formatTime(time) },
    ]);
    setTime(0);
    setIsRunning(false);
  };

  const finish = () => {
    onOpen();
  };

  const confirmFinish = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    onClose();
  };

  return (
    <VStack spacing={4} alignItems="stretch">
      <HStack justifyContent="center" spacing={4}>
        <TimeBox value={Math.floor(time / (1000 * 60 * 60))} />
        <TimeBox value={Math.floor(time / (1000 * 60)) % 60} />
        <TimeBox value={Math.floor(time / 1000) % 60} />
      </HStack>
      {laps.length === 0 && !isRunning ? (
        <Button
          onClick={start}
          colorScheme="blue"
          w="100%"
          height={"50px"}
          fontSize={"2xl"}
        >
          Start
        </Button>
      ) : (
        <VStack spacing={4}>
          <Button
            onClick={isRunning ? lapAndReset : start}
            colorScheme="blue"
            w="100%"
            height={"50px"}
            fontSize={"2xl"}
          >
            {isRunning ? "Lap & Reset" : "Start"}
          </Button>
          <Button
            onClick={finish}
            colorScheme="red"
            w="100%"
            height={"50px"}
            fontSize={"2xl"}
          >
            Finish
          </Button>
        </VStack>
      )}
      {laps.length > 0 && <LapList laps={laps} />}
      <FinishAlertDialog
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={confirmFinish}
      />
    </VStack>
  );
};

export default Stopwatch;
