import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FcConferenceCall,
  FcOrganization,
  FcManager
} from 'react-icons/fc';

import {FaHeart, FaLeaf, FaTooth} from 'react-icons/fa'



interface CardProps {
  heading: string;
  icon: ReactElement;
}

const Card = ({ heading, icon }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      rounded={'20'}
      overflow="hidden"
      p={5}
      mx={4}
      cursor={'pointer'}
      transition="all 0.3s" // Adiciona uma transição suave para o hover
      bg={'white'} // Define a cor de fundo da caixa de acordo com o modo de cor
      color={'#0089de'} // Define a cor do texto de acordo com o modo de cor
      _hover={{
        transform: 'scale(1.05)', // Aumenta o tamanho da caixa em 5% no hover
        bg: '#0089de', // Altera a cor de fundo para azul no hover
        color: 'white', // Define a cor do texto como branco no hover
      }}
    >
      <Stack align={'center'} spacing={2}>
        
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          color={'#0089de'}
          pointerEvents="all"
          bg={'gray.100'}
          _hover={{
            color: '#0089de'
          }}
          
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
        </Box>
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4}>
      
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'bold'}>
        Conectamos você aos melhores benefícios de saúde do mercado, oferecendo soluções personalizadas para atender às suas necessidades.
        </Heading>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Plano de Saúde'}
            icon={<Icon as={FaHeart} w={5} h={5} />}
          />
          <Card
            heading={'Seguro de Vida'}
            icon={<Icon as={FaLeaf} w={5} h={5} />}
          />
          <Card
            heading={'Odontológico'}
            icon={<Icon as={FaTooth} w={5} h={5} />}
          />
          
        </Flex>
      </Container>
    </Box>
  );
}
