import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Container,
  Stack,
  VStack,
  FormErrorMessage
} from '@chakra-ui/react'
import { UserLayout, AdminLayout } from '../../../components/common/Layout'
import Page from '../../../components/common/Page';
import React, { useState, useEffect, useRef } from "react";
import { OTP, Address } from '../../../components/users/';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Form, Formik, Field } from "formik";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (

    <Page
      title='CSUCC Rental | Sign-up'
      description='CSUCC Rental that offer services and place to rent'
      url='https://localhost:3000'
      keywords='CSUCC, Rental, CSUCC Rental'
    >
      <Container as={Stack} maxW={'7xl'} >
        <Flex
          mt={10}
          mb={10}
          align={'center'}
          justify={'center'}

        >
          <Stack spacing={8} mx={'auto'} w={['100%', '73%']} py={0} px={3}>
            <Stack direction={['column', 'row']} align={'center'} alignItems={'center'} justifyContent={'space-between'}>
              <Heading fontSize={'3xl'} textAlign={'center'} colorScheme={['white.50', 'gray.50']}>
                Sign up
              </Heading>
              <Text fontSize={'lg'} colorScheme={['gray.50', 'gray.600']}>
                Already member? <Link color={'teal.500'} href={'/u/sign-in'}>Sign-in</Link> here.
              </Text>
            </Stack>
            <Stack
              rounded={'sm'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'lg'}
              height={{sm:'650px',md:'480px',lg:'450px'}}
              
              p={9}>

              <Stack direction={['column', 'column', 'row']} align={'center'} alignItems={'center'} spacing={10}>
                <VStack w={['100%', '100%', '50%']}>
                  <Box w={'100%'} height={{ sm: '150px', md: '150px', lg: '300px' }}>
                    <Formik
                      initialValues={{
                        name: "",
                      }}
                      onSubmit={(values) => {
                      }}
                    >
                      {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit} >
                          <FormControl mb={5} isInvalid={!!errors.name && touched.name}>
                            <FormLabel htmlFor="name">Full name*</FormLabel>
                            <Field
                              as={Input}
                              id="name"
                              name="name"
                              type="text"
                              variant="filled"
                              borderRadius={0}
                              autoComplete={'off'}
                              placeholder={"First Last"}
                              bg={useColorModeValue("white.100", "gray.800")}
                              border='1px'
                              borderColor='gray.200'
                              _focus={{
                                border: '1px solid gray',
                                bg: useColorModeValue("white", "gray.800")
                              }}
                              _hover={{
                                bg: useColorModeValue("white", "gray.800")
                              }}
                            />
                            <FormErrorMessage>{errors.name}</FormErrorMessage>
                          </FormControl>
                          <FormControl isInvalid={!!errors.password && touched.password}>
                            <FormLabel htmlFor="password">Password*</FormLabel>
                            <InputGroup
                              w={['100%']}
                              bg={useColorModeValue("gray.100", "gray.900")}
                              size='md'
                            >
                              <Field
                                as={Input}
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                variant="filled"
                                borderRadius={0}
                                autoComplete={'off'}
                                placeholder={"Minimum 6 characters with a number and letter"}
                                bg={useColorModeValue("white.100", "gray.800")}
                                border='1px'
                                borderColor='gray.200'
                                _focus={{
                                  border: '1px solid gray',
                                  bg: useColorModeValue("white", "gray.800")
                                }}
                                _hover={{
                                  bg: useColorModeValue("white", "gray.800")
                                }}
                              />
                              <InputRightElement>
                                <Button
                                  variant={'ghost'}
                                  _hover={{
                                    bg: 'transparent'
                                  }}
                                  _focus={{
                                    bg: 'transparent'
                                  }}
                                  onClick={() =>
                                    setShowPassword((showPassword) => !showPassword)
                                  }>
                                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                </Button>
                              </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>{errors.password}</FormErrorMessage>
                          </FormControl>

                        </form>
                      )}
                    </Formik>
                  </Box>
                </VStack>
                <VStack w={['100%', '100%', '50%']}>
                  <Box w={'100%'} height={{ sm: '150px', md: '150px', lg: '300px' }}>
                    <OTP />
                    <Box>
                      <Button
                        mt={5}
                        w={'100%'}
                        p={5}
                        bg={'teal.400'}
                        _hover={{
                          bg: 'teal.500'
                        }}
                        _focus={{
                          bg: 'teal.500'
                        }}
                        color={'white'}
                        borderRadius={0}
                      >SIGN UP</Button>
                    </Box>
                    <Text mt={5} color={'gray.500'}>
                      By proceeding to sign up, I acknowledge that I have read and consented to CSCUCC Rental  <Link color={'teal.500'}>Terms of Use</Link> and <Link color={'teal.500'}>Privacy Policy </Link>, which sets out how CSCUCC Rental collects, uses and discloses my personal data, and the rights that I have under applicable law.
                    </Text>
                  </Box>
                </VStack>

              </Stack>
            </Stack>
          </Stack>
        </Flex>
      </Container>
    </Page>
  )
}

Register.Layout = UserLayout;