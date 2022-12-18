'use client'
import { background, Box, Button, Divider, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex,Spacer,Text, useDisclosure } from "@chakra-ui/react";
import React,{useRef, useState} from "react";


const NavSide=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <Button colorScheme='teal' onClick={onOpen}>
            Open
        </Button>
        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='5px'>
            <Button colorScheme='teal' onClick={onClose}>
             Close
            </Button>
          </DrawerHeader>
          <DrawerBody>
          <Flex width={['2xs','xs','sm']} height={'md'} direction={"column"} backgroundColor={'gray.100'}_dark={{backgroundColor:'gray.700'}} borderRight={"1px"}>
            <Text fontSize={['sm','md']}>
            주제 목록(예정)
            </Text>
            <Divider variant={'nav1'}/>
            <Text fontSize={['sm','md']}>
            주제 목록(예정)
            </Text>
            <Divider variant={'nav1'}/>
            <Text fontSize={['sm','md']}>
            주제리스트(예정)
            </Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
        </Drawer>
    </>
    )
}

export default NavSide;