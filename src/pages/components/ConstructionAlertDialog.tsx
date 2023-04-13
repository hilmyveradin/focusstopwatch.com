// components/FinishAlertDialog.tsx
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Center,
  AbsoluteCenter,
  Container,
} from "@chakra-ui/react";

interface ConstructionAlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConstructionAlertDialog = (props: ConstructionAlertDialogProps) => {
  return (
  <>
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Feature is Under Construction</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Please come back again later 😉</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.onClose}>
            Okay
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default ConstructionAlertDialog;
