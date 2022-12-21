"use client"

import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";

interface Props {
    
}
 
const TextSearch= () => {
    const handleClick = () =>{console.log('검색클릭')} 
    return (
        <InputGroup>
        <Input variant='filled' placeholder='title search' />
        <InputRightElement>
        <Button h='2rem' size='sm' onClick={handleClick}>
            go
        </Button>
        </InputRightElement>
        </InputGroup>
        
    );
}
 
export default TextSearch;

