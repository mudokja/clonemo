"use client"
import { ColorModeScript, extendTheme, useColorMode, type ThemeConfig } from "@chakra-ui/react"
import { 
  ChakraProvider, 
} from '@chakra-ui/react'
import theme from '../../styles/theme'

export default function ThemeProvider({children}: {children: React.ReactNode;
  }): JSX.Element {
    return (
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
      </ChakraProvider>
    );
  }