'use client';

import { Textarea, Text, Container, Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

export default function PostForm() {
  const [value, setValue] = useState('')

  const handleInputChange = (e: { target: { value: any; }; }) => {
    const inputValue = e.target.value
    setValue(inputValue)
  }
  return (
    <Box maxW='md' pos={'sticky'} left={300} top={500}>
    <Text fontSize='md'>
      임시 form 영역
    </Text>
    <Text mb='8px'>Value: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='500자 미만으로 입력하세요'
        size='sm'
      />   
    </Box>
  )
}