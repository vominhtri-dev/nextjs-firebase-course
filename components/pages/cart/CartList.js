import { CloseIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { BsFillHeartFill } from 'react-icons/bs'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { removeInCart } from '../../../redux/slice/cartSlice'

const CartList = () => {
    const { cart } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const handleRemoveInCart = (id) => dispatch(removeInCart(id))

    return (
        <Box>
            {cart.map((course) => (
                <Flex
                    key={course?._id}
                    cursor='pointer'
                    _hover={{ bgColor: 'gray.100' }}
                    borderRadius='7px'
                    transitionDuration='0.7s'
                    alignItems='center'
                    p='2'
                    mb='2'
                >
                    <Box
                        mr='2'
                        h='10'
                        w='10'
                        position='relative'
                        rounded='md'
                        overflow='hidden'
                    >
                        <Image
                            src={course?.thumbnail}
                            alt='thumbnail'
                            layout='fill'
                            objectFit='cover'
                            priority='low'
                        />
                    </Box>
                    <Box mx='4' flexGrow='2'>
                        <NextLink href={`/courses/${course?.slug}`} passHref>
                            <Text fontWeight='bold'>{course?.title}</Text>
                        </NextLink>

                        <Flex>
                            <Text fontSize='sm' mr='2'>
                                £ {course?.price?.value}
                            </Text>
                        </Flex>
                    </Box>
                    <IconButton
                        icon={<BsFillHeartFill />}
                        size='sm'
                        color='red.300'
                        variant='ghost'
                        colorScheme='red'
                        mr='2'
                        onClick={() => console.log('liked')}
                    />
                    <IconButton
                        icon={<CloseIcon />}
                        size='sm'
                        colorScheme='messenger'
                        variant='ghost'
                        onClick={() => handleRemoveInCart(course._id)}
                    />
                </Flex>
            ))}
        </Box>
    )
}

export default CartList
