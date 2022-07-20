import {
    Box,
    Container,
    Grid,
    GridItem,
    Button,
    Text,
    Spacer,
    Stack,
} from "@chakra-ui/react"
import CoursePagi from "./CoursePagi"
import CourseCard from "./CourseCard"

export default function CourseSection() {
    const data = [
        {
            _id: "1",
            title: "Lập Trình JavaScript Nâng Cao",
            lever: "Beginner",
            totalUser: 55,
            writer: {
                name: "Dr strange",
                avatar: "",
            },
            start: 4.5,
            thumbnail:
                "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg",
            price: 100,
        },
        {
            _id: "1",
            title: "Lập Trình JavaScript Nâng Cao",
            lever: "Beginner",
            totalUser: 55,
            writer: {
                name: "Dr strange",
                avatar: "",
            },
            start: 4.5,
            thumbnail:
                "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg",
            price: 100,
        },
        {
            _id: "1",
            title: "Lập Trình JavaScript Nâng Cao",
            lever: "Beginner",
            totalUser: 55,
            writer: {
                name: "Dr strange",
                avatar: "",
            },
            start: 4.5,
            thumbnail:
                "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg",
            price: 100,
        },
        {
            _id: "1",
            title: "Lập Trình JavaScript Nâng Cao",
            lever: "Beginner",
            totalUser: 55,
            writer: {
                name: "Dr strange",
                avatar: "",
            },
            start: 4.5,
            thumbnail:
                "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg",
            price: 100,
        },
        {
            _id: "1",
            title: "Lập Trình JavaScript Nâng Cao",
            lever: "Beginner",
            totalUser: 55,
            writer: {
                name: "Dr strange",
                avatar: "",
            },
            start: 4.5,
            thumbnail:
                "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg",
            price: 100,
        },
        {
            _id: "1",
            title: "Lập Trình JavaScript Nâng Cao",
            lever: "Beginner",
            totalUser: 55,
            writer: {
                name: "Dr strange",
                avatar: "",
            },
            start: 4.5,
            thumbnail:
                "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg",
            price: 100,
        },
    ]

    return (
        <Box pb='4' pt='8'>
            <Container maxW={[1024]}>
                <Stack
                    direction={["column", "row"]}
                    mb={["8", "0"]}
                    align={["normal", "center"]}
                >
                    <Box pb={["0", "8"]}>
                        <Text color='messenger.600'>Những khóa học mới</Text>
                        <Text fontSize='4xl' fontWeight='bold'>
                            Lập Trình website
                        </Text>
                    </Box>
                    <Spacer />
                </Stack>
                <Grid
                    templateColumns={[
                        "repeat(1, 1fr)",
                        "repeat(1, 1fr)",
                        "repeat(2, 1fr)",
                        "repeat(3, 1fr)",
                    ]}
                    gap='4'
                >
                    {data.map((course, idx) => (
                        <GridItem key={idx}>
                            <CourseCard course={course} />
                        </GridItem>
                    ))}
                </Grid>
                <CoursePagi />
            </Container>
        </Box>
    )
}
