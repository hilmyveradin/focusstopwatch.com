// components/FinishAlertDialog.tsx
import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

interface FinishAlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const FinishAlertDialog: React.FC<FinishAlertDialogProps> = ({

  isOpen,
  onClose,
  onConfirm,
}) => (
  <AlertDialog
    isOpen={isOpen}
    leastDestructiveRef={undefined}
    onClose={onClose}
  >
    <AlertDialogOverlay>
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          Finish Stopwatch
        </AlertDialogHeader>
        <AlertDialogBody>
          Are you sure you want to finish the stopwatch? All progress will be
          reset.
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={undefined} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="red" onClick={onConfirm} ml={3}>
            Yes, Finish
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogOverlay>
  </AlertDialog>
);

export default FinishAlertDialog;
