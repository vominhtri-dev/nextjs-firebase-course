import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    HStack,
    Spacer,
} from "@chakra-ui/react"
import { ChevronLeftIcon } from "@chakra-ui/icons"
import Link from "next/link"
import { useRouter } from "next/router"

const Heading = ({ lv1, lv2 }) => {
    const router = useRouter()
    return (
        <HStack mb='4'>
            <Button
                size='sm'
                colorScheme='messenger'
                onClick={() => router.back()}
            >
                Trở về
            </Button>

            <Spacer />

            <Breadcrumb
                spacing='8px'
                separator={<ChevronLeftIcon color='gray.500' />}
            >
                <BreadcrumbItem>
                    <Link href={`${router.asPath}`} passHref>
                        <BreadcrumbLink>{lv1}</BreadcrumbLink>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link href='/admin' passHref>
                        <BreadcrumbLink>Thống kê</BreadcrumbLink>
                    </Link>
                </BreadcrumbItem>
            </Breadcrumb>
        </HStack>
    )
}

export default Heading
