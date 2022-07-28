import {
	Box,
	Container,
	Grid,
	GridItem,
	Button,
	Text,
	Spacer,
	Stack,
	SkeletonCircle,
	SkeletonText,
} from '@chakra-ui/react'
import CoursePagi from './CoursePagi'
import CourseCard from './CourseCard'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase.config'
import { useEffect, useState } from 'react'
import CourseCardSkeleton from './CourseCardSkeleton'

export default function CourseSection() {
	const [courses, setCourses] = useState([])
	useEffect(() => {
		async function c() {
			const data = await getDocs(collection(db, 'courses'))
			setCourses(data.docs.map((doc) => ({ _id: doc.id, ...doc.data() })))
		}
		c()
	}, [])

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
						'repeat(1, 1fr)',
						'repeat(2, 1fr)',
						'repeat(3, 1fr)',
					]}
					gap='4'
				>
					{/* Data fetching */}
					{courses.length > 0 &&
						courses.map((course) => (
							<GridItem key={course._id}>
								<CourseCard course={course} />
							</GridItem>
						))}
					{/* Load skeleton */}
					{courses.length <= 0 &&
						Array.from(Array(6).keys()).map((item) => (
							<GridItem key={item}>
								<CourseCardSkeleton />
							</GridItem>
						))}
				</Grid>
				<CoursePagi />
			</Container>
		</Box>
	)
}
