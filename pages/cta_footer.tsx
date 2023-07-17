import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'

export default function CtaFooter () {
  return(
    <Box as="section" bg="bg.surface">
    <Container py={{ base: '16', md: '24' }} maxW={{ base: 'md', md: '6xl' }}>
      <Stack spacing={{ base: '8', md: '10' }}>
        <Stack spacing={{ base: '4', md: '5' }} align="center" >
          <Heading size={{ base: 'xl', md: '2xl' }} textAlign="center" >Investir na saúde é cuidar do futuro.</Heading>
          <Text color="fg.muted" maxW="6xl" textAlign="center" fontSize="xl">
          Sua saúde é prioridade. Contrate um plano de saúde e garanta tranquilidade e segurança para você e sua família. Não perca mais tempo, entre em contato com um de nossos consultores e comece a desfrutar dos benefícios de um plano de saúde agora mesmo.
          </Text>
        </Stack>
        <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center">
        <Button
                  mt={10}
                  w={{base: 'full', md:'md'}}
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
                  Obter Cotação
                </Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
  )
}