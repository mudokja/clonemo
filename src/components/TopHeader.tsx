"use client"
import { Box, Flex, Spacer, useColorModeValue } from '@chakra-ui/react'
import ColorModeButton from './ColorModeButton';
import Image from 'next/image';
import clonemosvg from 'public/clonemo.svg'
import { useRouter } from 'next/navigation';
import TextSearch from './TextSearch';

const TopHeader =()=>{
    const logoColor = useColorModeValue('100','0')
    const router = useRouter()
    console.log('상단 헤더 호출됨');
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
        <Box><TextSearch/></Box>
        <Spacer />
        <Box>로그인</Box>
        <ColorModeButton/>
        </Flex>
    </Box>
    )
}

export default TopHeader;