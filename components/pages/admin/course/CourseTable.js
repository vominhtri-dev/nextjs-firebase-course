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
} from '@chakra-ui/react'
import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    startAt,
} from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import { db } from '../../../../firebase.config'
import TdSkeleton from '../TdSkeleton'
import DeleteModel from './DeleteModel'
import UpdateModel from './UpdateModel'
import { useDispatch, useSelector } from 'react-redux'
import {
    addCourses,
    resetLoading,
} from '../../../../redux/slice/adminCourseSlice'
import toTimeVn from '../../../../helper/toTimeVn'
import { BiMessageSquareDetail } from 'react-icons/bi'
import NextLink from 'next/link'
import { addCategory } from '../../../../redux/slice/adminCategorySlice'
import renderByLine from '../../../../helper/renderByLine'
import Pagination from '../../../Pagination'
import usePagi from '../../../../hook/usePagi'

const CourseTable = () => {
    const dispatch = useDispatch()
    const { courses, isLoading, trigger } = useSelector(
        (sta) => sta.adminCourse
    )
    const { categorys, trigger: cateTrigger } = useSelector(
        (sta) => sta.adminCategory
    )

    const {
        list,
        currentPage,
        setCurrentPage,
        pageSize,
        changePrevPage,
        changeNextPage,
    } = usePagi({
        sizePageValue: 5,
        listData: courses,
    })

    // fetch courses
    useEffect(() => {
        async function getAdminCourses() {
            try {
                const q = query(
                    collection(db, 'courses'),
                    orderBy('createdAt', 'desc')
                )
                const rawDocs = await getDocs(q)

                const listCourse = rawDocs.docs.map((doc) => ({
                    _id: doc.id,
                    ...doc.data(),
                }))
                dispatch(addCourses(listCourse))
            } catch (error) {
                console.log(error)
            }
        }
        getAdminCourses()

        return () => {
            dispatch(resetLoading())
        }
    }, [trigger, dispatch])

    // fetch categorys
    useEffect(() => {
        async function getAdminCategory() {
            try {
                if (categorys.length > 0) return
                const q = query(
                    collection(db, 'category'),
                    orderBy('createdAt', 'desc')
                )
                const rawDocs = await getDocs(q)
                const data = rawDocs.docs.map((doc) => ({
                    _id: doc.id,
                    ...doc.data(),
                }))
                dispatch(addCategory(data))
            } catch (error) {
                console.log(error)
            }
        }
        getAdminCategory()
    }, [cateTrigger, dispatch])

    // handle chose page
    const handleChosePage = (numPage) => setCurrentPage(numPage)

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
                        {!isLoading &&
                            list.map((course, idx) => (
                                <Tr key={course._id}>
                                    <Td>{idx + 1}</Td>
                                    <Td title={course?.title}>
                                        {renderByLine(course?.title, 50)}
                                    </Td>
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
                                        <DeleteModel course={course} />
                                        <UpdateModel course={course} />
                                    </Td>
                                </Tr>
                            ))}

                        {isLoading && <TdSkeleton col={5} row={pageSize} />}
                    </Tbody>
                </Table>
            </TableContainer>
            <Pagination
                pageSize={pageSize}
                pageLength={courses.length}
                currentPage={currentPage}
                onNextPage={changeNextPage}
                onPrevPage={changePrevPage}
                onChosePage={handleChosePage}
            />
        </Box>
    )
}

export default CourseTable
