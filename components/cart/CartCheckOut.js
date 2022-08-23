import {
    // Badge,
    Box,
    Button,
    Divider,
    Heading,
    HStack,
    // IconButton,
    // Input,
    Spacer,
    Text,
} from '@chakra-ui/react'
import React from 'react'
// import { CloseIcon } from '@chakra-ui/icons'
import { useSelector, useDispatch } from 'react-redux'

const CartCheckOut = () => {
    const { cart, quantity, total } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    return (
        <Box bg='white' p='4' rounded='md' shadow='md'>
            <Text fontSize='lg'>Cộng trước</Text>
            <Heading as='h3'>£ {total}</Heading>

            {/* <HStack my='4'>
				<Input placeholder='Nhập mã giảm giá' size='sm' />
				<Button size='sm' rounded='none' px='4'>
					Sử dụng
				</Button>
			</HStack>
			<HStack>
				<Box>
					Mã{' '}
					<small style={{ fontWeight: 'bold' }}>
						HOCLAPTRINHTAITRIDEVIO
					</small>{' '}
					đã kích hoạt !
				</Box>
				<Spacer />
				<IconButton
					icon={<CloseIcon />}
					size='sm'
					colorScheme='messenger'
					variant='ghost'
					onClick={() => console.log('remove')}
				/>
			</HStack>
			<Badge colorScheme='green' fontSize='0.7em' my='2'>
				Đã dùng mã giảm 20%
			</Badge> */}
            <HStack my='4'>
                <Text>Số lượng : </Text>
                <Spacer />
                <Text>{quantity} khóa học</Text>
            </HStack>
            {/* <HStack my='4'>
                <Text>Trừ mã giảm giá:</Text>
                <Spacer />
                <Text>20% - 300$</Text>
            </HStack> */}
            <Divider />

            <HStack my='4'>
                <Text fontSize='lg'>Tổng cộng</Text>
                <Spacer />
                <Heading as='h5' fontSize='lg'>
                    £ {total}
                </Heading>
            </HStack>
            <Button colorScheme='messenger' w='full'>
                Thanh toán
            </Button>
        </Box>
    )
}

export default CartCheckOut
