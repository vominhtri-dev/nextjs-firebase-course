import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Container,
    Flex,
    Text,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import styles from '../../../styles/banner.module.css'

const Banner = (props) => {
    const {
        bannerText,
        headingText,
        desText,
        ctaText,
        primaryColor,
        secondaryColor,
    } = props
    return (
        <Box
            bg={primaryColor}
            bgGradient={{
                base: primaryColor,
                md: `linear(to-r,${primaryColor}, ${primaryColor}, ${primaryColor}, ${secondaryColor})`,
            }}
            h={['auto', 'auto', '350']}
            textColor='white'
        >
            <Container maxW={[1024]}>
                <Breadcrumb
                    py='8'
                    spacing='8px'
                    separator={<ChevronRightIcon />}
                >
                    <BreadcrumbItem>
                        <Link href='/'>
                            <BreadcrumbLink>Trang chủ</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Link href='/courses'>
                            <BreadcrumbLink>Khóa học</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Flex direction={['column', 'column', 'row']}>
                    <Box maxW={['auto', '400']} height='200'>
                        <Box
                            className={styles.banner__text}
                            bgColor={primaryColor}
                        >
                            <Box
                                bgColor={primaryColor}
                                className={styles.banner__slash}
                            ></Box>
                            {bannerText}
                        </Box>
                        <Text
                            className={styles.banner__text}
                            bgColor={primaryColor}
                            _after={{
                                bgColor: primaryColor,
                            }}
                        >
                            {bannerText}
                        </Text>
                        <Text
                            className={styles.banner__text}
                            bgColor={primaryColor}
                            _after={{
                                bgColor: primaryColor,
                            }}
                        >
                            {bannerText}
                        </Text>
                    </Box>
                    <Box pl={['0', '0', '8']}>
                        <Text fontSize='3xl' fontWeight='bold'>
                            {headingText && headingText}
                        </Text>
                        <Text fontSize='lg' my='4' fontWeight={'light'}>
                            {desText && desText}
                        </Text>
                        <Button
                            color='black'
                            rightIcon={<ChevronRightIcon />}
                            mb='8'
                        >
                            {(ctaText && ctaText) || 'Học ngay nào'}
                        </Button>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Banner
