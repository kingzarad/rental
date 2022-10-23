import React, { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Stack,
  HStack,
  VStack,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Divider,
  Collapse
} from '@chakra-ui/react';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch, BsQuestionCircle } from "react-icons/bs";
import Link from "next/link";
import navStyles from "./navbar.module.css";


export function Nav() {
  const [show, setShow] = useState(false)

  const hideTopNav = () => {
    if (window.scrollY >= 80) {
      setShow(true);
      console.log("true")
    } else {
      setShow(false);
      console.log("false")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', hideTopNav);
  }, []);


  return (
    <div className={navStyles.mobileNav}>
      <Box bg={useColorModeValue("whiteAlpha.900", "gray.900")}>
        <HStack
          h={34}
          marginLeft={76}
          marginRight={76}
        >
          <Flex
            width={"100%"}
            flexDir={"row"}
            justifyContent={"flex-end"}
            alignItems={"center"}

          >
            <HStack as={"nav"} spacing={10}>
              <Link href="/">HELP</Link>
              <Link href="/u/login">LOGIN</Link>
              <Link href="/u/register">REGISTER</Link>
            </HStack>
          </Flex>
        </HStack>
      </Box>
      <Box bg={useColorModeValue("teal.500", "gray.900")}>
        <Flex
          h={85}
          bg="inline"
          marginLeft={76}
          marginRight={76}
          alignItems="center"
        >
          <Box width={"15rem"}>
            <Link href={"/"}><Text fontSize={35} color="white" cursor={"pointer"}>LOGO</Text></Link>
          </Box>
          <Box width={"55rem"}>
            <InputGroup bg={useColorModeValue("gray.200", "gray.900")} size='lg'>
              <Input
                borderRadius={0}
              />
              <InputRightElement width='3.5rem'>
                <Button borderRadius={0} bg={"teal.500"} >
                  <BsSearch color='white' />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
      </Box>
    </div>
  )
}
