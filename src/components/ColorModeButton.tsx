"use client";

import {
    Button,
    useColorMode,
    useColorModeValue,
    ButtonProps
  } from "@chakra-ui/react"
  
export default function ColorModeButton() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
    )
  }