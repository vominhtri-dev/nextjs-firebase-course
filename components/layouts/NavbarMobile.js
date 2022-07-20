import {
    Box,
    Button,
    Grid,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    SlideFade,
    Text,
    useOutsideClick,
} from "@chakra-ui/react"
import { useRef, useState } from "react"
import { ChevronLeftIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons"
import { AiOutlineUser } from "react-icons/ai"
import { useRouter } from "next/router"
import NextLink from "next/link"

const NavbarMobile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const modelRef = useRef()
    const NAVLINK = [
        {
            path: "/",
            title: "Trang chủ",
        },
        {
            path: "/courses",
            title: "Khóa học",
        },
        {
            path: "/blog",
            title: "Thư viện",
        },
        {
            path: "/card",
            title: "Giỏ hàng",
        },
    ]

    const router = useRouter()

    useOutsideClick({
        ref: modelRef,
        handler: () => setIsModalOpen(false),
    })

    return (
        <Box pos='relative'>
            <IconButton
                icon={<ChevronLeftIcon />}
                size='sm'
                colorScheme='messenger'
                mr='4'
                variant='ghost'
                onClick={() => router.back()}
            />
            <IconButton
                icon={<HamburgerIcon />}
                size='sm'
                variant='ghost'
                onClick={() => setIsModalOpen((prev) => !prev)}
            />

            <SlideFade in={isModalOpen} offsetY='40px' unmountOnExit='true'>
                <Box
                    w={{ base: "100vw", sm: "sm", md: "600px" }}
                    marginTop='30px'
                    right={["-4", "0"]}
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
                            base: "repeat(1, 1fr)",
                            md: "repeat(2, 1fr)",
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

                        {NAVLINK.map((navlink, idx) => (
                            <Text
                                color={
                                    router.pathname === navlink.path &&
                                    "#4549e0"
                                }
                                key={idx}
                                onClick={() => setIsModalOpen(false)}
                            >
                                <NextLink href={navlink.path} key={idx}>
                                    {navlink.title}
                                </NextLink>
                            </Text>
                        ))}
                        <Button
                            colorScheme='messenger'
                            size='sm'
                            leftIcon={<AiOutlineUser />}
                        >
                            Dùng thử free
                        </Button>
                    </Grid>
                </Box>
            </SlideFade>
        </Box>
    )
}

export default NavbarMobile
