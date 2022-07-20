import { StarIcon } from "@chakra-ui/icons"
import { Avatar, Box, HStack, Text } from "@chakra-ui/react"
import React from "react"

const CommentItem = ({ text, username, created_at, star }) => {
    return (
        <Box py='4'>
            <HStack>
                <Avatar size='sm' />
                <Box>
                    <Text fontWeight='bold' fontSize='sm'>
                        {username}
                        <small style={{ fontWeight: 100, marginLeft: "1em" }}>
                            {created_at}
                        </small>
                    </Text>

                    <HStack>
                        <Text fontWeight='light' fontSize='xs'>
                            {star}.0
                        </Text>
                        {[...Array(5).keys()].map((idx) => (
                            <StarIcon
                                color={`yellow.${idx < star ? "400" : "200"}`}
                                fontSize='xs'
                                key={idx}
                            />
                        ))}
                    </HStack>
                </Box>
            </HStack>

            <Text fontWeight='light' mt='2'>
                {text}
            </Text>
        </Box>
    )
}

export default CommentItem
