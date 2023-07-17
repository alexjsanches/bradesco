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
  
  import { LogoSulamerica, LogoUnimed, LogoGndi, LogoHapvida, LogoBradesco, LogoPorto, LogoAmil } from './logo';
  
  interface CardProps {
    icon: ReactElement;
  }
  
  const Card = ({ icon }: CardProps) => {
    return (
      <Box
        maxW={{ base: 'full', md: '75px' }}
        w={'full'}
        rounded={'20'}
        overflow="hidden"
        p={5}
        mx={8}
        cursor={'pointer'}
        transition="all 0.3s" // Adiciona uma transição suave para o hover
        bg={'white'} // Define a cor de fundo da caixa de acordo com o modo de cor
        _hover={{
          transform: 'scale(1.5)', // Aumenta o tamanho da caixa em 5% no hover
        }}
      >
        <Stack align={'center'} spacing={2}>
          
          <Flex
            w={'100%'}
            h={16}
            align={'center'}
            justify={'center'}
             transform={'scale(2)'}
          >
            {icon}
          </Flex>
          
        </Stack>
      </Box>
    );
  };
  
  export default function Operadoras() {
    return (
      <Box p={4}>
        
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'bold'}>
          Nossos Parceiros
          </Heading>
        </Stack>
  
        <Container maxW={'6xl'} mt={10}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              icon={<LogoUnimed />}
            />
            <Card
              icon={<LogoSulamerica />}
            />
            <Card
              icon={<LogoGndi />}
            />
            <Card
              icon={<LogoBradesco />}
            />
            <Card
              icon={<LogoPorto />}
            />
            <Card
              icon={<LogoAmil />}
            />
            <Card
              icon={<LogoHapvida />}
            />
            
          </Flex>
        </Container>
      </Box>
    );
  }
  