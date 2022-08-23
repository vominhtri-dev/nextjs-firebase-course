import { StarIcon } from '@chakra-ui/icons'
import {
    Avatar,
    Badge,
    Box,
    Button,
    Container,
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
import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { HiOutlineTicket } from 'react-icons/hi'
import { MdCheckCircle } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/slice/cartSlice'
import RenderStar from '../../RenderStar'

export default function CourseAside() {
    const { courseDetail, isLoadingDetail } = useSelector((sta) => sta.course)
    const { writer, price, include, star } = courseDetail
    const router = useRouter()
    const dispatch = useDispatch()
    const handleAddToCart = (item) => dispatch(addToCart(item))

    return !isLoadingDetail ? (
        <Box
            pb='4'
            pt='8'
            bg='white'
            rounded='lg'
            shadow='sm'
            pos='sticky'
            top='80px'
        >
            <Container maxW={[1024]}>
                <Stat>
                    <StatNumber>Giá : £ {price?.value}</StatNumber>
                    <StatHelpText display='flex' alignItems='center'>
                        <strike> £ {price?.value}</strike>
                        <Badge colorScheme='green' ml='4'>
                            tiết kiệm 0%
                        </Badge>
                    </StatHelpText>
                </Stat>
                <Button
                    colorScheme='messenger'
                    w={['full']}
                    leftIcon={<AiOutlineShoppingCart />}
                    onClick={() => handleAddToCart(courseDetail)}
                >
                    Thêm vào giỏ hàng
                </Button>
                <Button
                    colorScheme='messenger'
                    variant='outline'
                    w={['full']}
                    mt='2'
                    leftIcon={<HiOutlineTicket />}
                    onClick={() => {
                        handleAddToCart(courseDetail)
                        router.push('/cart')
                    }}
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
                                <ListIcon
                                    as={MdCheckCircle}
                                    color='green.500'
                                />
                                {courseFea}
                            </ListItem>
                        ))}
                </List>
                <Divider py='2' />
                <Box>
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
            </Container>
        </Box>
    ) : (
        <Box
            pb='4'
            pt='8'
            px='4'
            bg='white'
            rounded='lg'
            shadow='sm'
            pos='sticky'
            top='80px'
        >
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
