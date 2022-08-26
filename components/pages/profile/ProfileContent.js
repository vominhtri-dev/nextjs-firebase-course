import { useRouter } from 'next/router'
import BoughtCourse from './BoughtCourse'
import Liked from './Liked'
import Overview from './Overview'
import ProfilePosts from './ProfilePosts'
import UpdateProfile from './UpdateProfile'
const ProfileContent = () => {
    const { query } = useRouter()
    const subPath = query.param[1]

    const Subcomponet = () =>
        PROFILE_LINK.find((link) => link.slug === subPath)?.Component || <></>

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
            <Subcomponet />
        </>
    )
}

export default ProfileContent
