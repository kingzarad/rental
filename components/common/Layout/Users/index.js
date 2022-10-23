import React from 'react'
import { Footer } from './Footer/footer'
import NavTwo from './Nav/nav1'
import { Container, Stack, Box, useColorModeValue } from '@chakra-ui/react'

export const UserLayout = ({ children }) => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} w={'100%'}>
      <NavTwo />
      {children}
      <Footer />
    </Box>
  )
}
