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
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import NextLink from 'next/link'
import { CloseIcon } from '@chakra-ui/icons'

const NavbarCart = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const modelRef = useRef()

	useOutsideClick({
		ref: modelRef,
		handler: () => setIsModalOpen(false),
	})

	const courses = [
		{
			_id: '1',
			title: 'Khóa học javascript nâng cao',
			author: 'Võ Văn T',
			priceOrigin: '200',
			priceSell: '100',
			thumbNail:
				'https://ih1.redbubble.net/image.382749689.2902/mp,504x498,matte,f8f8f8,t-pad,600x600,f8f8f8.u2.jpg',
		},
		{
			_id: '2',
			title: 'Khóa học Reactjs, redux, hoc, hook.',
			author: 'Võ Văn T',
			priceOrigin: '200',
			priceSell: '100',
			thumbNail:
				'https://ih1.redbubble.net/image.382749689.2902/mp,504x498,matte,f8f8f8,t-pad,600x600,f8f8f8.u2.jpg',
		},
		{
			_id: '3',
			title: 'Khóa học html & css cho người mới bắt đầu',
			author: 'Võ Văn T',
			priceOrigin: '200',
			priceSell: '100',
			thumbNail:
				'https://ih1.redbubble.net/image.382749689.2902/mp,504x498,matte,f8f8f8,t-pad,600x600,f8f8f8.u2.jpg',
		},
	]
	return (
		<Box pos='relative'>
			<IconButton
				size='sm'
				aria-label='Cart'
				icon={<AiOutlineShoppingCart />}
				display={['none', 'none', 'flex']}
				onClick={() => setIsModalOpen((prev) => !prev)}
			/>

			<SlideFade in={isModalOpen} offsetY='40px' unmountOnExit='true'>
				<Box
					w={{ md: '400px' }}
					marginTop='30px'
					right='0'
					bg='white'
					pos='absolute'
					borderRadius='8'
					shadow='xl'
					p='4'
					ref={modelRef}
				>
					<HStack>
						<Text fontWeight='bold' h='8'>
							Giỏ hàng
						</Text>
						<Spacer />
						<NextLink href='/cart'>
							<Link
								h='8'
								_hover={{ color: 'messenger.600' }}
								onClick={() => setIsModalOpen(false)}
							>
								Xem tất cả
							</Link>
						</NextLink>
					</HStack>

					<Grid
						templateColumns={{
							base: 'repeat(1, 1fr)',
							md: 'repeat(1, 1fr)',
						}}
						gap='4'
					>
						{courses.map((course, idx) => (
							<GridItem
								key={course._id}
								display='flex'
								alignItems='center'
								justifyContent='space-between'
								cursor='pointer'
								_hover={{ bgColor: 'gray.100' }}
								borderRadius='7px'
								transitionDuration='0.7s'
								p='2'
							>
								<NextLink href={`/courses/${course._id}`}>
									<Image
										src={course.thumbNail}
										w='10'
										h='10'
										onClick={() => setIsModalOpen(false)}
									/>
								</NextLink>
								<NextLink href={`/courses/${course._id}`}>
									<Box
										w='250px'
										onClick={() => setIsModalOpen(false)}
									>
										<Text fontWeight='bold'>
											{course.title}
										</Text>
										<Badge
											colorScheme='orange'
											fontSize='0.7em'
										>
											Giảm 25%
										</Badge>
										<Badge
											colorScheme='green'
											fontSize='0.7em'
											ml='1'
										>
											Bán chạy
										</Badge>

										<Flex>
											<Text
												fontSize='sm'
												fontWeight='bold'
												mr='2'
											>
												£ {course.priceSell}
											</Text>
											<Text fontSize='sm'>
												<strike>
													£ {course.priceOrigin}
												</strike>
											</Text>
										</Flex>
									</Box>
								</NextLink>
								<IconButton
									icon={<CloseIcon />}
									size='sm'
									colorScheme='messenger'
									variant='ghost'
									onClick={() => console.log('remove')}
								/>
							</GridItem>
						))}
					</Grid>

					<Divider orientation='horizontal' mt='4' />
					<HStack my='4'>
						<Text fontWeight='bold'>
							Tổng tiền {` (${courses.length})`}
						</Text>
						<Spacer />

						<Text fontWeight='medium' mr='2'>
							£ 300
						</Text>
						<Text fontSize='sm'>
							<strike>£ 600</strike>
						</Text>
					</HStack>
					<NextLink href='/cart'>
						<Button
							colorScheme='messenger'
							w='full'
							onClick={() => setIsModalOpen(false)}
						>
							Thanh toán
						</Button>
					</NextLink>
				</Box>
			</SlideFade>
		</Box>
	)
}

export default NavbarCart
