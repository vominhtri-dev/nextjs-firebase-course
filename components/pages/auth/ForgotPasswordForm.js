import { Button, Heading, Text, VStack, Link, useToast } from "@chakra-ui/react"
import { Formik, Form } from "formik"
import NextLink from "next/link"
import CusInput from "../../Form/CusInput"
import { sendResetPassService } from "../../../service/auth"

export default function ForgotPasswordForm() {
    const toast = useToast()

    // Init value in form
    const init = {
        values: {
            email: "",
            password: "",
        },
        validate: {
            validEmail(value) {
                let error
                if (!value) {
                    error = "Email Không được bỏ trống"
                }
                return error
            },
        },
    }

    // funtion submit form
    const handleSubmit = async (values, actions) => {
        try {
            const data = await sendResetPassService(values.email)

            console.log(data)
            // const { email, accessToken, uid } = userCredential.user
            // dispatch(loginAction({ email, accessToken, uid }))
            toast({
                title: "Đã gữi thành công",
                description: "Hãy kiểm tra lại hòm thư của bạn",
                status: "success",
                duration: 2000,
                position: "top-right",
                isClosable: true,
            })
            actions.setSubmitting(false)
        } catch (error) {
            toast({
                title: "Đăng nhâp thất bại",
                description: error,
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
                        <Heading my='4' as='h1' size='xl'>
                            Quên mật khẩu
                        </Heading>
                    </VStack>
                    <CusInput
                        label='Email'
                        name='email'
                        type='email'
                        validate={init.validate.validEmail}
                        textHolder='Nhập email của bạn'
                    />

                    <Button
                        mt={4}
                        w='full'
                        colorScheme='messenger'
                        isLoading={props.isSubmitting}
                        type='submit'
                    >
                        Lấy lại mật khẩu
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
                                _hover={{ color: "messenger.600" }}
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
