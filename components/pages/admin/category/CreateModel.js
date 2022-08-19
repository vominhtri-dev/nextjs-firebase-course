import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Box,
	Button,
	useToast,
} from '@chakra-ui/react'
import {
	addDoc,
	collection,
	getDocs,
	query,
	serverTimestamp,
	where,
} from 'firebase/firestore'
import { Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { db } from '../../../../firebase.config'
import { getTrigger } from '../../../../redux/slice/adminCategorySlice'
import CusInput from '../../../Form/CusInput'
import { AddIcon } from '@chakra-ui/icons'
const slugify = require('slugify')

const CreateModel = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const dispatch = useDispatch()
	const toast = useToast()

	// Init value in form
	const init = {
		values: {
			title: '',
		},
		validate: {
			validTitle(value) {
				let error
				if (!value.trim()) {
					error = 'Tên không được bỏ trống'
				}
				return error
			},
		},
	}

	// funtion submit form
	const handleSubmit = async (values, actions) => {
		try {
			const slug = slugify(values.title.trim().toLowerCase())

			const q = query(
				collection(db, 'category'),
				where('slug', '==', slug)
			)

			const data = await getDocs(q)
			if (data.docs.length > 0) {
				toast({
					title: 'Tạo thất bại',
					description: 'Danh mục đã tồn tại',
					status: 'error',
					duration: 2000,
					position: 'top-right',
					isClosable: true,
				})
				return
			}

			await addDoc(collection(db, 'category'), {
				title: values.title,
				slug,
				createdAt: serverTimestamp(),
			})

			dispatch(getTrigger())
			toast({
				title: 'Tạo thành công',
				status: 'success',
				duration: 2000,
				position: 'top-right',
				isClosable: true,
			})
			actions.resetForm()
			actions.setSubmitting(false)
			onClose()
		} catch (error) {
			toast({
				title: 'Tạo thất bại',
				description: error.code,
				status: 'error',
				duration: 2000,
				position: 'top-right',
				isClosable: true,
			})
		}
	}

	return (
		<Box>
			<Button
				onClick={onOpen}
				size='sm'
				colorScheme='teal'
				leftIcon={<AddIcon />}
			>
				Thêm danh mục
			</Button>

			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered
				closeOnOverlayClick={false}
			>
				<ModalOverlay />
				<ModalContent pb='4'>
					<ModalHeader>Thêm danh mục</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Formik
							initialValues={init.values}
							onSubmit={handleSubmit}
						>
							{(props) => (
								<Form>
									<CusInput
										label='Tên danh mục'
										name='title'
										validate={init.validate.validTitle}
										textHolder='Nhập tên danh mục'
									/>

									<Button
										mt={4}
										w='full'
										colorScheme='green'
										isLoading={props.isSubmitting}
										type='submit'
									>
										Tạo danh mục
									</Button>
								</Form>
							)}
						</Formik>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default CreateModel
