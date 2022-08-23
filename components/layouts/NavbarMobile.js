import {
    Box,
    Button,
    Grid,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    SlideFade,
    Text,
    useOutsideClick,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { ChevronLeftIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import { AiOutlineUser } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import NavbarUser from './NavbarUser'
import NextLink from 'next/link'
import NavbarCart from './NavbarCart'

const NavbarMobile = () => {
    const { currentUser, isLogin } = useSelector((st) => st.auth)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const modelRef = useRef()
    const router = useRouter()
    const NAVLINK = [
        {
            path: '/',
            title: 'Trang chủ',
        },
        {
            path: '/courses',
            title: 'Khóa học',
        },
        {
            path: '/blog',
            title: 'Thư viện',
        },
        {
            path: '/cart',
            title: 'Giỏ hàng',
        },
    ]

    useOutsideClick({
        ref: modelRef,
        handler: () => setIsModalOpen(false),
    })

    return (
        <Box pos='relative'>
            <HStack>
                <IconButton
                    icon={<ChevronLeftIcon />}
                    size='sm'
                    colorScheme='messenger'
                    variant='ghost'
                    onClick={() => router.back()}
                />
                {/* // Cart  */}
                <NavbarCart />
                <IconButton
                    icon={<HamburgerIcon />}
                    size='sm'
                    onClick={() => setIsModalOpen((prev) => !prev)}
                />
                {/* User panel */}
                <NavbarUser />
            </HStack>
            <SlideFade in={isModalOpen} offsetY='40px' unmountOnExit='true'>
                <Box
                    w={{ base: '100vw', sm: 'sm', md: '600px' }}
                    marginTop='30px'
                    right={['-4', '0']}
                    bg='white'
                    pos='absolute'
                    borderRadius='8'
                    shadow='xl'
                    p='4'
                    ref={modelRef}
                >
                    <Text fontWeight='bold' h='8'>
                        Tìm kiếm
                    </Text>

                    <Grid
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            md: 'repeat(2, 1fr)',
                        }}
                        gap='4'
                    >
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <SearchIcon color='gray.300' />
                            </InputLeftElement>
                            <Input
                                type='tel'
                                placeholder='Tìm kiếm khóa học ... '
                                borderRadius='10'
                            />
                        </InputGroup>
                        {currentUser.isAdmin && (
                            <Text
                                onClick={() => setIsModalOpen(false)}
                                color='#4549e0'
                            >
                                <NextLink href={`/admin`}>
                                    Trang quản trị
                                </NextLink>
                            </Text>
                        )}

                        {NAVLINK.map((navlink, idx) => (
                            <Text
                                color={
                                    router.pathname === navlink.path &&
                                    '#4549e0'
                                }
                                key={idx}
                                onClick={() => setIsModalOpen(false)}
                            >
                                <NextLink href={navlink.path} key={idx}>
                                    {navlink.title}
                                </NextLink>
                            </Text>
                        ))}
                        {!isLogin && (
                            <Button
                                colorScheme='messenger'
                                size='sm'
                                leftIcon={<AiOutlineUser />}
                                onClick={() => router.push('/login')}
                            >
                                Đăng nhập
                            </Button>
                        )}
                    </Grid>
                </Box>
            </SlideFade>
        </Box>
    )
}

export default NavbarMobile
