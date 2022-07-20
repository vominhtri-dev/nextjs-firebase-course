import { AspectRatio, Box } from "@chakra-ui/react"
import Image from "next/image"

const CourseIntro = () => {
    return (
        <Box>
            <AspectRatio ratio={16 / 9} rounded='lg' overflow='hidden'>
                {/* <video controls crossOrigin='anonymous'>
                    <source src='' type='video/mp4' poster='./12.png' />
                </video> */}
                <Image src='/12.png' layout='fill' alt='intro_course' />
            </AspectRatio>
        </Box>
    )
}

export default CourseIntro
