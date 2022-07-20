import {
    Box,
    Button,
    Grid,
    GridItem,
    IconButton,
    SlideFade,
    Text,
    useOutsideClick,
} from "@chakra-ui/react"
import { useRef, useState } from "react"
import { MdOutlineSpaceDashboard, MdNavigation } from "react-icons/md"
import { BsBook, BsNewspaper, BsCompass } from "react-icons/bs"
import NextLink from "next/link"

const NavbarModel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const modelRef = useRef()

    useOutsideClick({
        ref: modelRef,
        handler: () => setIsModalOpen(false),
    })

    const FEATURE = [
        {
            title: "Danh mục khóa học",
            des: "Cung cấp kho tàng với số lượng khóa học đồ sộ.",
            icon: <BsBook />,
            path: "/courses",
            color: "messenger",
        },
        {
            title: "Định hướng mục tiêu",
            des: "Tìm hiểu lộ trình khi bắt đầu làm web từ con số không",
            icon: <MdNavigation />,
            path: "/road",
            color: "pink",
        },
        {
            title: "Khám phá thế giới web",
            des: "Khám phá những công nghệ mới, thiết kế độc lạ",
            icon: <BsCompass />,
            path: "/",
            color: "whatsapp",
        },
        {
            title: "Blog công nghệ",
            des: "Hướng dẫn lập trình, các bài viết hay, ...",
            icon: <BsNewspaper />,
            color: "purple",
            path: "/blog",
        },
    ]
    return (
        <Box pos='relative'>
            <Button
                leftIcon={<MdOutlineSpaceDashboard />}
                fontWeight='normal'
                variant='ghost'
                size='sm'
                onClick={() => setIsModalOpen((prev) => !prev)}
            >
                Danh mục
            </Button>

            <SlideFade in={isModalOpen} offsetY='40px' unmountOnExit='true'>
                <Box
                    w={{ base: "100vw", sm: "sm", md: "600px" }}
                    marginTop='30px'
                    left={["-4", "0"]}
                    bg='white'
                    pos='absolute'
                    borderRadius='8'
                    shadow='xl'
                    p='4'
                    ref={modelRef}
                >
                    <Text fontWeight='bold' h='8'>
                        Danh mục
                    </Text>

                    <Grid
                        templateColumns={{
                            base: "repeat(1, 1fr)",
                            md: "repeat(2, 1fr)",
                        }}
                        gap='4'
                    >
                        {FEATURE.map((fea, idx) => (
                            <NextLink href={fea.path} key={idx}>
                                <GridItem
                                    key={idx}
                                    display='flex'
                                    alignItems='flex-start'
                                    cursor='pointer'
                                    _hover={{ bgColor: "gray.100" }}
                                    borderRadius='7px'
                                    transitionDuration='0.7s'
                                    p='2'
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    <IconButton
                                        icon={fea.icon}
                                        colorScheme={fea.color}
                                        mt='1'
                                    />
                                    <Box pl='2'>
                                        <Text fontWeight='bold'>
                                            {fea.title}
                                        </Text>
                                        <Text fontSize='sm'>{fea.des}</Text>
                                    </Box>
                                </GridItem>
                            </NextLink>
                        ))}
                    </Grid>
                </Box>
            </SlideFade>
        </Box>
    )
}

export default NavbarModel
