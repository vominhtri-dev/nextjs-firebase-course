import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import CourseList from './CourseList'

const BoughtCourse = () => {
    return (
        <Box>
            <Heading as='h4' size='md' mb='5'>
                Khóa học đã mua
            </Heading>

            <CourseList />
        </Box>
    )
}

export default BoughtCourse
