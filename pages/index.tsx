import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Heading,
  Image,
  Icon,
  Link,
  Popover,
  Container,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Spacer,
  Accordion,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  AddIcon,
} from '@chakra-ui/icons';

import Features from './features'
import Features2 from './features2'
import Features3 from './features3'
import Features4 from './features4'
import Leadster from './leadster'
import Footer from './footer'
import AccordionHelp from './accordion';
import Form from './form'
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';


export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const handleNavigateToContact = () => {
    router.push('/footer');
  };

  const [isSticky, setIsSticky] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

return (
  <Box>
    <Flex
  
      bg={isSticky ? 'rgba(255, 255, 255, 0.7)' : 'white'}
      color={'gray.600'}
      minH={'80px'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={'gray.200'}
      align={'center'}
      position={'sticky'}
      top={0}
      zIndex={100}
      backdropFilter={isSticky ? 'blur(10px)' : 'none'}
      transition={'background-color 0.3s ease-in-out'}
    >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }} >
          <a href="#">
            <Image src="https://planohospitalar.org.br/wp-content/uploads/2020/05/logo.png" alt="Logo Hospitalar" w={220} h={41} />
          </a>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={60} // Ajuste o valor de spacing conforme necessário
        >
          <Flex align={'center'} display={{ base: 'none', sm: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>
          <Flex mr={6}>
            <Button
              rounded={'full'}
              size={'md'}
              w={'150px'}
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg='#013F7A'
              href={'#'}
              _hover={{
                bg: '#013f7ad4'
              }}
              onClick={handleNavigateToContact}
            >
              Quero uma cotação
            </Button>
          </Flex>
        </Stack>
      </Flex>
     
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                color={'white'}
                _after={{
                  content: "''",
                  width: 'full',
                  position: 'absolute',
                  bottom: 1,
                  height: 47,
                  left: 0,
                  bgGradient: 'linear(to top, #013F7A, #013f7ad4)',
                  zIndex: -1,
                  animation: 'moveRight 2s ease-in-out forwards',

                }}
              >
                Hospitalar
              </Text>


              <br />{' '}
              <Text
                as={'span'}
                bgGradient="linear(to top, #013F7A, #013f7ad4)"
                bgClip="text">
                Planos de Saúde
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Com os Planos de Saúde Hospitalar, você tem o cuidado que merece e a tranquilidade que precisa para viver com mais qualidade e bem-estar.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg="#013f7a"
                color={'white'}
                _hover={{
                  bg: '#013f7ad4',
                }}>
                Quero uma cotação
              </Button>
              <Button rounded={'full'}>Saiba mais</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            objectPosition={'right'}
            src={'https://i.imgur.com/uOKJqIB.jpg'}
          />
        </Flex>


      </Stack>

      <Features />
      
        <Features2 />
      <Features3 />
      <Features4 />
      <Box>
        <AccordionHelp />
      </Box>
      <Box>
        <Footer />
       
      </Box>
      <Box >
        <Leadster />
      </Box>

    </Box>


  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', '#013f7a');
  const linkHoverColor = useColorModeValue('#013f7a', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={8} whiteSpace={'nowrap'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'lg'}
                fontWeight={600}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};



const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: '#013f7a' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>

  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Sobre',
    children: [
      {
        label: 'A Bradesco Saúde',
        href: '#',
      },
      {
        label: 'Rede Credenciada',
        href: '#',
      },
      {
        label: 'Solicite uma cotação',
        href: '#',
      },
    ],
  },
  {
    label: 'Produtos',
    children: [
      {
        label: 'Para Você',
        subLabel: 'Coletivos por adesão',
        href: '#',
      },
      {
        label: 'Para Sua Empresa',
        subLabel: 'Planos PME e Empresarial',
        href: '#',
      },
      {
        label: 'Plano Odontológico',
        subLabel: 'Individual e Empresarial',
        href: '#',
      },
    ],
  },
  {
    label: 'Tabela de Preços',
    href: '#',
  },
  {
    label: 'Contato',
    href: '#',
  },
];