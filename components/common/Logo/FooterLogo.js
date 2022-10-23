
import Image from 'next/image'
import {
    useColorMode
} from '@chakra-ui/react';

const FooterLogo = (props) => {
    const { colorMode } = useColorMode();
    return (
        <>
            {colorMode === 'light' ?
                <Image src="/images/logo/logocsucc-light.png" alt="me" width="280" height="100" objectFit='contain' />
                :
                <Image src="/images/logo/logocsucc-night.png" alt="me" width="280" height="100" objectFit='contain' />
            }
        </>
    );
};

export default FooterLogo;