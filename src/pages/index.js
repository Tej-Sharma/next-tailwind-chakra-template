import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/core';

export default function Home() {
  // Handling Chakra Modal options
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="h-screen bg-white">
      <div className="p-4 bg-white text-black flex justify-center text-center pt-3">
        <div
          className="flex flex-col p-3 w-sm max-w-sm h-32 shadow-md rounded-md hover:shadow-xl hover:rounded-xl transition duration-200 ease-in-out cursor-pointer"
          onClick={() => onOpen()}
        >
          <p className="text-3xl"> Powered by NextJS, Tailwind & Chakra UI </p>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p> I am some text </p>
            </ModalBody>

            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
