import { AspectRatio, Box, Skeleton } from '@chakra-ui/react'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const CourseIntro = () => {
    const { courseDetail, isLoadingDetail } = useSelector((sta) => sta.course)
    const { banner } = courseDetail
    return (
        <Box>
            <AspectRatio ratio={16 / 9} rounded='lg' overflow='hidden'>
                {/* <video controls crossOrigin='anonymous'>
                    <source src='' type='video/mp4' poster='./12.png' />
                </video> */}
                {!isLoadingDetail ? (
                    <Image
                        src={banner}
                        layout='fill'
                        alt='intro_course'
                        objectFit='cover'
                        priority='low'
                    />
                ) : (
                    <Skeleton h='350' w='full' mb='2' rounded='md' />
                )}
            </AspectRatio>
        </Box>
    )
}

export default CourseIntro
