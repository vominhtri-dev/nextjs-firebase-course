import { MinusIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Input } from '@chakra-ui/react'

const SingleInput = ({ textHolder, onValueChange, onValueRemove, id, val }) => {
	const handleChangeInput = (e) => {
		const value = e.target.value.trim()
		onValueChange({ id, value })
	}

	return (
		<HStack py='2'>
			<Input
				placeholder={textHolder || 'Vui lòng điền vào trường này'}
				value={val}
				onChange={handleChangeInput}
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
