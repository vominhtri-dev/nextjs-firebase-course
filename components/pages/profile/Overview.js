import {
    Avatar,
    Badge,
    Box,
    Grid,
    GridItem,
    Heading,
    HStack,
    Tag,
    TagLabel,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import getGender from '../../../helper/gender'

const Overview = () => {
    const { profile } = useSelector((st) => st.profile)
    const { overview, gender, website, displayName, photoURL, isAdmin } =
        profile

    return (
        <Box>
            <Heading as='h4' size='md' mb='5'>
                Tổng quan
            </Heading>

            <HStack my='4' bg='blue.50' p='2' rounded='md'>
                {/* Avatar user  */}
                <Avatar size='sm' name={displayName} src={photoURL} />
                <Box my='2'>
                    <Text fontWeight='medium'>{displayName}</Text>
                    <Badge colorScheme='green' fontSize='0.7rem'>
                        {isAdmin ? 'Quản trị viên' : 'Thành viên'}
                    </Badge>
                </Box>
            </HStack>

            <HStack spacing={2} mb='4'>
                <Tag
                    size='sm'
                    borderRadius='md'
                    variant='solid'
                    colorScheme='green'
                >
                    <TagLabel>Khóa học đã mua 0</TagLabel>
                </Tag>
                <Tag
                    size='sm'
                    borderRadius='md'
                    variant='solid'
                    colorScheme='yellow'
                >
                    <TagLabel>Lược theo dõi 0</TagLabel>
                </Tag>
            </HStack>

            <Grid gridTemplateColumns='repeat(12, 1fr)' gap='4'>
                <GridItem colSpan={['6']}>
                    <Text fontWeight='bold'>Về bản thân</Text>
                    <Text>{overview || 'Người này không có gì để nói.'}</Text>
                </GridItem>
                <GridItem colSpan={['6']}>
                    <Text fontWeight='bold'>Giới tính</Text>
                    <Text pb='2'>{getGender(gender)}</Text>
                    <Text fontWeight='bold'>Trang web cá nhân</Text>
                    <Text pb='2'>{website || 'Chưa có website'}</Text>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Overview
