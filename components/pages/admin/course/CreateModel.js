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
	Flex,
} from '@chakra-ui/react'
import {
	addDoc,
	collection,
	getDocs,
	orderBy,
	query,
	serverTimestamp,
	where,
} from 'firebase/firestore'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../../../firebase.config'
import { getTrigger } from '../../../../redux/slice/categorySlice'
import CusInput from '../../../Form/CusInput'
import CusSelect from '../../../Form/CusSelect'

import { AddIcon } from '@chakra-ui/icons'
import { LIST_LEVEL } from '../../../../helper/level'
import { addCategory } from '../../../../redux/slice/adminCategorySlice'
import { useEffect, useState } from 'react'
import CusDropFile from '../../../Form/CusDropFile'
import MultibleInput from '../../../Form/MultibleInput'
const slugify = require('slugify')

const CreateModel = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const dispatch = useDispatch()
	const toast = useToast()
	const [thumbnail, setThumbnail] = useState(null)
	const [banner, setBanner] = useState(null)
	const [thumbnailError, setThumbnailError] = useState(false)
	const [bannerError, setBannerError] = useState(false)
	const { categorys, trigger } = useSelector((sta) => sta.adminCategory)
	const { currentUser } = useSelector((sta) => sta.auth)
	const [listInclude, setListInclude] = useState([])

	// Get list category
	useEffect(() => {
		async function getAdminCategory() {
			try {
				if (categorys.length > 0) return
				const q = query(
					collection(db, 'category'),
					orderBy('createdAt', 'desc')
				)
				const rawDocs = await getDocs(q)
				const data = rawDocs.docs.map((doc) => ({
					_id: doc.id,
					...doc.data(),
				}))
				dispatch(addCategory(data))
			} catch (error) {
				console.log(error)
			}
		}
		getAdminCategory()
	}, [trigger, dispatch])

	// Init value in form
	const init = {
		values: {
			title: '',
			priceValue: 0,
			discountPrice: 0,
			priceSellExp: '',
			level: '',
			category: '',
		},
		validate: {
			validTitle(value) {
				let error
				if (!value.trim()) {
					error = 'Tên không được bỏ trống'
				}
				return error
			},
			validLevel(value) {
				let error
				if (!value.trim()) {
					error = 'Trình độ không được bỏ trống'
				}
				return error
			},
			validCategory(value) {
				let error
				if (!value.trim()) {
					error = 'Danh mục không được bỏ trống'
				}
				return error
			},
			validPriceValue(value) {
				let error
				if (!value) {
					error = 'Giá tiền không được bỏ trống'
				}

				if (isNaN(value)) {
					error = 'Giá tiền không phải là số'
				}
				return error
			},
			validThumbnail(value) {
				let error
				if (!value.trim()) {
					error = 'Hình đại diện không được bỏ trống'
				}
				return error
			},
			valid(value) {
				let error
				if (!value.trim()) {
					error = 'Danh mục không được bỏ trống'
				}
				return error
			},
		},
	}

	// funtion submit form
	const handleSubmit = async (values, actions) => {
		try {
			const { displayName, uid, photoURL } = currentUser
			const slug = slugify(values.title.trim().toLowerCase())

			// Check slug exist
			const q = query(
				collection(db, 'courses'),
				where('slug', '==', slug)
			)

			const isCourseExist = await getDocs(q)
			if (isCourseExist.docs.length > 0) {
				toast({
					title: 'Tạo thất bại',
					description: 'Khóa học đã tồn tại',
					status: 'error',
					duration: 2000,
					position: 'top-right',
					isClosable: true,
				})
				return
			}

			// Check List Include course
			const listIncludeWithOutEmpty = listInclude.filter(
				(inp) => inp !== ''
			)
			// console.log(listIncludeWithOutEmpty)
			// Image check
			if (thumbnail === null) setThumbnailError(true)
			if (banner === null) setBannerError(true)
			if (thumbnail && banner) {
				console.log('clear')
			}
			// Create doc
			return
			await addDoc(collection(db, 'courses'), {
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

	// Get file form cusDropFile
	const handleChoseThumnail = (data) => {
		if (data !== null) setThumbnailError(false)
		setThumbnail(data)
	}
	const handleChoseBanner = (data) => {
		if (data !== null) setBannerError(false)
		setBanner(data)
	}

	return (
		<Box>
			<Button
				onClick={onOpen}
				size='sm'
				colorScheme='teal'
				leftIcon={<AddIcon />}
			>
				Thêm khóa học
			</Button>

			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered
				closeOnOverlayClick={false}
				size='5xl'
			>
				<ModalOverlay />
				<ModalContent pb='4'>
					<ModalHeader>Thêm khóa học</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Formik
							initialValues={init.values}
							onSubmit={handleSubmit}
						>
							{(props) => (
								<Form>
									<Flex>
										<Box w='49%' mr='1%'>
											<CusInput
												label='Tên khóa học'
												name='title'
												validate={
													init.validate.validTitle
												}
												textHolder='Nhập tên khóa học'
											/>

											<CusSelect
												label='Chọn trình độ'
												name='level'
												validate={
													init.validate.validLevel
												}
												textHolder='Chọn trình độ'
												options={LIST_LEVEL}
											/>

											<CusSelect
												label='Chọn danh mục'
												name='category'
												validate={
													init.validate.validCategory
												}
												textHolder='Chọn danh mục'
												options={categorys?.map(
													(cate) => ({
														value: cate._id,
														title: cate.title,
													})
												)}
											/>
											<CusInput
												label='Giá khóa học'
												name='priceValue'
												type='number'
												validate={
													init.validate
														.validPriceValue
												}
												textHolder='Nhập Giá khóa học'
											/>

											<MultibleInput
												label='Khóa học bao gồm'
												textHolder='Nhập khóa học bao gồm'
												inputList={listInclude}
												setInputList={setListInclude}
											/>
										</Box>
										<Box w='49%' ml='1%'>
											<CusDropFile
												name='thumbnail'
												label='Chọn ảnh đại diện'
												onchageFile={
													handleChoseThumnail
												}
												onErr={thumbnailError}
											/>
											<CusDropFile
												name='banner'
												label='Chọn ảnh bìa'
												onchageFile={handleChoseBanner}
												onErr={bannerError}
											/>
										</Box>
									</Flex>

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
