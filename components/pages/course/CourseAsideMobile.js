import { StarIcon } from '@chakra-ui/icons'
import {
    Avatar,
    Badge,
    Box,
    Button,
    Divider,
    Flex,
    HStack,
    List,
    ListIcon,
    ListItem,
    Skeleton,
    SkeletonCircle,
    Stat,
    StatHelpText,
    StatNumber,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { HiOutlineTicket } from 'react-icons/hi'
import { MdCheckCircle } from 'react-icons/md'
import { useSelector } from 'react-redux'
import RenderStar from '../../RenderStar'

export default function CourseAsideMobile() {
    const { courseDetail, isLoadingDetail } = useSelector((sta) => sta.course)
    const { writer, price, include, star } = courseDetail
    return !isLoadingDetail ? (
        <Box display={['block', 'block', 'none']}>
            <Divider />
            <Stat>
                <StatNumber>Giá : £ {price?.value}</StatNumber>
                <StatHelpText display='flex' alignItems='center'>
                    <strike>£ {price?.value}</strike>
                    <Badge colorScheme='green' ml='4'>
                        tiết kiệm 0%
                    </Badge>
                </StatHelpText>
            </Stat>
            <Button
                colorScheme='messenger'
                w='full'
                leftIcon={<AiOutlineShoppingCart />}
            >
                Thêm vào giỏ hàng
            </Button>
            <Button
                colorScheme='messenger'
                variant='outline'
                w='full'
                mt='4'
                leftIcon={<HiOutlineTicket />}
            >
                Mua ngay
            </Button>

            <Divider py='2' />

            <Text fontWeight='bold' my='2'>
                Khóa học này bao gồm
            </Text>
            <List spacing={3}>
                {include &&
                    include.map((courseFea, idx) => (
                        <ListItem key={idx}>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            {courseFea}
                        </ListItem>
                    ))}
            </List>
            <Divider py='2' />
            <Box mb='8'>
                <Text fontWeight='bold' my='2'>
                    Người hướng dẫn
                </Text>
                <HStack>
                    <Avatar
                        name={writer?.displayName}
                        src={writer?.photoURL}
                        size='sm'
                        mr='2'
                    />
                    <Box>
                        <Text fontWeight='bold' fontSize='sm' my='2'>
                            {writer?.displayName}
                        </Text>
                        <Text my='2' fontSize='xs'>
                            Admin
                        </Text>
                    </Box>
                </HStack>
                <HStack
                    my='2'
                    display='flex'
                    align='center'
                    justify='space-between'
                >
                    {/* // star  */}
                    <HStack>
                        <Text fontSize='xs'>{star || 0}</Text>
                        <RenderStar star={star || 0} />
                    </HStack>
                    <Button leftIcon={<BsBook />} size='xs'>
                        21 Khóa học
                    </Button>
                </HStack>
            </Box>
        </Box>
    ) : (
        <Box display={['block', 'block', 'none']}>
            <Skeleton h='60px' w='full' mb='2' rounded='md' />
            <Skeleton h='40px' w='full' mb='2' rounded='md' />
            <Skeleton h='40px' w='full' mb='2' rounded='md' />
            <Flex mb='2'>
                <SkeletonCircle size='10' flexShrink='0' />
                <Skeleton h='40px' w='full' rounded='md' ml='2' />
            </Flex>
            <Skeleton h='20px' w='full' mb='2' rounded='md' />
        </Box>
    )
}
