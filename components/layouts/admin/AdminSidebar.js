import { Box, Button, Link, Stack } from "@chakra-ui/react"
import React from "react"
import logoImg from "../../../public/favicon.png"
import NextLink from "next/link"
import Image from "next/image"
import { AiOutlineDashboard } from "react-icons/ai"
import { MdDashboard } from "react-icons/md"
import { FaThList } from "react-icons/fa"
import { BsBookmarks } from "react-icons/bs"
import { useRouter } from "next/router"
const AdminSidebar = () => {
    const adminLink = [
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

    const { pathname } = useRouter()

    return (
        <Box
            p='4'
            bg='gray.50'
            pos='fixed'
            top='0'
            left='0'
            w='300px'
            h='100vh'
            borderRight='1px'
            borderColor='gray.100'
            display={["none", "none", "block"]}
        >
            <Stack
                direction='row'
                align='center'
                display={["none", "none", "flex"]}
                color='messenger.600'
                height='20'
            >
                <Image src={logoImg} alt='logo image' width={30} height={30} />
                <NextLink href='/'>TRIDEV.IO</NextLink>
            </Stack>

            {adminLink.map((link) => (
                <NextLink href={link.path} passHref key={link.id}>
                    <Link display='block' my='4' _hover={{ color: "blue.600" }}>
                        <Button
                            colorScheme='messenger'
                            w='full'
                            justifyContent='start'
                            leftIcon={link.icon}
                            variant={
                                pathname.includes(link.path) ? "solid" : "ghost"
                            }
                        >
                            {link.title}
                        </Button>
                    </Link>
                </NextLink>
            ))}
        </Box>
    )
}

export default AdminSidebar
