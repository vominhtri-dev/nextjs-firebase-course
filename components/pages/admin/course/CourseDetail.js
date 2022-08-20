import {
    Avatar,
    Badge,
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    IconButton,
    List,
    ListIcon,
    ListItem,
    Stat,
    StatHelpText,
    StatNumber,
    Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import { default as levelRender } from '../../../../helper/level'
import { BsBriefcase } from 'react-icons/bs'
import { FaUserFriends } from 'react-icons/fa'
import { StarIcon } from '@chakra-ui/icons'
import toTimeVn from '../../../../helper/toTimeVn'
import { useSelector } from 'react-redux'
import { MdCheckCircle } from 'react-icons/md'
import CourseTab from './CourseTab'

const DetailComponent = () => {
    const { courseDetail } = useSelector((sta) => sta.adminCourse)
    const {
        title,
        thumbnail,
        writer,
        star,
        banner,
        level,
        totalUsers,
        price,
        createdAt,
        category,
        include,
    } = courseDetail

    return (
        <>
            {Object.getOwnPropertyNames(courseDetail).length !== 0 && (
                <Box>
                    <Flex>
                        <Box
                            w='30%'
                            h='200'
                            pos='relative'
                            rounded='xl'
                            overflow='hidden'
                        >
                            <Image
                                src={thumbnail}
                                alt='thumbnail'
                                layout='fill'
                                objectFit='cover'
                                priority='true'
                            />

                            <Button
                                colorScheme='blackAlpha'
                                pos='absolute'
                                left='4'
                                bottom='4'
                                px='2'
                            >
                                <Avatar
                                    size='xs'
                                    name={writer?.displayName}
                                    src={writer?.photoURL}
                                />

                                <Box ml='2'>{writer?.displayName}</Box>
                            </Button>
                        </Box>
                        <Box px='4'>
                            <Badge colorScheme='green'>{category?.title}</Badge>

                            <Heading as='h4' size='lg'>
                                {title}
                            </Heading>

                            <HStack>
                                <Stat>
                                    <StatNumber>
                                        Giá : £ {price?.discountPrice}
                                    </StatNumber>
                                    <StatHelpText
                                        display='flex'
                                        alignItems='center'
                                    >
                                        <strike>£ {price?.value}</strike>
                                        <Badge colorScheme='purple' ml='4'>
                                            tiết kiệm {price?.discountPercent}%
                                        </Badge>
                                        <Badge colorScheme='purple' ml='4'>
                                            thời gian giảm{' '}
                                            {price?.discountExp &&
                                                toTimeVn(price?.discountExp)}
                                        </Badge>
                                    </StatHelpText>
                                </Stat>
                            </HStack>

                            <HStack>
                                <IconButton
                                    borderRadius='full'
                                    size='xs'
                                    aria-label='lever'
                                    variant='outline'
                                    icon={<BsBriefcase />}
                                />
                                <span>{levelRender(level)}</span>
                                <IconButton
                                    borderRadius='full'
                                    size='xs'
                                    aria-label='lever'
                                    variant='outline'
                                    icon={<FaUserFriends />}
                                />
                                <span>{totalUsers}</span>
                                <IconButton
                                    borderRadius='full'
                                    size='xs'
                                    aria-label='lever'
                                    variant='outline'
                                    color='yellow.400'
                                    icon={<StarIcon />}
                                />
                                <span>{star}</span>
                            </HStack>
                        </Box>
                    </Flex>

                    <Grid gridTemplateColumns='repeat(9, 1fr)' gap='2' my='4'>
                        <GridItem colSpan={['4', '3', '3']}>
                            <Text fontWeight='light' color='gray.800'>
                                Lần cuối cập nhật
                            </Text>
                            <Text fontWeight='bold'>{toTimeVn(createdAt)}</Text>
                        </GridItem>
                        <GridItem colSpan={['4', '3', '3']}>
                            <Text fontWeight='light' color='gray.800'>
                                Trình độ
                            </Text>
                            <Text fontWeight='bold'>{levelRender(level)}</Text>
                        </GridItem>
                        <GridItem colSpan={['4', '3', '3']}>
                            <Text fontWeight='light' color='gray.800'>
                                Số học viên
                            </Text>
                            <Text fontWeight='bold'> {totalUsers}</Text>
                        </GridItem>
                    </Grid>
                    <Box bg='gray.50' p='4' rounded='lg'>
                        <Flex>
                            <Box
                                w='60%'
                                pos='relative'
                                rounded='xl'
                                minH='250'
                                overflow='hidden'
                            >
                                <Image
                                    src={banner}
                                    alt='banner'
                                    layout='fill'
                                    objectFit='cover'
                                    priority='true'
                                />
                            </Box>
                            <Box px='4'>
                                <Text fontWeight='bold' my='2'>
                                    Khóa học này bao gồm
                                </Text>
                                <List spacing={3}>
                                    {include?.map((courseFea, idx) => (
                                        <ListItem key={idx}>
                                            <ListIcon
                                                as={MdCheckCircle}
                                                color='green.500'
                                            />
                                            {courseFea}
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Flex>
                        {/* Course Tab here */}
                        <CourseTab />
                    </Box>
                </Box>
            )}
        </>
    )
}

export default DetailComponent
