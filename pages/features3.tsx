import {
  Box,
  VStack,
  Button,
  Flex,
  FormLabel,
  Input,
  FormControl,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  HStack,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import React from 'react';

interface FeatureProps {
  heading: string;
  text: string;
}

const OverlayOne = () => (
  <ModalOverlay backdropFilter='blur(10px)' />
);

export default function gridListWithCTA() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const Feature = ({ heading, text }: FeatureProps) => {
    return (
      <GridItem>
        <chakra.h3 fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
        <chakra.p>{text}</chakra.p>
      </GridItem>
    );
  };

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')}>
      <Box as={Container} maxW="5xl" mt={14} p={4}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <Flex>
              <chakra.p>
                Nos negócios e na vida, aproveitar as oportunidades é fundamental para o sucesso. Entre em contato conosco agora e receba uma ligação em até 3 minutos para obter a solução adequada para você.
              </chakra.p>
            </Flex>
          </GridItem>
          <GridItem>
            <VStack alignItems="center" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Fale com um consultor agora
              </chakra.h2>
              <Button
                rounded={'full'}
                size={'md'}
                w={'150px'}
                as={'a'}
                cursor={'pointer'}
                display={{ base: 'inline-flex', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg='#0089de'
                onClick={() => {
                  onOpen();
                }}
                _hover={{
                  bg: '#00afd1',
                }}
              >
                Me ligue!
              </Button>
            </VStack>
          </GridItem>
        </Grid>
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
      </Box>
    </Box>
  );
}
