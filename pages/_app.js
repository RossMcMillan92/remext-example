import { createContext, useContext, useState } from 'react'
import { ActionDataContextProvider } from 'remext'

function MyApp({ Component, pageProps: { ...pageProps } = {} }) {
  return (
    <ActionDataContextProvider pageProps={pageProps} Component={Component} />
  )
}

export default MyApp
