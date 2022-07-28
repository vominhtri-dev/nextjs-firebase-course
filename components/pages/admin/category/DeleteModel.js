import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	useDisclosure,
	useToast,
} from '@chakra-ui/react'
import { deleteDoc, doc } from 'firebase/firestore'
import { useRef } from 'react'
import { db } from '../../../../firebase.config'
import { useDispatch } from 'react-redux'
import { getTrigger } from '../../../../redux/slice/categorySlice'
import { DeleteIcon } from '@chakra-ui/icons'

const DeleteModel = ({ cate }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const cancelRef = useRef()
	const dispatch = useDispatch()
	const toast = useToast()

	const handleDelete = async () => {
		await deleteDoc(doc(db, 'category', cate._id))
		dispatch(getTrigger())

		try {
			toast({
				title: 'Xóa thành công',
				status: 'success',
				duration: 2000,
				position: 'top-right',
				isClosable: true,
			})
		} catch (error) {
			toast({
				title: 'Xóa thất bại',
				description: error,
				status: 'error',
				duration: 2000,
				position: 'top-right',
				isClosable: true,
			})
		}
	}

	return (
		<>
			<Button
				size='sm'
				colorScheme='red'
				onClick={onOpen}
				variant='ghost'
			>
				<DeleteIcon />
			</Button>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize='lg' fontWeight='bold'>
							Xóa danh mục {cate.title}
						</AlertDialogHeader>

						<AlertDialogBody>
							Bạn có chắc không? Bạn không thể hoàn tác hành động
							này sau đó.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Thoát
							</Button>
							<Button
								colorScheme='red'
								onClick={handleDelete}
								ml={3}
							>
								Xóa
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	)
}

export default DeleteModel
