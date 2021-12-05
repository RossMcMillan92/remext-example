import { RemextContextProvider } from 'remext'

function MyApp({ Component, pageProps: { ...pageProps } = {} }) {
  return <RemextContextProvider pageProps={pageProps} Component={Component} />
}

export default MyApp
