import React, { useRef, useImperativeHandle } from 'react';
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
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const OverlayOne = () => <ModalOverlay backdropFilter="blur(10px)" />;

const ModalForm = React.forwardRef((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    openModal() {
      onOpen();
    },
  }));

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}
        finalFocusRef={finalRef}>
          <OverlayOne />
          <ModalContent>
            <ModalHeader>Informe seus dados, que entraremos em contato em 3 minutos!</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input ref={initialRef} placeholder='Informe seu nome' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Celular</FormLabel>
              <Input placeholder='Informe seu celular' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder='Informe seu email' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Cidade</FormLabel>
              <Input placeholder='Informe sua cidade' />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Enviar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
          </ModalContent>
        </Modal>
    </>
  );
});

export default ModalForm;
