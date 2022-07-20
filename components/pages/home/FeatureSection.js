import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react"
import CourseCard from "./CourseCard"

const FeatureSection = () => {
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
            catelogy: "javascript",
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
            catelogy: "PHP",
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
            catelogy: "PHP",
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
            catelogy: "HTML, CSS",
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
            catelogy: "HTML, CSS",
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
            catelogy: "HTML, CSS",
        },
    ]

    return (
        <Box py='8'>
            <Container maxW={[1024]}>
                <Box textAlign='center'>
                    <Text color='messenger.600'>
                        Khóa học nhiều người tham gia
                    </Text>
                    <Text fontSize='4xl' fontWeight='bold' pb='8'>
                        Những khóa học tiêu biểu
                    </Text>
                </Box>
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
                            <CourseCard course={course} showCatelogy={true} />
                        </GridItem>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default FeatureSection
