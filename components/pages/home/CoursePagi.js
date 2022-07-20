import { Box, Button, Flex, IconButton, Spacer, Text } from "@chakra-ui/react"
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ArrowRightIcon,
} from "@chakra-ui/icons"

const CoursePagi = () => {
    return (
        <Flex py='4' direction={["column", "row"]}>
            <Box>
                <Text>Có tổng cộng 200 kết quả</Text>
            </Box>
            <Spacer />
            <Box mt={["4", 0]}>
                <Button colorScheme='messenger' size='sm' mr='2'>
                    1
                </Button>
                <Button size='sm' mr='2'>
                    2
                </Button>
                <Button size='sm' mr='2'>
                    3
                </Button>
                <IconButton
                    icon={<ChevronLeftIcon />}
                    size='sm'
                    mr='2'
                    disabled
                />
                <IconButton icon={<ChevronRightIcon />} size='sm' mr='2' />
                <IconButton
                    icon={<ArrowRightIcon />}
                    colorScheme='messenger'
                    size='sm'
                    fontSize='7px'
                    mr='2'
                />
            </Box>
        </Flex>
    )
}

export default CoursePagi
