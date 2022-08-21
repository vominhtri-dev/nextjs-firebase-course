import { StarIcon } from '@chakra-ui/icons'
import {
    Avatar,
    Badge,
    Box,
    Button,
    Container,
    Divider,
    HStack,
    List,
    ListIcon,
    ListItem,
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

export default function CourseAside() {
    const { courseDetail } = useSelector((sta) => sta.course)
    const { writer, price, include, star } = courseDetail
    return (
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
                        <strike>£ 150</strike>
                        <Badge colorScheme='green' ml='4'>
                            tiết kiệm 28%
                        </Badge>
                    </StatHelpText>
                </Stat>
                <Button
                    colorScheme='messenger'
                    w={['full']}
                    leftIcon={<AiOutlineShoppingCart />}
                >
                    Thêm vào giỏ hàng
                </Button>
                <Button
                    colorScheme='messenger'
                    variant='outline'
                    w={['full']}
                    mt='2'
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
                        <HStack>
                            <Text fontSize='xs'>{star || 0}</Text>
                            <StarIcon color='yellow.400' fontSize='xs' />
                            <StarIcon color='yellow.400' fontSize='xs' />
                            <StarIcon color='yellow.400' fontSize='xs' />
                            <StarIcon color='yellow.400' fontSize='xs' />
                            <StarIcon color='yellow.400' fontSize='xs' />
                        </HStack>
                        <Button leftIcon={<BsBook />} size='xs'>
                            21 Khóa học
                        </Button>
                    </HStack>
                </Box>
            </Container>
        </Box>
    )
}
