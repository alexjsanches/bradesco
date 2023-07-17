import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Center,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { FcDepartment, FcSearch, FcTimeline, FcOnlineSupport } from 'react-icons/fc'

const features = [
  {
    id: 0,
    title: 'Experiência especializada:',
    text: 'A B Mais é uma corretora de planos de saúde com vasta experiência no mercado. Nossa equipe de consultores está pronta para oferecer orientações especializadas e ajudá-lo a encontrar o plano de saúde perfeito para suas necessidades individuais, familiares ou empresariais.',
    icon:FcSearch
  },
  {
    id: 1,
    title: 'Parcerias com as principais operadoras:',
    text: 'Temos parcerias estabelecidas com as principais operadoras de planos de saúde do mercado. Isso nos permite oferecer uma ampla variedade de opções e encontrar a melhor cobertura com base em seus requisitos e orçamento.',
    icon:FcDepartment
  },
  {
    id: 2,
    title: 'Soluções personalizadas:',
    text: 'Reconhecemos que cada cliente é único e tem necessidades diferentes. Nossa abordagem personalizada nos permite entender suas necessidades específicas e oferecer soluções adaptadas para atender a você, sua família e sua empresa.',
    icon:FcTimeline
  },
  {
    id: 3,
    title: 'Suporte contínuo:',
    text: 'Nosso compromisso não termina na venda do plano. Estamos aqui para fornecer suporte contínuo ao longo de sua jornada de saúde. Seja para esclarecer dúvidas, auxiliar em processos de reembolso ou fornecer assistência em emergências, estamos sempre prontos para ajudar.',
    icon:FcOnlineSupport
  }
];



export default function GridListWithHeading() {
  return (
    <Box p={4} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Por quê escolher a B Mais?</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Escolher a B Mais como sua corretora de planos de saúde significa ter uma parceira comprometida com seu bem-estar, oferecendo soluções personalizadas para garantir que você tenha a melhor experiência possível em cuidados de saúde.
        </Text>
      </Stack>
      <Center py={6}>
      <Container maxW={'8xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5} >
          {features.map((feature) => (
            <Box px={6} py={10} bg={useColorModeValue('gray.50', 'gray.900')} boxShadow={'2xl'}
              rounded={'md'}
              overflow={'hidden'}
              maxW={'330px'}
            >
              <HStack key={feature.id} align={'top'}>
              <Box>
              <Icon as={feature.icon} w={7} h={7} />
              </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
                

              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
      </Center>
    </Box>
  );
}