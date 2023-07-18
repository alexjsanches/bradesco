import {
    Box,
    Container,
    Flex,
    Heading,
    Stack,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
 
  
  
  
  import {LogoUnimed, LogoAmil, LogoBradesco, LogoGndi, LogoHapvida, LogoPorto, LogoSulamerica} from './logo';

// Resto do seu código
  
  interface CardProps {
    icon: ReactElement;
  }
  
  const Card = ({ icon }: CardProps) => {
    return (
      <Box
        maxW={{ base: 'full', md: '150px' }}
        w={'full'}
        rounded={'20'}
        overflow="-moz-hidden-unscrollable"
        p={5}
        mx={4}
        transition="all 0.3s" // Adiciona uma transição suave para o hover
        bg={'transparent'} // Define a cor de fundo da caixa de acordo com o modo de cor
        _hover={{
          transform: 'scale(1.5)', // Aumenta o tamanho da caixa em 5% no hover
        }}
      >
        <Stack align={'center'} spacing={1}>
          
          <Flex
            w={'auto'}
            align={'center'}
            justify={'center'}
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
  