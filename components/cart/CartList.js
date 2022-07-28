import { CloseIcon } from '@chakra-ui/icons'
import { Badge, Box, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { BsFillHeartFill } from 'react-icons/bs'

const CartList = () => {
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
		<Box>
			{courses.map((course) => (
				<Flex
					key={course._id}
					cursor='pointer'
					_hover={{ bgColor: 'gray.100' }}
					borderRadius='7px'
					transitionDuration='0.7s'
					alignItems='center'
					p='2'
				>
					<NextLink href={`/courses/${course._id}`}>
						<Image
							src={course.thumbNail}
							w='20'
							h='20'
							alt='thumbNail'
						/>
					</NextLink>
					<NextLink href={`/courses/${course._id}`}>
						<Box mx='4' flexGrow='2'>
							<Text fontWeight='bold'>{course.title}</Text>
							<Badge colorScheme='orange' fontSize='0.7em'>
								Giảm 25%
							</Badge>
							<Badge colorScheme='green' fontSize='0.7em' ml='1'>
								Bán chạy
							</Badge>

							<Flex>
								<Text fontSize='sm' fontWeight='bold' mr='2'>
									£ {course.priceSell}
								</Text>
								<Text fontSize='sm'>
									<strike>£ {course.priceOrigin}</strike>
								</Text>
							</Flex>
						</Box>
					</NextLink>
					<IconButton
						icon={<BsFillHeartFill />}
						size='sm'
						color='red.300'
						variant='ghost'
						colorScheme='red'
						mr='2'
						onClick={() => console.log('liked')}
					/>
					<IconButton
						icon={<CloseIcon />}
						size='sm'
						colorScheme='messenger'
						variant='ghost'
						onClick={() => console.log('remove')}
					/>
				</Flex>
			))}
		</Box>
	)
}

export default CartList
