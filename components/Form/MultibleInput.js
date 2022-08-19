import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import {
	Button,
	FormControl,
	FormLabel,
	HStack,
	IconButton,
	Input,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SingleInput from './SingleInput'

const MultibleInput = ({ label }) => {
	const [inputList, setInputList] = useState([])
	const [id, setid] = useState(1)

	// on value of the input change
	const handleValueChange = (data) => {
		const newData = inputList.map((inp) => {
			if (inp.id === data.id) {
				return { ...inp, ...data }
			}
			return inp
		})
		setInputList(newData)
	}

	// Handle add new input
	const handleAddInput = () => {
		setid((prev) => prev + 1)
		setInputList((prev) => [...prev, { id, value: '' }])
	}
	// Handle add new input
	const handleValueRemove = (valueId) => {
		const filterValue = inputList.filter((inp) => inp.id !== valueId)
		setInputList(filterValue)
	}

	return (
		<FormControl>
			<FormLabel>{label || 'Trường không tên'}</FormLabel>

			{inputList.map((inp, idx) => (
				<SingleInput
					key={idx}
					id={inp.id}
					onValueChange={handleValueChange}
					onValueRemove={handleValueRemove}
				/>
			))}
			<Button mt='2' size='sm' w='full' onClick={handleAddInput}>
				Thêm
			</Button>
			<Button
				mt='2'
				size='sm'
				w='full'
				onClick={() => console.log(inputList)}
			>
				xem
			</Button>
		</FormControl>
	)
}

export default MultibleInput
