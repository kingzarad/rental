import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Container,
    colorMode,
    toggleColorMode,
    useColorMode,
    InputGroup,
    Input,
    InputRightElement,
    Divider,
    Center
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { BsMoonStars, BsFillBrightnessHighFill, BsSearch } from 'react-icons/bs'
import NAV_ITEMS from '../Menu/menu';
import navStyles from "./navbar.module.css";
import Logo from '../../../Logo/Logo';

export default function NavTwo() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div className={navStyles.mobileNav}>
            <Box
                maxW={'100%'}
                bg={useColorModeValue('gray.50', 'gray.900')}
                sx={{
                    backdropFilter: 'blur(50px)'
                }}
            >
                <Container as={Stack} maxW={['10xl', '8xl']} >
                    <Flex

                        color={useColorModeValue('gray.600', 'white')}
                        minH={'80px'}
                        py={{ base: 2 }}
                        px={{ base: 4 }}
                        align={'center'}>
                        <Flex
                            flex={{ base: 1, md: 'auto' }}
                            ml={{ base: -2 }}
                            display={{ base: 'flex', md: 'none' }}>
                            <IconButton
                                onClick={onToggle}
                                icon={
                                    isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                                }
                                variant={'ghost'}
                                aria-label={'Toggle Navigation'}
                            />
                        </Flex>
                        <Flex flex={{ base: 1 }} justify={{ base: 'left', md: 'start' }}>
                            <Logo />

                            <Flex display={{ base: 'none', md: 'flex' }} mt={4} ml={10}>
                                <DesktopNav />
                            </Flex>
                        </Flex>

                        <Stack
                            flex={{ base: 1, md: 0, sm: 50 }}
                            justify={{ base: 'flex-end', md: 'flex-start' }}
                            direction={'row'}
                            spacing={[3, 8]}>
                            <InputGroup
                                w={{ base: '15rem', sm: '20rem', md: '20rem', lg: '30rem' }}
                                bg={useColorModeValue("gray.100", "gray.900")}
                                size='md'
                            >
                                <Input
                                    borderRadius={0}
                                    placeholder={"Search "}
                                    bg={useColorModeValue("gray.50", "gray.800")}
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
                                <InputRightElement w='3rem'>
                                    <Button
                                        size='sm'
                                        borderRadius={3}
                                        bg={"teal.400"}
                                        _hover={{
                                            bg: 'teal.300',
                                        }} >
                                        <BsSearch color='white' />
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Center height='30px' p={0} m={0} display={{ base: 'none', md: 'inline-flex' }}>
                                <Divider orientation='vertical' />
                            </Center>
                            <Button
                                as={'a'}
                                fontSize={'sm'}
                                display={{ base: 'none', md: 'inline-flex' }}
                                fontWeight={400}

                                variant={'link'}
                                href={'/u/sign-in'}>
                                Sign In
                            </Button>
                            <Button
                                as={'a'}
                                display={{ base: 'none', md: 'inline-flex' }}
                                fontSize={'sm'}
                                borderRadius={3}
                                fontWeight={600}
                                color={'white'}
                                bg={'teal.400'}
                                href={'/u/sign-up'}
                                _hover={{
                                    bg: 'teal.300',
                                }}>
                                Sign Up
                            </Button>
                            <Button
                                variant='ghost'

                                onClick={toggleColorMode}>
                                {colorMode === 'light' ?
                                    <BsMoonStars />
                                    :
                                    <BsFillBrightnessHighFill />}
                            </Button>
                        </Stack>
                    </Flex>

                    <Collapse in={isOpen} animateOpacity>
                        <MobileNav />
                    </Collapse>
                </Container>
            </Box>
        </div>

    );

}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href}
                                fontSize={'sm'}
                                fontWeight={500}
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
}
const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
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
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
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
            <Flex flexDir={"column"} gap={4}>
                <Link href='/u/sign-in' p={3} borderRadius={8} bg={useColorModeValue('teal.400', 'teal.500')} color={useColorModeValue('white', 'white')}>Sign-in</Link>
                <Link href='/u/sign-up' p={3} borderRadius={8} bg={useColorModeValue('teal.400', 'teal.500')} color={useColorModeValue('white', 'white')}>Sign-up</Link>
            </Flex>
        </Stack>
    );
}

const MobileNavItem = ({ label, children, href }) => {
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

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important', marginBottom: '10px' }}>
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

