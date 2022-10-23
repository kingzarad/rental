
import Image from 'next/image'
import { Link, Flex, useColorMode } from '@chakra-ui/react'
const Logo = (props) => {
    const { colorMode } = useColorMode();
    return (
        <Flex display={{ base: 'none', md: 'flex' }} >
            {colorMode === 'light' ?
                <Link href={'/'}>
                    <Image src="/images/logo/logocsucc-light.png" alt="csucc-rental-logo" width="250" height="50" objectFit='contain' />
                </Link>
                :
                <Link href={'/'}>
                    <Image src="/images/logo/logocsucc-night.png" alt="csucc-rental-logo" width="250" height="50" objectFit='contain' />
                </Link>}
        </Flex>
    );
};

export default Logo;