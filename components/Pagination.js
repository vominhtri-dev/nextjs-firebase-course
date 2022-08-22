import { Box, Button, Flex, IconButton, Spacer, Text } from '@chakra-ui/react'
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    // ArrowRightIcon,
} from '@chakra-ui/icons'

const Pagination = ({
    pageLength,
    onNextPage,
    currentPage,
    onChosePage,
    onPrevPage,
    pageSize,
}) => {
    const countPageLists = Math.ceil(pageLength / pageSize)
    return (
        <Flex py='4' direction={['column', 'row']}>
            <Box>
                <Text>Có tất cả {pageLength} kết quả</Text>
            </Box>
            <Spacer />
            <Box mt={['4', 0]}>
                {Array.from(Array(countPageLists).keys()).map((page) => {
                    const pageNum = page + 1 // array start form 0
                    return (
                        <Button
                            size='sm'
                            mr='2'
                            onClick={() => onChosePage(pageNum)}
                            key={page}
                            colorScheme={
                                currentPage === pageNum ? 'messenger' : 'gray'
                            }
                        >
                            {pageNum}
                        </Button>
                    )
                })}
                <IconButton
                    icon={<ChevronLeftIcon />}
                    size='sm'
                    mr='2'
                    disabled={currentPage < 2}
                    onClick={onPrevPage}
                />
                <IconButton
                    icon={<ChevronRightIcon />}
                    size='sm'
                    mr='2'
                    disabled={currentPage >= countPageLists}
                    onClick={onNextPage}
                />
                {/* <IconButton
                    icon={<ArrowRightIcon />}
                    colorScheme='messenger'
                    size='sm'
                    fontSize='7px'
                    mr='2'
                /> */}
            </Box>
        </Flex>
    )
}

export default Pagination
