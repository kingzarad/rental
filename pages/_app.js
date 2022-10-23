
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { Provider } from "react-redux";
import { wrapper } from '../redux/store'
import { theme } from '../hooks/theme/theme';

const MyApp = ({ Component, ...rest }) => {
  const Layout = Component.Layout || EmptyLayout;
  const [showChild, setShowChild] = useState(false)
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  return (
    <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
    </Provider>

  )
}
const EmptyLayout = ({ children }) => <>{children}</>

export default MyApp