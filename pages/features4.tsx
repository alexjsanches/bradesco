import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import React, { useRef } from 'react';
import ModalForm from './modal';

export default function Hero() {

  const modalRef = useRef(null);

  const handleLinkClick = () => {
    if (modalRef.current) {
      modalRef.current.openModal();
    }
  };

  return (
    <Box
      maxW="5xl"
      mx="auto"
      px={{ base: '0', lg: '12' }}
      py={{ base: '0', lg: '12' }}
    >
      <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
        <Box
          width={{ base: 'full', lg: '50%' }}
          transform={{ base: 'translateY(-50%)', lg: 'none' }}
          bg={{ base: useColorModeValue('red.50', 'gray.700'), lg: 'transparent' }}
          mx={{ base: '6', md: '8', lg: '0' }}
          px={{ base: '6', md: '8', lg: '0' }}
          py={{ base: '6', md: '8', lg: '12' }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack spacing={{ base: '8', lg: '10' }}>
            <Stack spacing={{ base: '2', lg: '4' }}>
              <Heading size="xl" color={useColorModeValue('#0089de', 'red.300')}>
                Cuidar da saúde é investir no longo prazo
              </Heading>
              <Text fontSize="lg" fontWeight="normal">
                Acreditamos firmemente que investir na saúde dos colaboradores é um dos principais fundamentos para estabelecer um empreendimento bem-sucedido, altamente respeitado no mercado e valorizado por todos aqueles que são dedicados à empresa diariamente: nossos colaboradores.
              </Text>
              <Text fontSize="lg" fontWeight="normal">
                É por esse motivo que trabalhamos em estreita parceria com nossos clientes, desenvolvendo soluções personalizadas e totalmente alinhadas às suas necessidades específicas.
              </Text>
            </Stack>
            <HStack spacing="3">
              <Link
        color="#0089de"
        fontWeight="bold"
        fontSize="lg"
        onClick={handleLinkClick}
      >
        Fale com um consultor
      </Link>
      <ModalForm ref={modalRef} />
              <Icon color={useColorModeValue('#0089de', 'red.300')} as={FaArrowRight} />
            </HStack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden" display="flex" justifyContent="center" alignItems="center">
          <Image
            src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="500px"
            minW="300px"
            objectFit="cover"
          />
        </Flex>
      </Stack>
    </Box>
  );
}
