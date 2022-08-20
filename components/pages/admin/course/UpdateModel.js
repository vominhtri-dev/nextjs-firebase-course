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
    Tooltip,
} from '@chakra-ui/react'
import {
    addDoc,
    collection,
    doc,
    getDocs,
    query,
    serverTimestamp,
    updateDoc,
    where,
} from 'firebase/firestore'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../../../firebase.config'
import CusInput from '../../../Form/CusInput'
import CusSelect from '../../../Form/CusSelect'
import { EditIcon } from '@chakra-ui/icons'
import { LIST_LEVEL } from '../../../../helper/level'
import { useEffect, useState } from 'react'
import CusDropFile from '../../../Form/CusDropFile'
import MultibleInput from '../../../Form/MultibleInput'
import { getTrigger } from '../../../../redux/slice/adminCourseSlice'
const slugify = require('slugify')
import fileUpload from '../../../../helper/fileUpload'

const UpdateModel = ({ course }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const toast = useToast()
    const [thumbnail, setThumbnail] = useState(null)
    const [banner, setBanner] = useState(null)
    const { categorys } = useSelector((sta) => sta.adminCategory)
    const { currentUser } = useSelector((sta) => sta.auth)
    const [listInclude, setListInclude] = useState(course.include)
    const [categoryIdDefault, setCategoryIdDefault] = useState('')

    // Get gategory of course to render init value
    useEffect(() => {
        async function getCate() {
            if (isOpen) {
                const cate = categorys.find(
                    (cate) => cate._id == course.categoryId.id
                )
                setCategoryIdDefault(cate._id)
            }
        }
        getCate()
    }, [categorys, isOpen])

    // Init value in form
    const init = {
        values: {
            title: course?.title,
            priceValue: course?.price?.value,
            discountPrice: 0,
            priceSellExp: '',
            level: course?.level,
            category: categoryIdDefault,
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

                if (value < 0) {
                    error = 'Giá tiền không thể là số âm'
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
            const categoryRef = doc(db, `category`, values.category)
            // Check List Include course
            const listIncludeWithOutEmpty = listInclude.filter(
                (inp) => inp !== ''
            )
            let thumbnailUrl = course.thumbnail
            let bannerUrl = course.banner
            // Image check if image change upload new one
            if (thumbnail !== null) thumbnailUrl = await fileUpload(thumbnail)
            if (banner !== null) bannerUrl = await fileUpload(banner)

            await updateDoc(doc(db, 'courses', course._id), {
                title: values.title,
                slug,
                categoryId: categoryRef,
                level: values.level,
                price: {
                    value: values.priceValue,
                },
                writer: {
                    displayName,
                    uid,
                    photoURL,
                },
                thumbnail: thumbnailUrl,
                banner: bannerUrl,
                include: listIncludeWithOutEmpty,
                updatedAt: serverTimestamp(),
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
            // }
        } catch (error) {
            console.log([error])
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

    // Get file form cusDropFile
    const handleChoseThumnail = (data) => {
        setThumbnail(data)
    }

    const handleChoseBanner = (data) => {
        setBanner(data)
    }

    return (
        <>
            <Tooltip label='Sửa khóa học' fontSize='sm'>
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
                scrollBehavior='inside'
                size='5xl'
            >
                <ModalOverlay />
                <ModalContent pb='4'>
                    <ModalHeader>Sửa khóa học</ModalHeader>
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
                                                textChoseImg='Bỏ trống để dùng lại ảnh cũ'
                                                prevImg={course?.thumbnail}
                                            />
                                            <CusDropFile
                                                name='banner'
                                                label='Chọn ảnh bìa'
                                                textChoseImg='Bỏ trống để dùng lại ảnh cũ'
                                                prevImg={course?.banner}
                                                onchageFile={handleChoseBanner}
                                            />
                                        </Box>
                                    </Flex>

                                    <Button
                                        mt={4}
                                        w='full'
                                        colorScheme='yellow'
                                        isLoading={props.isSubmitting}
                                        type='submit'
                                    >
                                        Sửa khóa học
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
