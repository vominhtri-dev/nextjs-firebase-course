import { StarIcon, PlusSquareIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { BsBriefcase, BsHeartFill } from 'react-icons/bs'
import { FaUserFriends } from 'react-icons/fa'
import { AiFillEye } from 'react-icons/ai'

import {
    Avatar,
    Box,
    Link,
    IconButton,
    HStack,
    Divider,
    StatNumber,
    Stat,
    Button,
    Stack,
    Tooltip,
    Text,
} from '@chakra-ui/react'
import { default as levelRender } from '../../../helper/level'
import Image from 'next/image'
import renderByLine from '../../../helper/renderByLine'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/slice/cartSlice'

const CourseCard = ({ course }) => {
    const {
        slug,
        title,
        thumbnail,
        writer,
        star,
        level,
        totalUsers,
        price,
        view,
    } = course

    const dispatch = useDispatch()

    // Handle add cart
    const handleAddToCart = (item) => dispatch(addToCart(item))

    return (
        <Box overflow='hidden' bg='white' shadow='md' borderRadius='10px'>
            <Box pos='relative'>
                <Box w='full' h='200' pos='relative'>
                    <Image
                        src={thumbnail}
                        alt='thumbnail'
                        layout='fill'
                        objectFit='cover'
                        priority='low'
                    />
                </Box>

                <Button
                    colorScheme='blackAlpha'
                    pos='absolute'
                    left='4'
                    bottom='4'
                    px='2'
                >
                    <Avatar
                        size='xs'
                        name={writer?.displayName}
                        src={writer?.photoURL}
                    />
                    <Box ml='2' textAlign='left'>
                        <Text fontSize='sm' my='1'>
                            {writer?.displayName}
                        </Text>
                        <Text fontSize='xx-small' my='1'>
                            Quản trị viên
                        </Text>
                    </Box>
                </Button>

                <IconButton
                    aria-label='like'
                    pos='absolute'
                    shadow='md'
                    right='4'
                    top='4'
                    borderRadius='full'
                    color='red.500'
                    icon={<BsHeartFill />}
                />
            </Box>

            <Box p='4'>
                <Box minH='60px'>
                    <NextLink href={`/courses/${slug}`} passHref>
                        <Link
                            fontSize='lg'
                            fontWeight='bold'
                            textDecoration='none'
                            transition='0.5s'
                            _hover={{ color: 'messenger.500' }}
                            title={title}
                        >
                            {renderByLine(title, 60)}
                        </Link>
                    </NextLink>
                </Box>

                <HStack my='2'>
                    <Tooltip label='Tổng học viên' fontSize='md'>
                        <IconButton
                            borderRadius='full'
                            size='xs'
                            aria-label='lever'
                            variant='outline'
                            icon={<FaUserFriends />}
                        />
                    </Tooltip>
                    <span>{totalUsers || 0}</span>
                    <Tooltip label='Tổng lược đánh giá' fontSize='md'>
                        <IconButton
                            borderRadius='full'
                            size='xs'
                            aria-label='lever'
                            variant='outline'
                            color='yellow.400'
                            icon={<StarIcon />}
                        />
                    </Tooltip>
                    <span>{star || 0}</span>
                    <Tooltip label='Tổng lược xem' fontSize='md'>
                        <IconButton
                            borderRadius='full'
                            size='xs'
                            aria-label='lever'
                            variant='outline'
                            color='green.400'
                            icon={<AiFillEye />}
                        />
                    </Tooltip>
                    <span>{view || 0}</span>
                </HStack>
                <HStack my='2'>
                    <Tooltip label='Trình độ' fontSize='md'>
                        <IconButton
                            borderRadius='full'
                            size='xs'
                            aria-label='lever'
                            variant='outline'
                            icon={<BsBriefcase />}
                        />
                    </Tooltip>
                    <span>{levelRender(level)}</span>
                </HStack>
                <Divider />
                <Stack mt='2' direction={['column', 'row', 'row']}>
                    <Stat>
                        <StatNumber title={price.value}>
                            £ {price.value && renderByLine(price.value, 6)}
                        </StatNumber>
                    </Stat>
                    <Button
                        colorScheme='messenger'
                        variant='ghost'
                        size='sm'
                        w={['full', 'auto']}
                        leftIcon={<PlusSquareIcon />}
                        onClick={() => handleAddToCart(course)}
                    >
                        Thêm giỏ hàng
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default CourseCard
