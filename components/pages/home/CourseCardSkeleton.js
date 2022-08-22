import { Box, GridItem, Skeleton, SkeletonText } from '@chakra-ui/react'

const CourseCardSkeleton = ({ num }) => {
    return (
        <>
            {[...Array(num).keys()].map((_, idx) => (
                <GridItem key={idx}>
                    <Box
                        bg='white'
                        shadow='md'
                        borderRadius='10px'
                        overflow='hidden'
                    >
                        <Skeleton height='200' />

                        <Box p='4' pb='8'>
                            <SkeletonText mt='4' noOfLines={3} spacing='4' />
                        </Box>
                    </Box>
                </GridItem>
            ))}
        </>
    )
}

export default CourseCardSkeleton
