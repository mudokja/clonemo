'use client';

import { Textarea, Text, Flex, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import PostForm from "../../../components/PostForm";

export default function Page() {
  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <PostForm/>
    </Flex>
  )
}