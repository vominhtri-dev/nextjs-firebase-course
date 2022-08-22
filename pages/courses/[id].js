import { Box, Container, Grid, GridItem } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CourseAside from '../../components/pages/course/CourseAside'
import CourseAsideMobile from '../../components/pages/course/CourseAsideMobile'
import CourseHeading from '../../components/pages/course/CourseHeading'
import CourseIntro from '../../components/pages/course/CourseIntro'
import CourseReview from '../../components/pages/course/CourseReview'
import CourseTab from '../../components/pages/course/CourseTab'
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import {
    addCourseDetail,
    resetLoadingDetail,
} from '../../redux/slice/courseSlice'
import { db } from '../../firebase.config'
import CourseBreadCrumb from '../../components/pages/course/CourseBreadCrumb'

export default function CourseDetail() {
    const { courseDetail, trigger } = useSelector((sta) => sta.course)
    const dispatch = useDispatch()
    const router = useRouter()

    // fetch course detail
    useEffect(() => {
        async function getCourseDetail() {
            try {
                const slug = router.query.id
                const q = query(
                    collection(db, 'courses'),
                    where('slug', '==', slug)
                )
                const result = await getDocs(q)
                if (result.docs.length > 0) {
                    const doc = result.docs[0]
                    const courseDoc = { _id: doc.id, ...doc.data() }
                    const categoryRef = doc.data().categoryId
                    await getDoc(categoryRef).then((cate) => {
                        courseDoc.category = { ...cate.data() }
                    })
                    // console.log(courseDoc)
                    dispatch(addCourseDetail(courseDoc))
                } else router.push('/404')
            } catch (error) {
                console.log(error)
            }
        }

        getCourseDetail()

        return () => {
            dispatch(resetLoadingDetail())
        }
    }, [trigger, dispatch])

    return (
        <>
            <Head>
                <title>
                    {courseDetail?.title || 'Đang tải'} | Tridev.io - Học lập
                    trình miễn phí | Học lập trình cho người mới
                </title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' type='image/png' href='/code.png' />
            </Head>
            <Box pb='4' pt='8'>
                <Container maxW={[1024]}>
                    {/* BreadCrumb  */}
                    <CourseBreadCrumb />
                    {/* Container  */}
                    <Grid gridTemplateColumns='repeat(12, 1fr)' my='4' gap='4'>
                        <GridItem
                            p='4'
                            rounded='lg'
                            bg='white'
                            shadow='sm'
                            colSpan={['12', '12', '8']}
                        >
                            {/* Heading  */}
                            <CourseHeading />
                            {/* Section only mobile */}
                            <CourseAsideMobile />
                            {/* Intro video or image */}
                            <CourseIntro />
                            {/* Tab */}
                            <CourseTab />
                            {/* Preview*/}
                            <CourseReview />
                        </GridItem>
                        <GridItem
                            colSpan={['12', '12', '4']}
                            display={['none', 'none', 'block']}
                        >
                            {/* Aside */}
                            <CourseAside />
                        </GridItem>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
