'use client';

import { Box, Flex } from "@chakra-ui/react";
import NavSide from "../components/NavSide";

export default function HomeaPage() {
  return (
    <main>
      <Flex >
        <NavSide/>
        <Box>
        엉엉 이게뭐야
        </Box>
      </Flex>
    </main>
  )
}