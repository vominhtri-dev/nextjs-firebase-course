import { StarIcon } from '@chakra-ui/icons'
import { HStack } from '@chakra-ui/react'
import React from 'react'

const RenderStar = ({ star: userStarChose }) => {
    return (
        <HStack>
            {[...Array(5).keys()].map((star, idx) => (
                <StarIcon
                    key={idx}
                    color={`yellow.${star < userStarChose ? '400' : '200'}`}
                    fontSize='xs'
                />
            ))}
        </HStack>
    )
}

export default RenderStar
