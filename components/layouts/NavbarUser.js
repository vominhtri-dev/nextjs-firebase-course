import {
    Box,
    SlideFade,
    Text,
    useOutsideClick,
    HStack,
    Badge,
    Divider,
    Button,
    Avatar,
    useMediaQuery,
} from "@chakra-ui/react"
import { useRef, useState } from "react"
import NextLink from "next/link"
import { useSelector, useDispatch } from "react-redux"
import { logoutService } from "../../service/auth"
import { logoutAction } from "../../redux/slice/authSlice"
import { useRouter } from "next/router"
const NavbarUser = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { isLogin, currentUser } = useSelector((st) => st.auth)
    const modelRef = useRef()
    const dispatch = useDispatch()
    const router = useRouter()
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

    // funtion logout
    const handleLogout = async () => {
        setIsModalOpen(false)
        await logoutService()
        dispatch(logoutAction())
    }

    useOutsideClick({
        ref: modelRef,
        handler: () => setIsModalOpen(false),
    })
    const NAVLINK = [
        {
            path: "/profile",
            title: "Trang cá nhân",
        },
        {
            path: "/courses",
            title: "Danh sách khóa học",
        },
        {
            path: "/blog",
            title: "Danh sách yêu thích",
        },
        {
            path: "/bookmark",
            title: "Bài viết đã lưu",
        },
    ]

    const renderAvatar = () => {
        return isLargerThan768 ? (
            <HStack onClick={() => setIsModalOpen((prev) => !prev)}>
                <Button size='sm'>{currentUser?.displayName}</Button>
                <Avatar
                    size='sm'
                    name={currentUser?.displayName}
                    src={currentUser?.photoURL}
                />
            </HStack>
        ) : (
            <Button
                rounded='full'
                p='0'
                onClick={() => setIsModalOpen((prev) => !prev)}
            >
                <Avatar
                    size='sm'
                    name={currentUser?.displayName}
                    src={currentUser?.photoURL}
                />
            </Button>
        )
    }

    return (
        <Box pos='relative'>
            {!isLogin ? (
                <NextLink href='/login'>
                    <Button colorScheme='messenger' size='sm'>
                        Đăng nhập
                    </Button>
                </NextLink>
            ) : (
                renderAvatar()
            )}

            <SlideFade in={isModalOpen} offsetY='40px' unmountOnExit='true'>
                <Box
                    minW='300px'
                    marginTop='30px'
                    right='0'
                    bg='white'
                    pos='absolute'
                    borderRadius='8'
                    shadow='xl'
                    py='2'
                    px='4'
                    ref={modelRef}
                >
                    <HStack my='2' bg='blue.50' p='2' rounded='md'>
                        {/* Avatar user  */}
                        <Avatar
                            size='sm'
                            name={currentUser?.displayName}
                            src={currentUser?.photoURL}
                        />
                        <Box my='2'>
                            <Text fontWeight='medium'>
                                {currentUser.displayName}
                            </Text>
                            <Badge colorScheme='green' fontSize='0.7rem'>
                                Thành viên mới
                            </Badge>
                        </Box>
                    </HStack>

                    {currentUser.isAdmin && (
                        <Text
                            onClick={() => setIsModalOpen(false)}
                            my='2'
                            color='#4549e0'
                        >
                            <NextLink href={`/admin`}>Trang quản trị</NextLink>
                        </Text>
                    )}
                    {NAVLINK.map((navlink, idx) => (
                        <Text
                            color={
                                router.pathname === navlink.path && "#4549e0"
                            }
                            key={idx}
                            onClick={() => setIsModalOpen(false)}
                            my='2'
                        >
                            <NextLink href={navlink.path}>
                                {navlink.title}
                            </NextLink>
                        </Text>
                    ))}

                    <Divider orientation='horizontal' my='2' />
                    <Button
                        colorScheme='messenger'
                        w='full'
                        size='sm'
                        variant='ghost'
                        onClick={handleLogout}
                    >
                        Đăng xuất
                    </Button>
                </Box>
            </SlideFade>
        </Box>
    )
}

export default NavbarUser
