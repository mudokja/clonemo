'use client'
import { background, Box, Divider, Flex,Spacer,Text } from "@chakra-ui/react";


const NavSide=()=>{
    
    return(
        <Flex width={'ssm'} height={'md'} direction={"column"} backgroundColor={'gray.100'}_dark={{backgroundColor:'gray.700'}} borderRight={"1px"}>
            <Text fontSize='md'>
            주제 목록(예정)
            </Text>
            <Divider variant={'nav1'}/>
            <Text fontSize='md'>
            주제 목록(예정)
            </Text>
            <Divider variant={'nav1'}/>
            <Text fontSize='md'>
            주제리스트(예정)
            </Text>
        </Flex>
    )
}

export default NavSide;