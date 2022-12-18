'use client'
import { background, Box, Button, Divider, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex,Spacer,Text, useDisclosure } from "@chakra-ui/react";
import React,{useRef, useState} from "react";
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu'

const NavSide=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <Button colorScheme='gray' onClick={onOpen}>
            <GiHamburgerMenu/>
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
          <Flex width={['2xs','xs','sm']} height={'md'} direction={"column"} borderRight={"1px"}>
            <Text fontSize={['sm','md']}>
            뭔가있을예정
            </Text>
            <Divider variant={'nav1'}/>
            <Text fontSize={['sm','md']}>
            주제 목록(예정)
            </Text>
            <Divider variant={'nav1'}/>
            <Text fontSize={['sm','md']}>
            주제리스트(예정)
            </Text>
            이걸로 만들면 안되는거였는데...
            </Flex>
          </DrawerBody>
        </DrawerContent>
        </Drawer>
    </>
    )
}

export default NavSide;