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

const CourseBreadCrumb = () => {
    const { courseDetail, isLoadingDetail } = useSelector((sta) => sta.course)
    return !isLoadingDetail ? (
        <Breadcrumb separator={<ChevronRightIcon />}>
            <BreadcrumbItem>
                <BreadcrumbLink href='/' as={Link}>
                    Trang chủ
                </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/courses' as={Link}>
                    Khóa học
                </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href={`/courses/${courseDetail?.slug}`}>
                    {courseDetail?.title}
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    ) : (
        <HStack>
            <Skeleton w='70px' height='20px' />
            <Skeleton w='100px' height='20px' />
            <Skeleton w='300px' height='20px' />
        </HStack>
    )
}

export default CourseBreadCrumb
