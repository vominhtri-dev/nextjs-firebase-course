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
    doc,
    getDocs,
    query,
    serverTimestamp,
    where,
} from 'firebase/firestore'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../../../firebase.config'
import CusInput from '../../../Form/CusInput'
import CusSelect from '../../../Form/CusSelect'
import { AddIcon } from '@chakra-ui/icons'
import { LIST_LEVEL } from '../../../../helper/level'
import { useState } from 'react'
import CusDropFile from '../../../Form/CusDropFile'
import MultibleInput from '../../../Form/MultibleInput'
import { getTrigger } from '../../../../redux/slice/adminCourseSlice'
import fileUpload from '../../../../helper/fileUpload'
const slugify = require('slugify')

const CreateModel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const toast = useToast()
    const [thumbnail, setThumbnail] = useState(null)
    const [banner, setBanner] = useState(null)
    const [thumbnailError, setThumbnailError] = useState(false)
    const [bannerError, setBannerError] = useState(false)
    const { categorys } = useSelector((sta) => sta.adminCategory)
    const { currentUser } = useSelector((sta) => sta.auth)
    const [listInclude, setListInclude] = useState([])

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
                if (!value && value !== 0) {
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
            const slug = slugify(values.title.trim().toLowerCase(), {
                remove: /[*+~.()'"!:@]/g,
            })

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
            // Image check
            if (thumbnail === null) setThumbnailError(true)
            if (banner === null) setBannerError(true)
            if (thumbnail && banner) {
                const categoryRef = doc(db, `category`, values.category)

                const thumbnailUrl = fileUpload(thumbnail)
                const bannerUrl = fileUpload(banner)
                const uploadDone = await Promise.all([thumbnailUrl, bannerUrl])

                // Create doc

                await addDoc(collection(db, 'courses'), {
                    title: values.title,
                    slug,
                    categoryId: categoryRef,
                    level: values.level,
                    price: {
                        value: values.priceValue,
                    },
                    view: 0,
                    writer: {
                        displayName,
                        uid,
                        photoURL,
                    },
                    thumbnail: uploadDone[0],
                    banner: uploadDone[1],
                    include: listIncludeWithOutEmpty,
                    createdAt: serverTimestamp(),
                    updatedAt: serverTimestamp(),
                })

                // Reset
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
                setListInclude([])
                onClose()
            }
        } catch (error) {
            console.log(error)
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
                scrollBehavior='inside'
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
                                        colorScheme='teal'
                                        isLoading={props.isSubmitting}
                                        type='submit'
                                    >
                                        Tạo khóa học
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
