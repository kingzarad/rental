import React from 'react'
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import FooterLogo from '../../../Logo/FooterLogo'



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};
export function Footer() {
  return (
    <Box
      sx={{ position: 'relative' }}
      bg={useColorModeValue('white', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Box _before={{
        content: '""',
        position: 'absolute',
        top:'-5',
        left: '0',
        right: '0',
        
        height: '30px',
        bg: useColorModeValue('white', 'gray.900'),
        transform: 'skewY(-1deg)'
      }} />
      <Container as={Stack} maxW={['10xl', '8xl']} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <FooterLogo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © 2022 CSUCC Rental. All rights reserved
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link href={'#'}>Overview</Link>
            <Link href={'#'}>Features</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Contact</Link>

          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Instagram</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
