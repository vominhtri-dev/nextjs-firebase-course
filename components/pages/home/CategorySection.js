import {
    Box,
    Button,
    Container,
    Grid,
    GridItem,
    IconButton,
    Text,
} from '@chakra-ui/react'
import { AiFillHtml5, AiFillMobile } from 'react-icons/ai'
import { BsFillTerminalFill, BsFillHddNetworkFill } from 'react-icons/bs'
import { DiJavascript1 } from 'react-icons/di'
import { MdTipsAndUpdates } from 'react-icons/md'
import { FaDatabase, FaGamepad } from 'react-icons/fa'

const CategorySection = () => {
    const data = [
        {
            title: 'Design UX - UI',
            totalUser: 200,
            icon: <AiFillHtml5 />,
        },
        {
            totalUser: 200,
            title: 'Web development',
            icon: <BsFillTerminalFill />,
        },
        {
            totalUser: 200,
            title: 'Programing',
            icon: <DiJavascript1 />,
        },
        { title: 'Mobile dev ', totalUser: 200, icon: <AiFillMobile /> },
        { title: 'Tip & Trick', totalUser: 200, icon: <MdTipsAndUpdates /> },
        { title: 'Database', totalUser: 200, icon: <FaDatabase /> },
        { title: 'Game development', totalUser: 200, icon: <FaGamepad /> },
        { title: 'Network', totalUser: 200, icon: <BsFillHddNetworkFill /> },
    ]
    return (
        <Box p='4'>
            <Container maxW={[1024]}>
                <Box>
                    <Text color='messenger.600'>Tổng hợp các danh mục</Text>
                    <Text fontSize='3xl' fontWeight='bold'>
                        Hãy lựa chọn một danh mục
                    </Text>
                    <Text pb='8'>
                        Chúng tôi đã chọn và tổng hợp những danh mục nổi bật
                        được nhiều học viên lựa chọn
                    </Text>
                </Box>

                <Grid
                    templateColumns={[
                        'repeat(1, 1fr)',
                        'repeat(2, 1fr)',
                        'repeat(3, 1fr)',
                        'repeat(4, 1fr)',
                    ]}
                    gap='4'
                >
                    {data.map((cate, idx) => (
                        <GridItem key={idx}>
                            <Box
                                shadow='md'
                                bg='white'
                                p='4'
                                borderRadius='8'
                                cursor='pointer'
                                display='flex'
                            >
                                <IconButton icon={cate.icon} mr='2' />
                                <Box>
                                    <Text fontWeight='bold' noOfLines={1}>
                                        {cate.title}
                                    </Text>
                                    <Text
                                        my='2'
                                        fontSize='sm'
                                        fontWeight='hairline'
                                    >
                                        Số học viên {cate.totalUser}
                                    </Text>
                                    <Button colorScheme={'messenger'} size='xs'>
                                        Đọc thêm
                                    </Button>
                                </Box>
                            </Box>
                        </GridItem>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default CategorySection
