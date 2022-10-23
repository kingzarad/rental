import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript,Link } from '@chakra-ui/react'
import theme from '../hooks/theme/theme'


export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <title>CSUCC Rental</title>
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}