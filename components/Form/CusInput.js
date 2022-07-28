import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from '@chakra-ui/react'
import { Field } from 'formik'
import React from 'react'

const CusInput = ({ name, label, textHolder, validate, type }) => {
	return (
		<Field name={name} validate={validate}>
			{({ field, form }) => (
				<FormControl
					isInvalid={form.errors[name] && form.touched[name]}
					my='2'
				>
					<FormLabel htmlFor={name}>
						{label || 'Trường không tên'}
					</FormLabel>

					<Input
						type={type || 'text'}
						{...field}
						id={name}
						placeholder={
							textHolder || 'Vui lòng điền vào trường này'
						}
					/>
					<FormErrorMessage>{form.errors[name]}</FormErrorMessage>
				</FormControl>
			)}
		</Field>
	)
}

export default CusInput
