import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	HStack,
	Spacer,
	Text,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Heading = ({ title }) => {
	const router = useRouter()
	return (
		<HStack mb='4'>
			<Button size='sm' colorScheme='messenger'>
				Trở về
			</Button>

			<Spacer />

			<Breadcrumb
				spacing='8px'
				separator={<ChevronRightIcon color='gray.500' />}
			>
				<BreadcrumbItem>
					<Link href='/admin' passHref>
						<BreadcrumbLink>Thống kê</BreadcrumbLink>
					</Link>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<Link href={`${router.pathname}`} passHref>
						<BreadcrumbLink>{title}</BreadcrumbLink>
					</Link>
				</BreadcrumbItem>
			</Breadcrumb>
		</HStack>
	)
}

export default Heading
