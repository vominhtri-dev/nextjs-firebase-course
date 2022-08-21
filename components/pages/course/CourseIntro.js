import { AspectRatio, Box } from '@chakra-ui/react'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const CourseIntro = () => {
    const { courseDetail } = useSelector((sta) => sta.course)
    const { banner } = courseDetail
    return (
        <Box>
            <AspectRatio ratio={16 / 9} rounded='lg' overflow='hidden'>
                {/* <video controls crossOrigin='anonymous'>
                    <source src='' type='video/mp4' poster='./12.png' />
                </video> */}
                <Image
                    src={banner}
                    layout='fill'
                    alt='intro_course'
                    objectFit='cover'
                    priority='true'
                />
            </AspectRatio>
        </Box>
    )
}

export default CourseIntro
