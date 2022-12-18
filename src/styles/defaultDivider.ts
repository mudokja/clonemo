import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const nav1 = defineStyle({
    borderWidth: '3px', // change the width of the border
    borderStyle: "solid", // change the style of the border
    borderColor: "black",
    borderRadius: 3,

    _dark: {
        borderColor: 'white',
    }
})

export const dividerTheme = defineStyleConfig({
    variants: { nav1 },
})