import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

const SingleInput = ({ textHolder, onValueChange, onValueRemove, id }) => {
	// const [IsType, setIsType] = useState(false)
	// const [inputValue, setInputValue] = useState('')

	const handleChageInput = (e) => {
		// setIsType(e.target.value.trim() !== '')
		// setInputValue(e.target.value.trim())
	}

	const AddInput = () => {
		// handleAddInput({ id, value: inputValue })
		// handleAddInput({ value: inputValue, id })
	}

	const RemoveInput = () => {
		// handleAddInput(['add', id])
	}

	return (
		<HStack py='2'>
			<Input
				placeholder={textHolder || 'Vui lòng điền vào trường này'}
				onChange={(e) =>
					onValueChange({ id, value: e.target.value.trim() })
				}
			/>
			<IconButton
				colorScheme='teal'
				// disabled={!IsType}
				icon={<AddIcon />}
				onClick={AddInput}
			/>
			<IconButton
				colorScheme='red'
				onClick={() => onValueRemove(id)}
				icon={<MinusIcon />}
			/>
		</HStack>
	)
}

export default SingleInput
