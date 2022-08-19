import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Select,
} from '@chakra-ui/react'
import { Field } from 'formik'
import React from 'react'

const CusSelect = ({ name, label, textHolder, validate, options }) => {
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
					<Select
						{...field}
						placeholder={
							textHolder || 'Vui lòng điền vào trường này'
						}
						id={name}
					>
						{options.length > 0 &&
							options.map((opt) => (
								<option value={opt?.value} key={opt?.value}>
									{opt?.title}
								</option>
							))}
					</Select>

					<FormErrorMessage>{form.errors[name]}</FormErrorMessage>
				</FormControl>
			)}
		</Field>
	)
}

export default CusSelect
