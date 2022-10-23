import { UserLayout, AdminLayout } from '../components/common/Layout'
import Page from '../components/common/Page';
import React, { useState, useEffect } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Container,
  Stack,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import { HeroCarousel, Card } from '../components/sections';
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../redux/action/counter/creator'

export function index(props) {
  console.log(props);
  return (
    <Page
      title='CSUCC Rental'
      description='CSUCC Rental that offer services and place to rent'
      url='https://localhost:3000'
      keywords='CSUCC, Rental, CSUCC Rental'

    >
      <Box sx={{ position: 'relative' }}>
        <HeroCarousel />
        <Box 
        
        _before={{
          content: '""',
          position: 'absolute',
          left: '0',
          right: '0',
          bottom: '-5',
          height: '30px',
          backdropFilter: 'blur(50px)',
          bg: useColorModeValue('gray.600', 'gray.600'),
          transform: 'skewY(1deg)'
        }} />
      </Box>

      <Container as={Stack} maxW={'8xl'} >
        <Card />

      </Container>
    </Page>

  )
}

index.Layout = UserLayout;

const mapStateToProps = (state) => ({
  data: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  increment: (int) => dispatch(incrementCounter('INCREMENT', { count: int })),
  decrement: (int) => dispatch(decrementCounter('DECREMENT', { count: int }))
})

export default connect(mapStateToProps, mapDispatchToProps)(index)