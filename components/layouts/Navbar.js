import {
	Box,
	Container,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Show,
	Stack,
	Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { SearchIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import logoImg from '../../public/favicon.png'
import { useRouter } from 'next/router'
import NavbarModel from './NavbarModel'
import NavbarMobile from './NavbarMobile'

import NavbarCart from './NavbarCart'
import NavbarUser from './NavbarUser'

const Navbar = () => {
	const NAVLINK = [
		{
			path: '/courses',
			title: 'Khóa học',
		},
		{
			path: '/blog',
			title: 'Thư viện',
		},
	]

	const { pathname } = useRouter()

	return (
		<Box bg='white' boxShadow='base' pos='fixed' zIndex='999' w='full'>
			<Container maxW={[1024]} mx='auto' h='70px'>
				<Flex
					alignItems='center'
					justifyContent='space-between'
					h='70px'
				>
					{/* Hide logo below md  */}
					<Stack
						direction='row'
						align='center'
						display={['none', 'none', 'flex']}
						color='messenger.600'
					>
						<Image
							src={logoImg}
							alt='logo image'
							width={30}
							height={30}
						/>
						<NextLink href='/'>TRIDEV.IO</NextLink>
					</Stack>
					{/* Model danh mục  */}
					<NavbarModel />
					{/* Hide the rest of bar below md  */}
					<InputGroup maxW='300' display={['none', 'none', 'flex']}>
						<InputLeftElement pointerEvents='none'>
							<SearchIcon color='gray.300' />
						</InputLeftElement>
						<Input
							type='tel'
							placeholder='Tìm kiếm khóa học ... '
							borderRadius='10'
						/>
					</InputGroup>
					{NAVLINK.map((navlink, idx) => (
						<Text
							color={pathname === navlink.path && '#4549e0'}
							display={{ base: 'none', lg: 'block' }}
							key={idx}
						>
							<NextLink href={navlink.path} key={idx}>
								{navlink.title}
							</NextLink>
						</Text>
					))}

					<Stack
						direction='row'
						align='center'
						display={['none', 'none', 'flex']}
					>
						{/* List Cart  */}
						<NavbarCart />

						{/* User dropdown  */}
						<NavbarUser />
					</Stack>

					{/* Show mobile bar  */}
					<Show below='md'>
						<NavbarMobile />
					</Show>
				</Flex>
			</Container>
		</Box>
	)
}

export default Navbar
