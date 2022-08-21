import { Skeleton, Td, Tr } from '@chakra-ui/react'
import React from 'react'

const TdSkeleton = ({ row, col, height = '30px' }) => {
    const createArray = (dir) => [...Array(dir).keys()]

    return (
        <>
            {createArray(row).map((_, idx) => (
                <Tr key={idx}>
                    {createArray(col).map((_, jdx) => (
                        <Td key={jdx}>
                            <Skeleton height={height} w='full' rounded='sm' />
                        </Td>
                    ))}
                </Tr>
            ))}
        </>
    )
}

export default TdSkeleton
