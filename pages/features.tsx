import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Grid,
  Stack,
  StackDivider,
  Icon,
  Button,
  Box,
  useColorModeValue,
  Spacer,
} from '@chakra-ui/react';
import { GiHospital } from 'react-icons/gi/'
import { ReactElement } from 'react';
import { MdVaccines } from 'react-icons/md'
import { TbDiscount2, TbAmbulance, Tb24Hours } from 'react-icons/tb'
import { FaUserDoctor, FaHouseMedicalCircleCheck, FaLaptopMedical } from 'react-icons/fa6'

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}


const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Box
   alignItems={'center'}
   justifyContent={'center'}
   mx={'auto'}
    >
      <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
        <Heading fontSize={{base:'5xl', md: '6xl'}} mb={{base:5, md:10}} mt={10}>Nossas Soluções</Heading>
      </Stack>
       {/* -----Planos Individuais----- */}
      <Box bg={useColorModeValue('gray.50', 'gray.800')} rounded={'md'} boxShadow={'2xl'}overflow={'hidden'}
    px={6} py={10} maxW='6xl' mx={'auto'}>
        <Container maxW={'5xl'} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Flex>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={
                  'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
                objectFit={'cover'}
              />
            </Flex>
            <Stack spacing={4} align="start">
              <Text
                textTransform={'uppercase'}
                color={'blue.700'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.100', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}
              >
                Para Você
              </Text>
              <Heading>Planos Individuais</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>
                Os planos individuais e familiares e os planos coletivos por adesão são projetados para atender às necessidades das pessoas e famílias que buscam cobertura de saúde completa. Consultas médicas, exames laboratoriais, internações hospitalares, cirurgias e muito mais estão entre os vários benefícios e serviços oferecidos. A ampla rede de médicos, hospitais e laboratórios garante a você acesso a uma saúde de qualidade. Na <span style={{ color: '#0089de', fontWeight: 'bold' }}>B Mais Saúde</span>, Contamos com planos flexíveis que podem ser ajustados para atender às suas necessidades únicas, garantindo segurança e tranquilidade em relação à saúde.
              </Text>

              <Spacer display={{ base: 'flex', md: 'none' }}></Spacer>
              <Box>
                <Button
                  mt={10}
                  w={'full'}
                  bg={'#0089de'}
                  color={'white'}
                  rounded={'xl'}
                  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                  _hover={{
                    bg: '#00afd1',
                  }}
                  _focus={{
                    bg: '#00afd1',
                  }}>
                  Clique e conheça
                </Button>
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      {/* -----Planos Empresariais----- */}
      <Box  rounded={'md'} boxShadow={'2xl'}overflow={'hidden'}
    px={6} py={10} maxW='6xl' mx={'auto'} mt={5}>
        <Container maxW={'5xl'} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4} align="start" order={{ base: 2, md: 1 }} >
              <Text
                textTransform={'uppercase'}
                color={'blue.700'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.100', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}
              >
                Para Sua Empresa
              </Text>
              <Heading>Planos Empresariais</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>
              Nossas soluções corporativas são projetadas para atender às necessidades de empresas de todos os tamanhos. Nossos planos empresariais oferecem amplas vantagens para incentivar a saúde dos funcionários. Trabalhamos com a sua empresa para descobrir quais são as necessidades e oferecer soluções personalizadas. Os planos incluem programas de prevenção e bem-estar, bem como cobertura médica para consultas, exames, tratamentos e internações hospitalares.  Ao ofertar um plano de saúde para os colaboradores, as empresas podem atrair e reter talentos, aumentar a satisfação interna e criar uma cultura de cuidado e bem-estar. Não perca tempo e contrate hoje mesmo!
              </Text>

              <Spacer display={{ base: 'flex', md: 'none' }}></Spacer>
              <Box>
                <Button
                  mt={10}
                  w={'full'}
                  bg={'#0089de'}
                  color={'white'}
                  rounded={'xl'}
                  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                  _hover={{
                    bg: '#00afd1',
                  }}
                  _focus={{
                    bg: '#00afd1',
                  }}>
                  Clique e conheça
                </Button>
              </Box>
            </Stack>
            <Flex order={{ base: 1, md: 2 }}>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={
                  'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
                objectFit={'cover'}
              />
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
      {/* -----Planos Odontológicos----- */}
      <Box bg={useColorModeValue('gray.50', 'gray.800')} rounded={'md'} boxShadow={'2xl'}overflow={'hidden'}
    px={6} py={10} maxW='6xl' mx={'auto'} mt={5}>
        <Container maxW={'5xl'} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Flex>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={
                  'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
                objectFit={'cover'}
              />
            </Flex>
            <Stack spacing={4} align="start">
              <Text
                textTransform={'uppercase'}
                color={'blue.700'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.100', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}
              >
                Odonto
              </Text>
              <Heading>Planos Odontológicos</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>
              Com os planos odontológicos, você tem acesso a uma grande variedade de dentistas e especialistas qualificados, que oferecem consultas, limpezas, tratamentos preventivos e corretivos, extrações e implantes dentários, entre outros serviços. É importante promover uma boa saúde bucal e cuidar do seu sorriso. Você pode desfrutar de cuidados odontológicos de alta qualidade, atendimento individualizado e a confiança de saber que sua saúde bucal está em boas mãos
              </Text>

              <Spacer display={{ base: 'flex', md: 'none' }}></Spacer>
              <Box>
                <Button
                  mt={10}
                  w={'full'}
                  bg={'#0089de'}
                  color={'white'}
                  rounded={'xl'}
                  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                  _hover={{
                    bg: '#00afd1',
                  }}
                  _focus={{
                    bg: '#00afd1',
                  }}>
                  Clique e conheça
                </Button>
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}