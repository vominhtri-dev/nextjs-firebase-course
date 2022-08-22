import {
    Box,
    Container,
    Grid,
    GridItem,
    Text,
    Spacer,
    Stack,
} from '@chakra-ui/react'
import CourseCard from './CourseCard'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../../firebase.config'
import { useEffect } from 'react'
import CourseCardSkeleton from './CourseCardSkeleton'
import { useDispatch, useSelector } from 'react-redux'
import { addCourse, resetLoading } from '../../../redux/slice/courseSlice'
import Pagination from '../../Pagination'
import usePagi from '../../../hook/usePagi'

export default function CourseSection() {
    const { courses, trigger, isLoading } = useSelector((sta) => sta.course)
    const dispatch = useDispatch()
    const {
        list,
        currentPage,
        pageSize,
        changePrevPage,
        changeNextPage,
        chagePage,
    } = usePagi({
        sizePageValue: 6,
        listData: courses,
    })

    // fetch course
    useEffect(() => {
        async function getCourses() {
            const q = query(
                collection(db, 'courses'),
                orderBy('createdAt', 'desc')
            )
            const rawDocs = await getDocs(q)
            dispatch(
                addCourse(
                    rawDocs.docs.map((doc) => ({ _id: doc.id, ...doc.data() }))
                )
            )
        }
        getCourses()
        return () => {
            dispatch(resetLoading())
        }
    }, [trigger, dispatch])

    return (
        <Box pb='4' pt='8'>
            <Container maxW={[1024]}>
                <Stack
                    direction={['column', 'row']}
                    mb={['8', '0']}
                    align={['normal', 'center']}
                >
                    <Box pb={['0', '8']}>
                        <Text color='messenger.600'>Những khóa học mới</Text>
                        <Text fontSize='4xl' fontWeight='bold'>
                            Lập Trình website
                        </Text>
                    </Box>
                    <Spacer />
                </Stack>
                <Grid
                    templateColumns={[
                        'repeat(1, 1fr)',
                        'repeat(2, 1fr)',
                        'repeat(2, 1fr)',
                        'repeat(3, 1fr)',
                    ]}
                    gap='4'
                >
                    {/* Data fetching */}
                    {!isLoading &&
                        list.map((course) => (
                            <GridItem key={course._id}>
                                <CourseCard course={course} />
                            </GridItem>
                        ))}
                    {/* Load skeleton */}
                    {isLoading && <CourseCardSkeleton num={6} />}
                </Grid>
                {/* Pagination */}
                <Pagination
                    pageSize={pageSize}
                    pageLength={courses.length}
                    currentPage={currentPage}
                    onNextPage={changeNextPage}
                    onPrevPage={changePrevPage}
                    onChosePage={chagePage}
                />
            </Container>
        </Box>
    )
}
