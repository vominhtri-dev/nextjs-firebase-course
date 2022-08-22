import {
    GridItem,
    Skeleton,
    Square,
    useBreakpointValue,
} from '@chakra-ui/react'
import React from 'react'

const CategorySkeleton = ({ num }) => {
    const breakPoint = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 5 })

    return (
        <>
            {[...Array(num).keys()].map(
                (_, idx) =>
                    idx < breakPoint && (
                        <GridItem
                            key={idx}
                            cursor='pointer'
                            colSpan={['15', '7', '5', '3']}
                            pr='2'
                            rounded='sm'
                        >
                            <Square h='full'>
                                <Skeleton height='30px' w='full' />
                            </Square>
                        </GridItem>
                    )
            )}
        </>
    )
}

export default CategorySkeleton
