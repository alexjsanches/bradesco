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
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  
  const features = [
    {
      id: 0,
      title: 'Experiência especializada:',
      text: 'A B Mais é uma corretora de planos de saúde com vasta experiência no mercado. Nossa equipe de consultores está pronta para oferecer orientações especializadas e ajudá-lo a encontrar o plano de saúde perfeito para suas necessidades individuais, familiares ou empresariais.'
    },
    {
      id: 1,
      title: 'Parcerias com as principais operadoras:',
      text: 'Temos parcerias estabelecidas com as principais operadoras de planos de saúde do mercado. Isso nos permite oferecer uma ampla variedade de opções e encontrar a melhor cobertura com base em seus requisitos e orçamento.'
    },
    {
      id: 2,
      title: 'Soluções personalizadas:',
      text: 'Reconhecemos que cada cliente é único e tem necessidades diferentes. Nossa abordagem personalizada nos permite entender suas necessidades específicas e oferecer soluções adaptadas para atender a você, sua família e sua empresa.'
    },
    {
        id: 3,
        title: 'Suporte contínuo:',
        text: 'Nosso compromisso não termina na venda do plano. Estamos aqui para fornecer suporte contínuo ao longo de sua jornada de saúde. Seja para esclarecer dúvidas, auxiliar em processos de reembolso ou fornecer assistência em emergências, estamos sempre prontos para ajudar.'
      }
  ];
  
  
  
  export default function GridListWithHeading() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Por quê escolher a B Mais?</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
          Escolher a B Mais como sua corretora de planos de saúde significa ter uma parceira comprometida com seu bem-estar, oferecendo soluções personalizadas para garantir que você tenha a melhor experiência possível em cuidados de saúde.
          </Text>
        </Stack>
  
        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }