import {
    Box,
    Button,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    SlideFade,
    Text,
    useOutsideClick,
} from "@chakra-ui/react"
import { useRef, useState } from "react"
import { ChevronLeftIcon, HamburgerIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"
import NextLink from "next/link"
import { SearchIcon } from "@chakra-ui/icons"

import { AiFillHome, AiOutlineDashboard } from "react-icons/ai"
import { MdDashboard } from "react-icons/md"
import { FaThList } from "react-icons/fa"
import { BsBookmarks } from "react-icons/bs"
import NavbarUser from "../NavbarUser"

const AdminNavbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const modelRef = useRef()
    const router = useRouter()
    const adminLink = [
        {
            id: 0,
            path: "/",
            title: "Trang chủ",
            icon: <AiFillHome />,
        },
        {
            id: 1,
            path: "/admin/dashboard",
            title: "Thống kê",
            icon: <AiOutlineDashboard />,
        },
        {
            id: 2,
            path: "/admin/manage-courses",
            title: "Quản lý khóa học",
            icon: <MdDashboard />,
        },
        {
            id: 3,
            path: "/admin/manage-category",
            title: "Quản lý danh mục",
            icon: <FaThList />,
        },
        {
            id: 4,
            path: "/admin/manage-blog",
            title: "Quản lý blog",
            icon: <BsBookmarks />,
        },
    ]

    useOutsideClick({
        ref: modelRef,
        handler: () => setIsModalOpen(false),
    })
    return (
        <Box
            pos='fixed'
            zIndex={"2"}
            top='0'
            right='0'
            w={["full", "full", "calc(100% - 300px)"]}
            h='16'
            bg='gray.100'
            p='4'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
        >
            <Box pos='relative'>
                <IconButton
                    icon={<HamburgerIcon />}
                    size='sm'
                    display={["block", "block", "none"]}
                    variant='ghost'
                    mr='4'
                    onClick={() => setIsModalOpen((prev) => !prev)}
                />
                <SlideFade in={isModalOpen} offsetY='40px' unmountOnExit='true'>
                    <Box
                        w={{ base: "100vw", sm: "sm", md: "400px" }}
                        marginTop='30px'
                        left={["-4", "0"]}
                        bg='white'
                        pos='absolute'
                        borderRadius='8'
                        shadow='xl'
                        p='4'
                        ref={modelRef}
                    >
                        <Text fontWeight='bold'>Quản lý</Text>
                        {adminLink.map((link) => (
                            <NextLink href={link.path} passHref key={link.id}>
                                <Link
                                    display='block'
                                    my='4'
                                    _hover={{ color: "blue.600" }}
                                >
                                    <Button
                                        colorScheme='messenger'
                                        w='full'
                                        justifyContent='start'
                                        leftIcon={link.icon}
                                        variant={
                                            link.path === router.pathname
                                                ? "solid"
                                                : "ghost"
                                        }
                                    >
                                        {link.title}
                                    </Button>
                                </Link>
                            </NextLink>
                        ))}
                    </Box>
                </SlideFade>
            </Box>
            <InputGroup size={"sm"}>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.500' />
                </InputLeftElement>
                <Input
                    type='tel'
                    placeholder='Tìm kiếm ... '
                    borderRadius='4'
                    bg='ghostwhite'
                    maxW='300px'
                />
            </InputGroup>
            <Flex align='center'>
                <IconButton
                    icon={<ChevronLeftIcon />}
                    size='sm'
                    colorScheme='messenger'
                    mr='4'
                    variant='ghost'
                    onClick={() => router.back()}
                />
                <NavbarUser />
            </Flex>
        </Box>
    )
}

export default AdminNavbar
