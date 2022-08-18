import { Box } from "@chakra-ui/react"
import Head from "next/head"
import AdminLayout from "../../../components/layouts/admin/AdminLayout"
import CourseTable from "../../../components/pages/admin/course/CourseTable"
import OptionBar from "../../../components/pages/admin/course/OptionBar"
import Heading from "../../../components/pages/admin/Heading"

const ManageCourses = () => {
    return (
        <Box>
            <Head>
                <title>
                    Quản lý khóa học - Học lập trình miễn phí | Học lập trình
                    Javascript | Học lập trình cho người mới
                </title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' type='image/png' href='/code.png' />
            </Head>
            <Heading lv1='Quản lý khóa học' />
            <OptionBar />
            <CourseTable />
        </Box>
    )
}

ManageCourses.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>
}

export default ManageCourses