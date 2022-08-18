import { StarIcon, PlusSquareIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import { BsBriefcase, BsHeartFill } from "react-icons/bs"
import { FaUserFriends } from "react-icons/fa"

import {
    Avatar,
    Box,
    Badge,
    Link,
    IconButton,
    HStack,
    Divider,
    StatNumber,
    Stat,
    Button,
    Stack,
} from "@chakra-ui/react"
import level from "../../../helper/level"
import Image from "next/image"

const CourseCard = ({ course, showCatelogy }) => {
    return (
        <Box overflow='hidden' bg='white' shadow='md' borderRadius='10px'>
            <Box pos='relative'>
                <Box w='full' h='200' pos='relative'>
                    <Image
                        src={course.thumbnail}
                        alt='thumbnail'
                        layout='fill'
                        objectFit='cover'
                        priority='true'
                    />
                </Box>
                {showCatelogy && (
                    <Badge pos='absolute' top='4' left='4' colorScheme='green'>
                        {course.catelogy}
                    </Badge>
                )}

                <Button
                    colorScheme='blackAlpha'
                    pos='absolute'
                    left='4'
                    bottom='4'
                    px='2'
                >
                    <Avatar size='xs' />
                    <Box ml='2'>{course.writer.name}</Box>
                </Button>

                <IconButton
                    aria-label='like'
                    pos='absolute'
                    shadow='md'
                    right='4'
                    top='4'
                    borderRadius='full'
                    color='red.500'
                    icon={<BsHeartFill />}
                />
            </Box>

            <Box p='4'>
                <NextLink href={`/courses/${course._id}`} passHref>
                    <Link
                        fontSize='lg'
                        fontWeight='bold'
                        textDecoration='none'
                        transition='0.5s'
                        _hover={{ color: "messenger.500" }}
                    >
                        {course.title}
                    </Link>
                </NextLink>

                <HStack py='4'>
                    <IconButton
                        borderRadius='full'
                        size='xs'
                        aria-label='lever'
                        variant='outline'
                        icon={<BsBriefcase />}
                    />
                    <span>{level(course.level)}</span>
                    <IconButton
                        borderRadius='full'
                        size='xs'
                        aria-label='lever'
                        variant='outline'
                        icon={<FaUserFriends />}
                    />
                    <span>{course.totalUsers}</span>
                    <IconButton
                        borderRadius='full'
                        size='xs'
                        aria-label='lever'
                        variant='outline'
                        color='yellow.400'
                        icon={<StarIcon />}
                    />
                    <span>{course.star}</span>
                </HStack>
                <Divider />
                <Stack mt='2' direction={["column", "row", "row"]}>
                    <Stat>
                        <StatNumber>£ {course.price.value}</StatNumber>
                    </Stat>
                    <Button
                        colorScheme='messenger'
                        variant='ghost'
                        size='sm'
                        w={["full", "auto"]}
                        leftIcon={<PlusSquareIcon />}
                    >
                        Thêm vào giỏ hàng
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default CourseCard
