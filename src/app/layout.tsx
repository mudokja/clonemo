"use client"
import { ChakraProvider } from '@chakra-ui/react'
import TopHeader from '../components/TopHeader';
import theme from '../styles/theme'

export default function RootLayout({ children }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="kr">
        <body>
        <ChakraProvider theme={theme}>
          <TopHeader/>
          {children}
        </ChakraProvider>
        </body>
      </html>
    );
  }