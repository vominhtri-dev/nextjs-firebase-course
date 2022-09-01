import {
    Button,
    Heading,
    Text,
    VStack,
    Link,
    useToast,
    Flex,
} from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { FcGoogle } from 'react-icons/fc'
import NextLink from 'next/link'
import CusInput from '../../Form/CusInput'
import { loginGGService, loginService } from '../../../service/auth'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../../redux/slice/authSlice'
import {
    addDoc,
    collection,
    getDocs,
    query,
    serverTimestamp,
    where,
} from 'firebase/firestore'
import { db } from '../../../firebase.config'

export default function LoginForm() {
    const dispatch = useDispatch()
    const toast = useToast()

    // Init value in form
    const init = {
        values: {
            email: '',
            password: '',
        },
        validate: {
            validEmail(value) {
                let error
                if (!value) {
                    error = 'Email Không được bỏ trống'
                }
                return error
            },
            validatePass(value) {
                let error
                if (!value) {
                    error = 'Mật khẩu không được bỏ trống'
                }
                return error
            },
        },
    }

    // funtion submit form
    const handleSubmit = async (values, actions) => {
        try {
            // Login by email, password
            const { user } = await loginService(values.email, values.password)
            const { email, accessToken, displayName, uid } = user
            dispatch(loginAction({ email, accessToken, displayName, uid }))
            toast({
                title: 'Đăng nhâp thành công',
                status: 'success',
                duration: 2000,
                position: 'top-right',
                isClosable: true,
            })
            actions.setSubmitting(false)
        } catch (error) {
            let err
            if (error.code === 'auth/wrong-password') {
                err = 'Sai mật khẩu !'
            } else if (error.code === 'auth/user-not-found') {
                err = 'Không tìm thấy tài khoản !'
            } else {
                err = error.code
            }
            toast({
                title: 'Đăng nhâp thất bại',
                description: err,
                status: 'error',
                duration: 2000,
                position: 'top-right',
                isClosable: true,
            })
        }
    }

    // funtion login google
    const handleGGlogin = async () => {
        try {
            const { user } = await loginGGService()
            const { email, uid, displayName, photoURL } = user
            const usersRef = collection(db, 'users')
            const q = query(usersRef, where('uid', '==', uid))
            const foundUser = await getDocs(q)
            if (foundUser.empty) {
                // if isEmpty  create user doc
                await addDoc(collection(db, 'users'), {
                    email,
                    uid,
                    displayName,
                    photoURL,
                    createdAt: serverTimestamp(),
                    updatedAt: serverTimestamp(),
                    isActive: true,
                    isAdmin: false,
                })
            }

            toast({
                title: 'Đăng nhâp thành công',
                status: 'success',
                duration: 2000,
                position: 'top-right',
                isClosable: true,
            })
        } catch (error) {
            let err
            if (error.code === 'auth/popup-closed-by-user') {
                err = 'Cửa sổ đăng nhập bị người dùng đóng !'
            }
            toast({
                title: 'Đăng nhâp thất bại',
                description: err,
                status: 'error',
                duration: 2000,
                position: 'top-right',
                isClosable: true,
            })
        }
    }

    return (
        <Formik initialValues={init.values} onSubmit={handleSubmit}>
            {(props) => (
                <Form>
                    <VStack>
                        <Heading my='4' as='h1' size='xl'>
                            Đăng nhập
                        </Heading>
                    </VStack>
                    <CusInput
                        label='Email'
                        name='email'
                        type='email'
                        validate={init.validate.validEmail}
                        textHolder='Nhập email của bạn'
                    />
                    <CusInput
                        label='Mật khẩu'
                        name='password'
                        type='password'
                        validate={init.validate.validatePass}
                        textHolder='Nhập mật khẩu của bạn'
                    />
                    <Flex justifyContent='flex-end' my='2'>
                        <NextLink href='/forgot-password' passHref>
                            <Link
                                textDecoration='none'
                                transition='0.5s'
                                ml='1'
                                color='messenger.400'
                                _hover={{ color: 'messenger.600' }}
                            >
                                Quên mật khẩu ?
                            </Link>
                        </NextLink>
                    </Flex>
                    <Button
                        mt={4}
                        w='full'
                        colorScheme='messenger'
                        isLoading={props.isSubmitting}
                        type='submit'
                    >
                        Đăng nhập
                    </Button>
                    <Button
                        onClick={handleGGlogin}
                        mt='2'
                        w='full'
                        leftIcon={<FcGoogle />}
                    >
                        Đăng nhập bằng google
                    </Button>
                    <Text
                        textAlign='center'
                        fontSize='sm'
                        mt='4'
                        color='gray.400'
                    >
                        Không có tài khoản ?
                        <NextLink href='/register' passHref>
                            <Link
                                textDecoration='none'
                                transition='0.5s'
                                ml='1'
                                color='messenger.400'
                                _hover={{ color: 'messenger.600' }}
                            >
                                Đăng ký
                            </Link>
                        </NextLink>
                    </Text>
                </Form>
            )}
        </Formik>
    )
}
