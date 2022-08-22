import {
    Box,
    Container,
    Grid,
    GridItem,
    HStack,
    Skeleton,
} from '@chakra-ui/react'
import CourseHeading from './CourseHeading'
import CourseAside from './CourseAside'

const CourseDetailSkeleton = () => {
    return (
        <Box pb='4' pt='8'>
            <Container maxW={[1024]}>
                {/* BreadCrumb  */}
                <HStack>
                    <Skeleton w='70px' height='20px' />
                    <Skeleton w='100px' height='20px' />
                    <Skeleton w='300px' height='20px' />
                </HStack>
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
                        {/* <CourseAsideMobile /> */}
                        {/* Intro video or image */}
                        {/* <CourseIntro /> */}
                        {/* Tab */}
                        {/* <CourseTab /> */}
                        {/* Preview*/}
                        {/* <CourseReview /> */}
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
    )
}

export default CourseDetailSkeleton
