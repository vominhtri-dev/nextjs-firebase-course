import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	useToast,
	Tooltip,
} from '@chakra-ui/react'
import {
	collection,
	doc,
	getDocs,
	query,
	serverTimestamp,
	updateDoc,
	where,
} from 'firebase/firestore'
import { Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { db } from '../../../../firebase.config'
import { getTrigger } from '../../../../redux/slice/adminCategorySlice'
import CusInput from '../../../Form/CusInput'
import { EditIcon } from '@chakra-ui/icons'
const slugify = require('slugify')

const UpdateModel = ({ cate }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const dispatch = useDispatch()
	const toast = useToast()

	// Init value in form
	const init = {
		values: {
			title: cate?.title,
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
					title: 'Sửa thất bại',
					description: 'Danh mục đã tồn tại',
					status: 'error',
					duration: 2000,
					position: 'top-right',
					isClosable: true,
				})
				return
			}

			await updateDoc(doc(db, 'category', cate._id), {
				title: values.title,
				slug,
				createdAt: serverTimestamp(),
			})

			dispatch(getTrigger())
			toast({
				title: 'Sửa thành công',
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
				title: 'Sửa thất bại',
				description: error.code,
				status: 'error',
				duration: 2000,
				position: 'top-right',
				isClosable: true,
			})
		}
	}

	return (
		<>
			<Tooltip label='Sửa danh mục' fontSize='sm'>
				<Button
					onClick={onOpen}
					size='sm'
					ml='2'
					colorScheme='messenger'
					variant='ghost'
				>
					<EditIcon />
				</Button>
			</Tooltip>

			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered
				closeOnOverlayClick={false}
			>
				<ModalOverlay />
				<ModalContent pb='4'>
					<ModalHeader>Sửa danh mục {cate?.title}</ModalHeader>
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
										colorScheme='teal'
										isLoading={props.isSubmitting}
										type='submit'
									>
										Sửa danh mục
									</Button>
								</Form>
							)}
						</Formik>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default UpdateModel
