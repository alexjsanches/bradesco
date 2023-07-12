import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Heading,
  Box,
  Spacer,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

export default function SimpleAccordion() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')}>
    <Box as={Container} maxW={'3xl'} textAlign={'center'}>
      <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} >
   Diferenciais Hospitalar
  </Heading>
  <Spacer />
    <Flex
      align={'center'}
      justify={'center'}
      >
        <Accordion  allowToggle width="100%" p={'10px'}  rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: 'gray.100' }}>
              <Text fontSize="md" fontWeight={'bold'}>Planos individuais e coletivos</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Chakra UI is a simple and modular component library that gives
                developers the building blocks they need to create web
                applications.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: 'gray.100' }}>
              <Text fontSize="md" fontWeight={'bold'}>Quais os benefícios do plano de Saúde?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Chakra UI offers a variety of advantages including ease of use,
                accessibility, and customization options. It also provides a
                comprehensive set of UI components and is fully compatible with
                React.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: 'gray.100' }}>
              <Text fontSize="md" fontWeight={'bold'}>How to start using Chakra UI?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                To get started with Chakra UI, you can install it via npm or
                yarn, and then import the components you need in your project.
                The Chakra UI documentation is also a great resource for getting
                started and learning more about the library.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
    </Flex>
    </Box>
    </Box>
  );
}
