import { Skeleton, Td, Tr } from '@chakra-ui/react'
import React from 'react'

const TdSkeleton = ({ row, col }) => {
	const createArray = (dir) => [...Array(dir).keys()]

	return (
		<>
			{createArray(row).map((_, idx) => (
				<Tr key={idx}>
					{createArray(col).map((_, jdx) => (
						<Td key={jdx}>
							<Skeleton height='20px' w='full' />
						</Td>
					))}
				</Tr>
			))}
		</>
	)
}

export default TdSkeleton
