import { Box, Button, Skeleton, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const ProfileAside = () => {
    const { isCurrentUser, isLoading } = useSelector((state) => state.profile)
    const { query } = useRouter()
    const PROFILE_LINK = [
        {
            title: 'Tổng quan',
            slug: 'overview',
        },
        {
            title: 'Đổi thông tin',
            slug: 'update-profile',
        },
        {
            title: 'Danh sách đã mua',
            slug: 'list-course',
        },
        {
            title: 'Danh sách mong muốn',
            slug: 'list-liked',
        },
        {
            title: 'Danh sách bài viết',
            slug: 'list-post',
        },
    ]

    return (
        <Box>
            {!isLoading &&
                PROFILE_LINK.map((subSlug, idx) =>
                    isCurrentUser ? (
                        <Link
                            href={`/profile/${query.param[0]}/${subSlug.slug}`}
                            key={idx}
                        >
                            <Button
                                size='sm'
                                w='full'
                                colorScheme='messenger'
                                justifyContent='left'
                                variant={
                                    subSlug.slug === query.param[1]
                                        ? 'solid'
                                        : 'ghost'
                                }
                                mb='1'
                            >
                                {subSlug.title}
                            </Button>
                        </Link>
                    ) : (
                        subSlug.slug === 'overview' && (
                            <Link
                                href={`/profile/${query.param[0]}/${subSlug.slug}`}
                                key={idx}
                            >
                                <Button
                                    size='sm'
                                    w='full'
                                    colorScheme='messenger'
                                    justifyContent='left'
                                    variant={
                                        subSlug.slug === query.param[1]
                                            ? 'solid'
                                            : 'ghost'
                                    }
                                    mb='1'
                                >
                                    {subSlug.title}
                                </Button>
                            </Link>
                        )
                    )
                )}

            {isLoading && (
                <Stack>
                    <Skeleton height='30px' rounded='md' />
                    <Skeleton height='30px' rounded='md' />
                    <Skeleton height='30px' rounded='md' />
                    <Skeleton height='30px' rounded='md' />
                    <Skeleton height='30px' rounded='md' />
                </Stack>
            )}
        </Box>
    )
}

export default ProfileAside
