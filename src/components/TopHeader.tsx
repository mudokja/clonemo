"use client"
import { Box, Flex, Spacer, useColorModeValue } from '@chakra-ui/react'
import ColorModeButton from './ColorModeButton';
import Image from 'next/image';
import clonemosvg from 'public/clonemo.svg'
import { useRouter } from 'next/navigation';

const TopHeader =()=>{
    const logoColor = useColorModeValue('100','0')
    const router = useRouter()
    console.log('호출됨');
    const handleLogoClick = () => {
        router.push('/');
    }
    return(
    <Box>
        <Flex>
        <Box as='button' onClick={handleLogoClick} w='150px' h='50px'>
            <Image alt={'logo'} src={clonemosvg} priority style={{filter:`invert(${logoColor}%)`}} />
        </Box>
        <Spacer />
        <Box>뭔가있음</Box>
        <Spacer />
        <Box>로그인</Box>
        <ColorModeButton/>
        </Flex>
    </Box>
    )
}

export default TopHeader;