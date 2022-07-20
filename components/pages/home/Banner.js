import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Container,
    Flex,
    Text,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Link from "next/link"
import BannerHeading from "./BannerHeading"

const Banner = (props) => {
    const { pageText, headingText, desText, ctaText } = props
    return (
        <Box
            bg='#4549e0'
            bgGradient={{
                base: "#4549e0",
                md: "linear(to-r, #4549e0, #4549e0, #4549e0, #805AD5)",
            }}
            h={["auto", "auto", "350"]}
            textColor='white'
        >
            <Container maxW={[1024]}>
                <Breadcrumb
                    py='8'
                    spacing='8px'
                    separator={<ChevronRightIcon />}
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Trang chủ</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Link href='/courses'>
                            <BreadcrumbLink href='/#'>Khóa học</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Flex direction={["column", "column", "row"]}>
                    <BannerHeading text={pageText} />
                    <Box pl={["0", "0", "8"]}>
                        <Text fontSize='3xl' fontWeight='bold'>
                            {headingText && headingText}
                        </Text>
                        <Text fontSize='lg' my='4' fontWeight={"light"}>
                            {desText && desText}
                        </Text>
                        <Button
                            color='black'
                            rightIcon={<ChevronRightIcon />}
                            mb='8'
                        >
                            {ctaText && ctaText}
                        </Button>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Banner
