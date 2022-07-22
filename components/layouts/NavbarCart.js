import {
	Box,
	Button,
	Grid,
	GridItem,
	IconButton,
	SlideFade,
	Text,
	Image,
	useOutsideClick,
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
			price: '100',
			thumbNail:
				'https://ih1.redbubble.net/image.382749689.2902/mp,504x498,matte,f8f8f8,t-pad,600x600,f8f8f8.u2.jpg',
		},
		{
			_id: '2',
			title: 'Khóa học Reactjs, redux, hoc, hook.',
			author: 'Võ Văn T',
			price: '100',
			thumbNail:
				'https://ih1.redbubble.net/image.382749689.2902/mp,504x498,matte,f8f8f8,t-pad,600x600,f8f8f8.u2.jpg',
		},
		{
			_id: '3',
			title: 'Khóa học html & css cho người mới bắt đầu',
			author: 'Võ Văn T',
			price: '100',
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
					<Text fontWeight='bold' h='8'>
						Giỏ hàng
					</Text>

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

										<Text fontSize='sm'>
											£ {course.price}
										</Text>
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
				</Box>
			</SlideFade>
		</Box>
	)
}

export default NavbarCart
