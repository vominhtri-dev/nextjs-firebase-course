import { Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const HrWithText = ({ text }) => {
	return (
		<Flex justifyContent='center' alignItems='center' w='full' h='10'>
			<Text bg='white' zIndex='2' px='2' pos='absolute'>
				{text || 'Hoặc'}
			</Text>
			<Divider orientation='horizontal' />
		</Flex>
	)
}

export default HrWithText
