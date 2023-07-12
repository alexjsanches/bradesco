import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FcConferenceCall,
  FcOrganization,
  FcManager
} from 'react-icons/fc';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Saiba mais
        </Button>
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4}>
      
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Nossos Planos
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Aqui na Hospitalar, oferecemos os melhores planos para cuidar de você, da sua família ou da sua empresa.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Coletivo por Adesão'}
            icon={<Icon as={FcConferenceCall} w={10} h={10} />}
            description={
              'Produto disponível para profissionais filiados a uma entidade de classe, com tabela de preços e condições atrativas para contratação individual e familiar. Entre em contato com um de nossos corretores!'
            }
            href={'#'}
          />
          <Card
            heading={'Individual'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              'Os planos individuais são ideais para quem busca uma cobertura de saúde personalizada. Fale com um de nossos corretores para obter mais informações e encontrar o plano ideal para você.'
            }
            href={'#'}
          />
          <Card
            heading={'Empresarial e PME'}
            icon={<Icon as={FcOrganization} w={10} h={10} />}
            description={
              'O Plano de Saúde Hospitalar oferece soluções específicas para sua empresa, garantindo uma cobertura abrangente e personalizada para seus colaboradores, com tabelas de preços e condições diferenciadas.'
            }
            href={'#'}
          />
          
        </Flex>
      </Container>
    </Box>
  );
}