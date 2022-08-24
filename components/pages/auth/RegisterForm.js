import { Button, Heading, Text, VStack, Link, useToast } from '@chakra-ui/react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { Formik, Form } from 'formik'
import NextLink from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { db } from '../../../firebase.config'
import { loginAction } from '../../../redux/slice/authSlice'
import {
    logoutService,
    registerService,
    updateFullnameService,
} from '../../../service/auth'
import CusInput from '../../Form/CusInput'
import HrWithText from '../../HrWithText'

export default function RegisterForm() {
    const toast = useToast()
    const dispatch = useDispatch()
    // Init value in form
    const init = {
        values: {
            email: '',
            fullname: '',
            password: '',
            CPassword: '',
        },
        validate: {
            validEmail(value) {
                let error
                if (!value) {
                    error = 'Email Không được bỏ trống'
                }
                return error
            },
            validFullname(value) {
                let error
                if (!value) {
                    error = 'Tên Không được bỏ trống'
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
            validateCPass(value, pass) {
                let error
                if (value === '') {
                    error = 'Mật khẩu nhập lại không được bỏ trống'
                }
                if (value !== pass) {
                    error = 'Mật khẩu nhập lại không đúng'
                }
                return error
            },
        },
    }

    // Create user doc
    const createUserDoc = async ({ email, accessToken, uid, displayName }) => {
        const addUser = await addDoc(collection(db, 'users'), {
            email,
            accessToken,
            uid,
            displayName,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            isActive: true,
            isAdmin: false,
        })
        // if not receive data when add ~> logout
        if (!addUser.id) return await logoutService()
    }

    // funtion submit form
    const handleSubmit = async (values, actions) => {
        try {
            // when create new account this auto login an trigger into AuthProvider
            let { user } = await registerService(values.email, values.password)
            await updateFullnameService(values.fullname)
            const { email, accessToken, uid, displayName } = user
            // Create user into collection
            createUserDoc({ email, accessToken, uid, displayName })

            toast({
                title: 'Đăng ký thành công',
                status: 'success',
                duration: 2000,
                position: 'top-right',
                isClosable: true,
            })
            actions.setSubmitting(false)
            dispatch(loginAction({ email, accessToken, displayName, uid }))
        } catch (error) {
            console.log(error)
            let err
            if (error.code === 'auth/weak-password') {
                err = 'Mật khẩu nên lớn hơn 6 ký tự!'
            } else if (error.code === 'auth/email-already-in-use') {
                err = 'Tài khoản email đã được sử dụng !'
            } else {
                err = error.code
            }
            toast({
                title: 'Đăng ký thất bại',
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
                        <Heading mb='4' as='h1' size='xl'>
                            Đăng ký
                        </Heading>
                    </VStack>
                    <CusInput
                        label='Họ và tên'
                        name='fullname'
                        validate={init.validate.validFullname}
                        textHolder='Nhập họ và tên của bạn'
                    />
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
                    <CusInput
                        label='Nhập lại mật khẩu'
                        name='CPassword'
                        type='password'
                        validate={(value) =>
                            init.validate.validateCPass(
                                value,
                                props.values.password
                            )
                        }
                        textHolder='Nhập lại mật khẩu của bạn'
                    />

                    <Button
                        mt={4}
                        w='full'
                        colorScheme='messenger'
                        isLoading={props.isSubmitting}
                        type='submit'
                    >
                        Đăng ký
                    </Button>

                    <Text
                        textAlign='center'
                        fontSize='sm'
                        mt='4'
                        color='gray.400'
                    >
                        Dã có tài khoản ?
                        <NextLink href='/login'>
                            <Link
                                textDecoration='none'
                                transition='0.5s'
                                ml='1'
                                color='messenger.400'
                                _hover={{ color: 'messenger.600' }}
                            >
                                Đăng nhập
                            </Link>
                        </NextLink>
                    </Text>
                </Form>
            )}
        </Formik>
    )
}
