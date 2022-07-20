import { ChevronDownIcon, StarIcon } from "@chakra-ui/icons"
import {
    Box,
    Button,
    Flex,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spacer,
    Text,
    Textarea,
} from "@chakra-ui/react"
import React, { useState } from "react"
import CommentItem from "../../CommentItem"

export default function CourseComment() {
    const [userStarChose, setUserStarChose] = useState(3)

    const comments = [
        {
            username: "Võ Minh Trí",
            created_at: "10 .07 .2022",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, cupiditate fuga! In deserunt cupiditate necessitatibus?",
            star: 5,
        },
        {
            username: "Nguyễn văn A",
            created_at: "07 .04 .2022",
            text: "Lorem ipsum dolor sit amet consectetur a?",
            star: 4,
        },
        {
            username: "Trần Thị B",
            created_at: "05 .07 .2022",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, cupiditate fuga! In deserunt cupiditate necessitatibus? em ipsum dolor sit amet consectetur adipisicing elit. Possimu",
            star: 2,
        },
        {
            username: "Lê Văn C",
            created_at: "03 .06 .2022",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, cupiditate fuga! In deserunt cupiditate necessitatibus? em ipsum dolor sit amet consectetur adipisicing elit. Possimu",
            star: 3,
        },
    ]
    const grade = [
        {
            title: "Xuất sắc",
            value: 5,
        },
        {
            title: "Tốt",
            value: 4,
        },
        {
            title: "Trung bình",
            value: 3,
        },
        {
            title: "kém",
            value: 2,
        },
        {
            title: "Cực tệ",
            value: 1,
        },
    ]
    return (
        <Box>
            <Flex align='center'>
                <Text fontWeight='bold' my='4'>
                    Bình luận ({comments.length})
                </Text>
                <Spacer />
                <Menu>
                    <MenuButton
                        as={Button}
                        size='sm'
                        rightIcon={<ChevronDownIcon />}
                    >
                        Sắp xếp
                    </MenuButton>
                    <MenuList px='2' pos='absolute' right='-100px'>
                        <MenuItem>Thời gian</MenuItem>
                        <MenuItem>Tích cực</MenuItem>
                        <MenuItem>Tiêu cực</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>

            <Textarea placeholder='Hãy cho người khác biết cảm nhận của bạn về khóa học' />
            <Flex align='center' my='2'>
                {/* Dropdown vote */}
                <Menu>
                    <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        size='sm'
                    >
                        Đánh giá
                    </MenuButton>
                    <MenuList px='2'>
                        {grade.map((gra, idx) => (
                            <MenuItem
                                key={idx}
                                onClick={() => setUserStarChose(gra.value)}
                            >
                                {" "}
                                {gra.title}{" "}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
                {/* Star review */}
                <Box mx='2'>
                    {[...Array(5).keys()].map((idx) => (
                        <StarIcon
                            color={`yellow.${
                                idx < userStarChose ? "400" : "200"
                            }`}
                            fontSize='xs'
                            key={idx}
                        />
                    ))}
                </Box>
                {/* title Star review */}
                {grade.map((gra, idx) => (
                    <Text
                        key={idx}
                        fontSize='xs'
                        fontWeight='bold'
                        display={["none", "none", "block"]}
                    >
                        {userStarChose === gra.value && gra.title}
                    </Text>
                ))}
                <Spacer />
                <Button size='sm' colorScheme='messenger' w='100px'>
                    Gửi
                </Button>
            </Flex>
            {comments.map((cmt, idx) => (
                <CommentItem
                    key={idx}
                    text={cmt.text}
                    created_at={cmt.created_at}
                    username={cmt.username}
                    star={cmt.star}
                />
            ))}
            <Button
                colorScheme='blue'
                variant='ghost'
                w='full'
                size='sm'
                mt='4'
            >
                Xem thêm ...{" "}
            </Button>
        </Box>
    )
}
