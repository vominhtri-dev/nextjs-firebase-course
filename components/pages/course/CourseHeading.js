import React from 'react'
import {
    Badge,
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    IconButton,
    Skeleton,
    SkeletonCircle,
    Text,
} from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import { BsFillHeartFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import toTimeVn from '../../../helper/toTimeVn'
import { default as renderLevel } from '../../../helper/level'
import RenderStar from '../../RenderStar'

export default function CourseHeading() {
    const { courseDetail, isLoadingDetail } = useSelector((sta) => sta.course)
    const { title, star, level, totalUsers, updatedAt, category } = courseDetail

    return !isLoadingDetail ? (
        <Box pos='relative'>
            <Heading as='h1' size={['lg', 'xl']} my='4' pr='14'>
                {title}
            </Heading>

            <HStack>
                <Badge colorScheme='green' px='3'>
                    {category?.title}
                </Badge>
                {/* // star */}
                <span>{star || 0}</span>
                <RenderStar star={star || 0} />
            </HStack>
            <Grid gridTemplateColumns='repeat(10, 1fr)' my='4'>
                <GridItem colSpan='10'>
                    <Grid gridTemplateColumns='repeat(12, 1fr)' gap='2'>
                        <GridItem colSpan={['4', '3', '3']}>
                            <Text fontWeight='light' color='gray.800'>
                                Lần cuối cập nhật
                            </Text>
                            <Text fontWeight='bold'>{toTimeVn(updatedAt)}</Text>
                        </GridItem>
                        <GridItem colSpan={['4', '3', '3']}>
                            <Text fontWeight='light' color='gray.800'>
                                Trình độ
                            </Text>
                            <Text fontWeight='bold'>{renderLevel(level)}</Text>
                        </GridItem>
                        <GridItem colSpan={['4', '3', '3']}>
                            <Text fontWeight='light' color='gray.800'>
                                Số học viên
                            </Text>
                            <Text fontWeight='bold'>{totalUsers || 0}</Text>
                        </GridItem>
                        <GridItem colSpan={['4', '3', '3']}>
                            <Text fontWeight='light' color='gray.800'>
                                Số lược xem
                            </Text>
                            <Text fontWeight='bold'>{totalUsers || 0}</Text>
                        </GridItem>
                    </Grid>
                </GridItem>
                <Flex
                    direction='column'
                    align='center'
                    pos='absolute'
                    top='0'
                    right='0'
                >
                    <IconButton
                        rounded='full'
                        icon={<BsFillHeartFill />}
                        color='gray.600'
                        mb='2'
                    />
                    <IconButton
                        rounded='full'
                        icon={<WarningIcon />}
                        color='gray.600'
                    />
                </Flex>
            </Grid>
        </Box>
    ) : (
        <Box>
            <Skeleton h='60px' w='full' mb='2' rounded='md' />
            <Skeleton h='40px' w='full' mb='2' rounded='md' />
            <Skeleton h='40px' w='full' mb='2' rounded='md' />
        </Box>
    )
}
