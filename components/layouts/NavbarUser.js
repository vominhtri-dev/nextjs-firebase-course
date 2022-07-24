import {
	Box,
	Grid,
	GridItem,
	IconButton,
	SlideFade,
	Text,
	Image,
	useOutsideClick,
	HStack,
	Spacer,
	Badge,
	Flex,
	Link,
	Divider,
	Button,
	Avatar,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import NextLink from 'next/link'
import { CloseIcon } from '@chakra-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { logoutService } from '../../service/auth'
import { logoutAction } from '../../redux/slice/authSlice'
import { useRouter } from 'next/router'
const NavbarUser = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { isLogin, currentUser } = useSelector((st) => st.auth)
	const modelRef = useRef()
	const dispatch = useDispatch()
	const router = useRouter()

	// funtion logout
	const handleLogout = async () => {
		setIsModalOpen(false)
		await logoutService()
		dispatch(logoutAction())
	}

	useOutsideClick({
		ref: modelRef,
		handler: () => setIsModalOpen(false),
	})
	const NAVLINK = [
		{
			path: '/',
			title: 'Trang cá nhân',
		},
		{
			path: '/courses',
			title: 'Danh sách khóa học',
		},
		{
			path: '/blog',
			title: 'Danh sách yêu thích',
		},
		{
			path: '/cart',
			title: 'Bài viết đã lưu',
		},
	]
	return (
		<Box pos='relative'>
			{!isLogin ? (
				<NextLink href='/login'>
					<Button
						colorScheme='messenger'
						size='sm'
						display={['none', 'none', 'block']}
					>
						Đăng nhập
					</Button>
				</NextLink>
			) : (
				<Button
					colorScheme='messenger'
					size='sm'
					display={['none', 'none', 'block']}
					onClick={() => setIsModalOpen((prev) => !prev)}
				>
					{currentUser?.displayName}
				</Button>
			)}

			<SlideFade in={isModalOpen} offsetY='40px' unmountOnExit='true'>
				<Box
					minW='300px'
					marginTop='30px'
					right='0'
					bg='white'
					pos='absolute'
					borderRadius='8'
					shadow='xl'
					py='2'
					px='4'
					ref={modelRef}
				>
					<HStack my='2' bg='blue.50' p='2' rounded='md'>
						<Avatar size='sm' />
						<Box my='2'>
							<Text fontWeight='medium'>
								{currentUser.displayName}
							</Text>
							<Badge colorScheme='green' fontSize='0.7rem'>
								Thành viên mới
							</Badge>
						</Box>
					</HStack>

					{NAVLINK.map((navlink, idx) => (
						<Text
							color={
								router.pathname === navlink.path && '#4549e0'
							}
							key={idx}
							onClick={() => setIsModalOpen(false)}
							my='2'
						>
							<NextLink href={navlink.path} key={idx}>
								{navlink.title}
							</NextLink>
						</Text>
					))}

					<Divider orientation='horizontal' my='2' />
					<Button
						colorScheme='messenger'
						w='full'
						size='sm'
						variant='ghost'
						onClick={handleLogout}
					>
						Đăng xuất
					</Button>
				</Box>
			</SlideFade>
		</Box>
	)
}

export default NavbarUser
