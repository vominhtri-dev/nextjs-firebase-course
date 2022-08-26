import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    HStack,
    Skeleton,
} from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const ProfileBreadCrumb = () => {
    const { profile, isLoading } = useSelector((sta) => sta.profile)

    // console.log(profile)
    return !isLoading ? (
        <Breadcrumb separator={<ChevronRightIcon />}>
            <BreadcrumbItem>
                <BreadcrumbLink href='/' as={Link}>
                    Trang chủ
                </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href={`/profile/${profile?.uid}`}>
                    {profile?.displayName}
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    ) : (
        <HStack>
            <Skeleton w='70px' height='20px' />
            <Skeleton w='300px' height='20px' />
        </HStack>
    )
}

export default ProfileBreadCrumb
