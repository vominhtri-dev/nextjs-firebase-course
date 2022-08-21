import { Button, FormControl, FormLabel } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import SingleInput from './SingleInput'

const MultibleInput = ({ label, inputList, setInputList }) => {
    const [visible, setVisible] = useState(false)

    // Check some field is empty disable button
    useEffect(() => {
        const isEmpty = inputList.some((inp) => inp === '')
        setVisible(isEmpty && inputList.length > 1)
    }, [inputList])

    // on value of the input change
    const handleValueChange = ({ id, value }) => {
        const newData = inputList.map((inp, idx) => {
            if (idx === id) {
                return value
            }
            return inp
        })
        setInputList(newData)
    }

    // Handle add new input
    const handleAddInput = () => {
        setInputList((prev) => [...prev, ''])
    }

    // Handle add new input
    const handleValueRemove = (valueId) => {
        const filterValue = inputList.filter((_, idx) => idx !== valueId)
        setInputList(filterValue)
    }

    return (
        <FormControl>
            <FormLabel>{label || 'Trường không tên'}</FormLabel>

            {inputList.map((input, idx) => (
                <SingleInput
                    key={idx}
                    id={idx}
                    val={input}
                    onValueChange={handleValueChange}
                    onValueRemove={handleValueRemove}
                />
            ))}
            <Button
                mt='2'
                size='sm'
                w='full'
                disabled={visible}
                onClick={handleAddInput}
            >
                Thêm trường
            </Button>
            {/* <Button
				mt='2'
				size='sm'
				w='full'
				onClick={() => console.log(inputList)}
			>
				xem
			</Button> */}
        </FormControl>
    )
}

export default MultibleInput
