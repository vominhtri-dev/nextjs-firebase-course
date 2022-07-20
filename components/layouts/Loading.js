import { Box, Spinner } from "@chakra-ui/react"
import React from "react"

const Loading = () => {
    return (
        <Box
            w='full'
            h='100vh'
            display='flex'
            bg='ghostwhite'
            alignItems='center'
            justifyContent='center'
        >
            <Spinner speed='0.65s' color='blue.500' size='xl' />
        </Box>
    )
}

export default Loading
