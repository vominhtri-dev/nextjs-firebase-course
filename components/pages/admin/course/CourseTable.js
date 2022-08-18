import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Heading,
    TableCaption,
    Tooltip,
    Button,
    Link,
} from "@chakra-ui/react"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import React, { useEffect } from "react"
import { db } from "../../../../firebase.config"
import TdSkeleton from "../TdSkeleton"
import DeleteModel from "./DeleteModel"
import UpdateModel from "./UpdateModel"
import { useDispatch, useSelector } from "react-redux"
import { addCourses } from "../../../../redux/slice/adminCourseSlice"
import toTimeVn from "../../../../helper/toTimeVn"
import { BiMessageSquareDetail } from "react-icons/bi"
import NextLink from "next/link"

const CourseTable = () => {
    const { courses, isLoading, trigger } = useSelector(
        (sta) => sta.adminCourse
    )
    const dispatch = useDispatch()

    useEffect(() => {
        async function getAdminCourses() {
            try {
                const q = query(
                    collection(db, "courses"),
                    orderBy("createdAt", "desc")
                )
                const rawDocs = await getDocs(q)

                const courses = rawDocs.docs.map((doc) => ({
                    _id: doc.id,
                    ...doc.data(),
                }))

                dispatch(addCourses(courses))
            } catch (error) {
                console.log(error)
            }
        }
        getAdminCourses()
    }, [trigger, dispatch])

    return (
        <Box>
            <Heading mb='4' as='h5' size='md'>
                Danh sách khóa học
            </Heading>

            <TableContainer>
                <Table variant='simple'>
                    {courses.length === 0 && !isLoading && (
                        <TableCaption>Danh sách khóa học trống</TableCaption>
                    )}

                    <Thead>
                        <Tr>
                            <Th>STT</Th>
                            <Th>Tên khóa học</Th>
                            <Th>Giá</Th>
                            <Th>Thời gian tạo</Th>
                            <Th>Hành động</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {courses.map((course, idx) => (
                            <Tr key={course._id}>
                                <Td>{idx + 1}</Td>
                                <Td>{course?.title}</Td>
                                <Td>{course?.price?.value}</Td>
                                <Td>{toTimeVn(course.createdAt)}</Td>
                                <Td>
                                    <NextLink
                                        href={`/admin/manage-courses/${course?.slug}`}
                                        passHref
                                    >
                                        <Link>
                                            <Tooltip
                                                label='Xem chi tiết'
                                                fontSize='sm'
                                            >
                                                <Button
                                                    size='sm'
                                                    colorScheme='teal'
                                                    mr='2'
                                                    variant='ghost'
                                                >
                                                    <BiMessageSquareDetail />
                                                </Button>
                                            </Tooltip>
                                        </Link>
                                    </NextLink>
                                    {/* <DetailModel course={course} /> */}
                                    {/* <DeleteModel course={course} />
                                    <UpdateModel course={course} /> */}
                                </Td>
                            </Tr>
                        ))}

                        {isLoading && <TdSkeleton col={4} row={10} />}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default CourseTable
