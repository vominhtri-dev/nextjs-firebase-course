import { Button, Heading, Text, VStack, Link, useToast } from "@chakra-ui/react"
import { Formik, Form } from "formik"
import NextLink from "next/link"
import { useDispatch } from "react-redux"
import { loginAction } from "../../../redux/slice/authSlice"
import { registerService, updateFullnameService } from "../../../service/auth"
import CusInput from "../../Form/CusInput"
export default function RegisterForm() {
    const toast = useToast()
    const dispatch = useDispatch()
    // Init value in form
    const init = {
        values: {
            email: "",
            fullname: "",
            password: "",
            CPassword: "",
        },
        validate: {
            validEmail(value) {
                let error
                if (!value) {
                    error = "Email Không được bỏ trống"
                }
                return error
            },
            validFullname(value) {
                let error
                if (!value) {
                    error = "Tên Không được bỏ trống"
                }
                return error
            },

            validatePass(value) {
                let error
                if (!value) {
                    error = "Mật khẩu không được bỏ trống"
                }
                return error
            },
            validateCPass(value, pass) {
                let error
                if (value === "") {
                    error = "Mật khẩu nhập lại không được bỏ trống"
                }
                if (value !== pass) {
                    error = "Mật khẩu nhập lại không đúng"
                }
                return error
            },
        },
    }
    // funtion submit form
    const handleSubmit = async (values, actions) => {
        try {
            let { user } = await registerService(values.email, values.password)
            await updateFullnameService(values.fullname)
            const { email, accessToken, uid, displayName } = user
            dispatch(loginAction({ email, accessToken, displayName, uid }))
            actions.setSubmitting(false)
            toast({
                title: "Đăng ký thành công",
                status: "success",
                duration: 2000,
                position: "top-right",
                isClosable: true,
            })
        } catch (error) {
            console.log(error)
            let err
            if (error.code === "auth/weak-password") {
                err = "Mật khẩu nên lớn hơn 6 ký tự!"
            } else if (error.code === "auth/email-already-in-use") {
                err = "Tài khoản email đã được sử dụng !"
            } else {
                err = error.code
            }
            toast({
                title: "Đăng ký thất bại",
                description: err,
                status: "error",
                duration: 2000,
                position: "top-right",
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
                        <NextLink href='/login' passHref>
                            <Link
                                textDecoration='none'
                                transition='0.5s'
                                ml='1'
                                color='messenger.400'
                                _hover={{ color: "messenger.600" }}
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
