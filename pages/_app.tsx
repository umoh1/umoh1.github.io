import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react';
import PageContent from '../components/PageContent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <PageContent component={Component} page={pageProps} />
    </ChakraProvider>
  )
}
