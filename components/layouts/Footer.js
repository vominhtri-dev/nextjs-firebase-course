import {
    Box,
    Button,
    Container,
    Grid,
    GridItem,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Text,
} from "@chakra-ui/react"
import { EmailIcon } from "@chakra-ui/icons"
import logoImg from "../../public/favicon.png"
import Image from "next/image"
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs"

const Footer = () => {
    const cate = [
        {
            title: "Design UX - UI",
            totalUser: 200,
        },
        {
            totalUser: 200,
            title: "Web development",
        },
        {
            totalUser: 200,
            title: "Programing",
        },
        { title: "Mobile dev ", totalUser: 200 },
        { title: "Tip & Trick", totalUser: 200 },
        { title: "Database", totalUser: 200 },
    ]

    const courses = [
        "Khóa học cho người mới",
        "khóa nâng cao",
        "Khóa học javascript",
        "Khóa định hướng",
        "khóa miễn phí",
    ]
    return (
        <Box
            mt='8'
            bg='#4549e0'
            bgGradient='linear(to-r, #4549e0, #4549e0, #4549e0, #805AD5)'
            textColor='white'
            px='4'
            py='8'
        >
            <Container maxW={[1024]}>
                <Grid
                    gridTemplateColumns={[
                        "repeat(1,1fr)",
                        "repeat(2,1fr)",
                        "repeat(3,1fr)",
                        "repeat(4,1fr)",
                    ]}
                    gap='4'
                >
                    <GridItem>
                        <Stack direction='row' align='center' mb='4'>
                            <Image
                                src={logoImg}
                                alt='logo image'
                                width={30}
                                height={30}
                            />
                            <Link href='/'>TRIDEV.IO</Link>
                        </Stack>
                        <Text fontWeight='hairline'>
                            Website cung cấp cho bạn các khóa học, bài giảng,
                            thông tin về lập trình một cách hoàn toàn miễn phí .
                        </Text>
                        <Text fontWeight='bold' my='2'>
                            Theo dõi chúng tôi
                        </Text>
                        <IconButton
                            icon={<BsFacebook />}
                            mr='2'
                            variant='ghost'
                            colorScheme='blackAlpha'
                            borderRadius='full'
                            color='white'
                        />
                        <IconButton
                            icon={<BsTwitter />}
                            mr='2'
                            variant='ghost'
                            colorScheme='blackAlpha'
                            borderRadius='full'
                            color='white'
                        />
                        <IconButton
                            icon={<BsYoutube />}
                            mr='2'
                            variant='ghost'
                            colorScheme='blackAlpha'
                            borderRadius='full'
                            color='white'
                        />
                    </GridItem>
                    <GridItem>
                        <Text fontWeight='bold'>Khóa học</Text>
                        {courses.map((course, idx) => (
                            <Text fontWeight='light' key={idx} my='2'>
                                {course}
                            </Text>
                        ))}
                    </GridItem>
                    <GridItem>
                        <Text fontWeight='bold'>Danh mục</Text>
                        {cate.map((cate, idx) => (
                            <Text fontWeight='light' key={idx} my='2'>
                                {cate.title}
                            </Text>
                        ))}
                    </GridItem>
                    <GridItem>
                        <Text fontWeight='bold'>Đăng ký</Text>

                        <Text fontWeight='light'>
                            Hãy nhập đăng ký nhận các thông tin mới nhất từ
                            website
                        </Text>
                        <InputGroup mt='4'>
                            <InputLeftElement pointerEvents='none'>
                                <EmailIcon color='gray.400' />
                            </InputLeftElement>
                            <Input
                                type='tel'
                                placeholder='Hãy nhập email '
                                bgColor='gray.100'
                                color='black'
                            />
                            <Button ml='2' color='black' fontWeight='hairline'>
                                Gửi
                            </Button>
                        </InputGroup>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer
