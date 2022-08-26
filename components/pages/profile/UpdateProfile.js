import { Button, Heading, useToast } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CusInput from '../../Form/CusInput'
import CusSelect from '../../Form/CusSelect'
import { LIST_GENDER } from '../../../helper/gender'
import { doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebase.config'
import { getTrigger } from '../../../redux/slice/profileSlice'
import { useRouter } from 'next/router'
const UpdateProfile = () => {
    const { profile } = useSelector((st) => st.profile)
    const toast = useToast()
    const dispatch = useDispatch()
    const router = useRouter()

    // Init value in form
    const init = {
        overview: profile?.overview ?? '',
        gender: profile?.gender ?? '',
        website: profile?.website ?? '',
        address: profile?.address ?? '',
    }

    // funtion submit form
    const handleSubmit = async (values, actions) => {
        try {
            // console.log(values)
            const { overview, gender, website, address } = values
            await updateDoc(doc(db, 'users', profile._id), {
                overview,
                gender,
                website,
                address,
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
            router.push(`/profile/${profile.uid}/overview`)

            actions.resetForm()
            actions.setSubmitting(false)
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
            <Heading as='h4' size='md' mb='5'>
                Cập nhật thông tin
            </Heading>
            <Formik initialValues={init} onSubmit={handleSubmit}>
                {(props) => (
                    <Form>
                        <CusInput
                            label='Tổng quan'
                            name='overview'
                            textHolder='Nhập tiểu sử'
                        />
                        <CusSelect
                            label='Chọn giới tính'
                            name='gender'
                            textHolder='Chọn giới tính'
                            options={LIST_GENDER}
                        />
                        <CusInput
                            label='Trang web cá nhân'
                            name='website'
                            textHolder='Nhập website cá nhân'
                        />
                        <CusInput
                            label='Địa chỉ'
                            name='address'
                            textHolder='Nhập dịa chỉ'
                        />

                        <Button
                            my={4}
                            w='full'
                            colorScheme='green'
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            Cập nhật
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default UpdateProfile
