import {
    Box,
    Grid,
    GridItem,
    IconButton,
    SlideFade,
    Text,
    useOutsideClick,
    HStack,
    Spacer,
    Link,
    Center,
    Divider,
    Button,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import NextLink from 'next/link'
import { CloseIcon } from '@chakra-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import renderByLine from '../../helper/renderByLine'
import { removeInCart } from '../../redux/slice/cartSlice'

const NavbarCart = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { cart, quantity, total } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const modelRef = useRef()
    useOutsideClick({
        ref: modelRef,
        handler: () => setIsModalOpen(false),
    })

    // Remove item in cart
    const handleRemoveInCart = (id) => dispatch(removeInCart(id))

    return (
        <Box pos='relative'>
            <Button
                bgColor='gray.100'
                size='sm'
                variant='ghost'
                onClick={() => setIsModalOpen((prev) => !prev)}
            >
                <AiOutlineShoppingCart />
                {/* Badge */}
                {quantity !== 0 && (
                    <Center
                        ml='2'
                        rounded='md'
                        fontSize='x-small'
                        bg='red.500'
                        color='white'
                        w='5'
                        h='5'
                    >
                        {quantity}
                    </Center>
                )}
            </Button>
            <SlideFade in={isModalOpen} offsetY='40px' unmountOnExit='true'>
                <Box
                    w={{ md: '400px' }}
                    marginTop='30px'
                    right='0'
                    bg='white'
                    pos='absolute'
                    borderRadius='8'
                    shadow='xl'
                    px='2'
                    py='4'
                    ref={modelRef}
                >
                    <HStack px='2'>
                        <Text fontWeight='bold' h='8'>
                            Giỏ hàng
                        </Text>
                        <Spacer />
                        <NextLink href='/cart'>
                            <Link
                                h='8'
                                _hover={{ color: 'messenger.600' }}
                                onClick={() => setIsModalOpen(false)}
                            >
                                Xem tất cả
                            </Link>
                        </NextLink>
                    </HStack>

                    <Grid
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            md: 'repeat(1, 1fr)',
                        }}
                        bg='white'
                        overflowY='scroll'
                        maxH='300px'
                        px='2'
                        gap='4'
                    >
                        {cart.map((course) => (
                            <GridItem
                                key={course?._id}
                                display='flex'
                                alignItems='center'
                                justifyContent='space-between'
                                cursor='pointer'
                                _hover={{ bgColor: 'gray.100' }}
                                borderRadius='7px'
                                transitionDuration='0.7s'
                                onClick={() => setIsModalOpen(false)}
                                p='2'
                            >
                                <NextLink href={`/courses/${course?.slug}`}>
                                    <Box
                                        position='relative'
                                        display='flex'
                                        alignItems='center'
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
                                        <Box w='250px'>
                                            <Text
                                                fontWeight='bold'
                                                title={course?.title}
                                            >
                                                {renderByLine(
                                                    course?.title,
                                                    40
                                                )}
                                            </Text>

                                            <Text fontSize='sm' mr='2'>
                                                £ {course?.price?.value}
                                            </Text>
                                        </Box>
                                    </Box>
                                </NextLink>
                                <IconButton
                                    icon={<CloseIcon />}
                                    size='sm'
                                    colorScheme='messenger'
                                    variant='ghost'
                                    onClick={() =>
                                        handleRemoveInCart(course?._id)
                                    }
                                />
                            </GridItem>
                        ))}
                    </Grid>

                    <Divider orientation='horizontal' mt='4' />
                    <HStack my='4' mx='2'>
                        <Text fontWeight='bold'>
                            Tổng tiền
                            {` (${quantity})`}
                        </Text>
                        <Spacer />

                        <Text fontWeight='medium' mr='2'>
                            £ {total}
                        </Text>
                    </HStack>
                    <NextLink href='/cart'>
                        <Button
                            mx='2'
                            colorScheme='messenger'
                            w='calc(100% - 1em)'
                            onClick={() => setIsModalOpen(false)}
                        >
                            Thanh toán
                        </Button>
                    </NextLink>
                </Box>
            </SlideFade>
        </Box>
    )
}

export default NavbarCart
