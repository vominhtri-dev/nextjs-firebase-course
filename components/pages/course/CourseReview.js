import { StarIcon } from "@chakra-ui/icons"
import {
    Box,
    Center,
    Grid,
    GridItem,
    HStack,
    Progress,
    Text,
} from "@chakra-ui/react"
import CourseComment from "./CourseComment"

export default function CourseReview() {
    const grade = [
        {
            title: "Xuất sắc",
            value: 60,
        },
        {
            title: "Tốt",
            value: 20,
        },
        {
            title: "Trung bình",
            value: 6,
        },
        {
            title: "kém",
            value: 10,
        },
        {
            title: "Cực tệ",
            value: 4,
        },
    ]

    return (
        <Box>
            <Text fontWeight='bold'>Đánh giá</Text>
            <Text>Xem những người đã mua cảm nhận thế nào.</Text>

            <Grid gridTemplateColumns={"repeat(12, 1fr)"} mt='4' gap='2'>
                <GridItem colSpan={["12", "12", "4"]} bg='blue.50' rounded='lg'>
                    <Center h='full' flexDir={"column"} p='4'>
                        <Text fontWeight='bold' fontSize='4xl'>
                            5.0
                        </Text>
                        <HStack>
                            <StarIcon color='yellow.400' fontSize='xs' />
                            <StarIcon color='yellow.400' fontSize='xs' />
                            <StarIcon color='yellow.400' fontSize='xs' />
                            <StarIcon color='yellow.400' fontSize='xs' />
                            <StarIcon color='yellow.400' fontSize='xs' />
                        </HStack>
                        <Text fontSize='md' fontWeight='light' mt='2'>
                            12 Đánh giá
                        </Text>
                    </Center>
                </GridItem>
                <GridItem
                    colSpan={["12", "12", "8"]}
                    bg='blue.50'
                    rounded='lg'
                    p='4'
                >
                    <Grid gridTemplateColumns={"repeat(12, 1fr)"} gap='4'>
                        {/* list grade title ex : xuat sac, gioi  */}
                        <GridItem colSpan={["4", "3", "3"]}>
                            {grade.map((grade, idx) => (
                                <Text py='1' key={idx} fontSize='xs'>
                                    {grade.title}
                                </Text>
                            ))}
                        </GridItem>
                        {/* Prosset bar */}
                        <GridItem colSpan={["6", "7", "7"]}>
                            {grade.map((grade, idx) => (
                                <Box py='11' key={idx}>
                                    <Progress
                                        colorScheme='blue'
                                        size='xs'
                                        value={grade.value}
                                        bgColor='gray.300'
                                    />
                                </Box>
                            ))}
                        </GridItem>
                        {/* value Prosset bar */}
                        <GridItem colSpan={["2", "2", "2"]}>
                            {grade.map((grade, idx) => (
                                <Text
                                    py='1'
                                    textAlign='right'
                                    key={idx}
                                    fontSize='xs'
                                >
                                    {grade.value}%
                                </Text>
                            ))}
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>

            {/* Comment section */}
            <CourseComment />
        </Box>
    )
}
