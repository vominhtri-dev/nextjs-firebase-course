import { Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const CourseCardSkeleton = () => {
	return (
		<Box bg='white' shadow='md' borderRadius='10px' overflow='hidden'>
			<Skeleton height='200' />

			<Box p='4' pb='8'>
				<SkeletonText mt='4' noOfLines={3} spacing='4' />
			</Box>
		</Box>
	)
}

export default CourseCardSkeleton
