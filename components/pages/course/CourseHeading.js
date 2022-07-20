import React from "react"
import {
    Badge,
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    IconButton,
    Text,
} from "@chakra-ui/react"
import { StarIcon, WarningIcon } from "@chakra-ui/icons"
import { BsFillHeartFill } from "react-icons/bs"

export default function CourseHeading() {
    return (
        <Box pos='relative'>
            <Heading as='h1' size={["lg", "xl"]} my='4' pr='14'>
                Khóa học javascript nâng cao
            </Heading>

            <HStack>
                <Badge colorScheme='green' px='3'>
                    Khóa học lập trình
                </Badge>

                <span>5.0</span>
                <StarIcon color='yellow.400' />
                <StarIcon color='yellow.400' />
                <StarIcon color='yellow.400' />
                <StarIcon color='yellow.400' />
                <StarIcon color='yellow.400' />
            </HStack>
            <Grid gridTemplateColumns='repeat(10, 1fr)' my='4'>
                <GridItem colSpan={["10", "10", "8"]}>
                    <Grid gridTemplateColumns='repeat(9, 1fr)' gap='2'>
                        <GridItem colSpan={["4", "3", "3"]}>
                            <Text fontWeight='light' color='gray.800'>
                                Lần cuối cập nhật
                            </Text>
                            <Text fontWeight='bold'>Tháng 7 2023</Text>
                        </GridItem>
                        <GridItem colSpan={["4", "3", "3"]}>
                            <Text fontWeight='light' color='gray.800'>
                                Trình độ
                            </Text>
                            <Text fontWeight='bold'>Nâng cao</Text>
                        </GridItem>
                        <GridItem colSpan={["4", "3", "3"]}>
                            <Text fontWeight='light' color='gray.800'>
                                Số học viên
                            </Text>
                            <Text fontWeight='bold'>15000</Text>
                        </GridItem>
                    </Grid>
                </GridItem>
                <Flex
                    direction='column'
                    align='center'
                    pos='absolute'
                    top='0'
                    right='0'
                >
                    <IconButton
                        rounded='full'
                        icon={<BsFillHeartFill />}
                        color='gray.600'
                        mb='2'
                    />
                    <IconButton
                        rounded='full'
                        icon={<WarningIcon />}
                        color='gray.600'
                    />
                </Flex>
            </Grid>
        </Box>
    )
}
