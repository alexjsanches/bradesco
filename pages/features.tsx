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
    <Box>
      <Box bg={useColorModeValue('gray.50', 'gray.800')}>
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
                Sobre a Hospitalar
              </Text>
              <Heading>Por quê escolher a Hospitalar? </Heading>
              <Text color={'gray.500'} fontSize={'lg'}>
              Há mais de 50 anos cuidando da saúde dos norte-paranaenses, o Plano de Saúde Hospitalar é reconhecido por sua excelência e oferece a melhor relação custo-benefício do mercado. Sua ampla rede credenciada, atendimento rápido e personalizado permitem que o Plano de Saúde Hospitalar ofereça um serviço diferenciado no setor de saúde suplementar.
              </Text>
              <Spacer display={{ base: 'flex', md: 'none' }}></Spacer>
              <Grid templateColumns={{ base: '1fr 1fr', md: '1fr 1fr' }} gap={6}>
  <Feature
    icon={<Icon as={GiHospital} color={'blue.700'} boxSize={5} />}
    iconBg={useColorModeValue('blue.100', 'blue.900')}
    text={'Hospital Próprio'}
  />
  <Feature
    icon={<Icon as={Tb24Hours} color={'blue.700'} w={5} h={5} />}
    iconBg={useColorModeValue('blue.100', 'blue.900')}
    text={'Pronto-Atendimento 24h'}
  />
  <Feature
    icon={<Icon as={TbAmbulance} color={'blue.700'} w={5} h={5} />}
    iconBg={useColorModeValue('blue.100', 'blue.900')}
    text={'UTI móvel 24h'}
  />
  <Feature
    icon={<Icon as={FaLaptopMedical} color={'blue.700'} w={5} h={5} />}
    iconBg={useColorModeValue('blue.100', 'blue.900')}
    text={'TeleMedicina 24/7'}
  />
  <Feature
    icon={<Icon as={TbDiscount2} color={'blue.700'} w={5} h={5} />}
    iconBg={useColorModeValue('blue.100', 'blue.900')}
    text={'Descontos em farmácias'}
  />
  <Feature
    icon={<Icon as={FaUserDoctor} color={'blue.700'} w={5} h={5} />}
    iconBg={useColorModeValue('blue.100', 'blue.900')}
    text={'Clínica Multiprofissional'}
  />
  <Feature
    icon={<Icon as={MdVaccines} color={'blue.700'} w={5} h={5} />}
    iconBg={useColorModeValue('blue.100', 'blue.900')}
    text={'Clínica de Vacinas'}
  />
  <Feature
    icon={<Icon as={FaHouseMedicalCircleCheck} color={'blue.700'} w={5} h={5} />}
    iconBg={useColorModeValue('blue.100', 'blue.900')}
    text={'Internação Domiciliar'}
  />
</Grid>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}