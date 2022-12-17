'use client';

import { Textarea, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function PostForm() {
  let [value, setValue] = useState('')

  let handleInputChange = (e: { target: { value: any; }; }) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  return (
    <>
      <Text mb='8px'>Value: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
    </>
  )
}