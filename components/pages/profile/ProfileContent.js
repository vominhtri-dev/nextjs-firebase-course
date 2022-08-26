import { Skeleton } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import BoughtCourse from './BoughtCourse'
import Liked from './Liked'
import Overview from './Overview'
import ProfilePosts from './ProfilePosts'
import UpdateProfile from './UpdateProfile'
const ProfileContent = () => {
    const router = useRouter()
    const subPath = router.query.param[1]
    const { isCurrentUser, isLoading } = useSelector((state) => state.profile)

    const Subcomponet = () => {
        // in case user try to view the profile not same with they account
        if (!isCurrentUser) {
            // return here to prevent the user can view orther router
            return <Overview />
        }

        return (
            PROFILE_LINK.find((link) => link.slug === subPath)?.Component || (
                <></>
            )
        )
    }

    const PROFILE_LINK = [
        {
            title: 'Tổng quan',
            slug: 'overview',
            Component: <Overview />,
        },
        {
            title: 'Đổi thông tin',
            slug: 'update-profile',
            Component: <UpdateProfile />,
        },
        {
            title: 'Danh sách đã mua',
            slug: 'list-course',
            Component: <BoughtCourse />,
        },
        {
            title: 'Danh sách mong muốn',
            slug: 'list-liked',
            Component: <Liked />,
        },
        {
            title: 'Danh sách bài viết',
            slug: 'list-post',
            Component: <ProfilePosts />,
        },
    ]

    return (
        <>
            {!isLoading && <Subcomponet />}
            {isLoading && <Skeleton h='200' rounded='md' />}
        </>
    )
}

export default ProfileContent
