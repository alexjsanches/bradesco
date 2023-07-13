import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Image,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Heading,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  
  const Logo = (props: any) => {
    return (
      <a href='http://bmaissaude.com.br'>
      <Image src="https://bmaissaude.com.br/wp-content/uploads/2023/06/cropped-B-Saude.pdf-5-2048x874.png" alt="Logo B Mais" w={220} h={'auto'} />
      </a>
      );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithNewsletter() {
    return (
      <Box
        bg={useColorModeValue('#0089de', '#013F7A')}
        color={useColorModeValue('gray.50', 'gray.200')}>
        <Container as={Stack} maxW={'8xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 2fr' }}
            spacing={8}
            alignItems={'flex-start'}>
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue('gray.700', 'white')} />
              </Box>
              <Heading fontSize={'sm'}>BRADCOR CORRETORA DE SEGUROS LTDA <br /> CNPJ: 15.185.975/0001-09</Heading>
              <Text fontSize={'sm'}>
                © 2023 B Mais Saúde. Todos os direitos reservados.
              </Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Coletivos</ListHeader>
              <Link href={'#'}>Amil</Link>
              <Link href={'#'}>Bradesco</Link>
              <Link href={'#'}>Hapvida Notre Dame Intermédica</Link>
              <Link href={'#'}>Hospitalar</Link>
              <Link href={'#'}>Humana</Link>
              <Link href={'#'}>SulAmérica</Link>
              <Link href={'#'}>Unimed</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Empresariais</ListHeader>
              <Link href={'#'}>Amil</Link>
              <Link href={'#'}>Bradesco</Link>
              <Link href={'#'}>Hapvida Notre Dame Intermédica</Link>
              <Link href={'#'}>Hospitalar</Link>
              <Link href={'#'}>Humana</Link>
              <Link href={'#'}>SulAmérica</Link>
              <Link href={'#'}>Unimed</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Odontológicos</ListHeader>
              <Link href={'#'}>Amil Dental</Link>
              <Link href={'#'}>Bradesco Dental</Link>
              <Link href={'#'}>Dental Uni</Link>
              <Link href={'#'}>Hapvida Odonto</Link>
              <Link href={'#'}>Interodonto</Link>
              <Link href={'#'}>Unimed Odonto</Link>
              <Link href={'#'}>Uniodonto</Link>
              <Link href={'#'}>SulAmérica Odonto</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Assine nossa newsletter</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Seu email'}
                  bg={useColorModeValue('blackAlpha.500', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('white', 'white')}
                  color={useColorModeValue('#013F7A', '#013F7A')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label="Inscreva-se"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }