import {
    Container,
    Flex,
    Grid,
    GridItem,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useBreakpointValue,
} from '@chakra-ui/react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../../firebase.config'
import NextLink from 'next/link'
import { addCategory, resetLoading } from '../../../redux/slice/categorySlice'
import CategorySkeleton from './CategorySkeleton'

export default function CategoryTab() {
    const { categorys, isLoading } = useSelector((sta) => sta.category)
    const dispatch = useDispatch()
    const breakPoint = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 5 })

    // fetch admin category
    useEffect(() => {
        async function getCategory() {
            try {
                const q = query(
                    collection(db, 'category'),
                    orderBy('createdAt', 'desc')
                )
                const rawDocs = await getDocs(q)
                const data = rawDocs.docs.map((doc) => ({
                    _id: doc.id,
                    ...doc.data(),
                }))
                dispatch(addCategory(data))
            } catch (error) {
                console.log(error)
            }
        }
        getCategory()
        return () => {
            dispatch(resetLoading())
        }
    }, [dispatch])

    return (
        <Flex bg='white' alignItems='center'>
            <Container maxW={[1024]}>
                <Grid templateColumns='repeat(16, 1fr)'>
                    {/* // Main tab  */}
                    {!isLoading &&
                        categorys.map(
                            (cate, idx) =>
                                idx < breakPoint && (
                                    <NextLink
                                        href={`/category/${cate?.slug}`}
                                        key={idx}
                                    >
                                        <GridItem
                                            textAlign='center'
                                            p='4'
                                            cursor='pointer'
                                            colSpan={['15', '7', '5', '3']}
                                            _hover={{
                                                color: 'messenger.600',
                                                borderBottomColor:
                                                    'messenger.600',
                                            }}
                                            transition='0.7s'
                                            borderBottom='2px'
                                            borderBottomColor='gray.100'
                                        >
                                            {cate?.title}
                                        </GridItem>
                                    </NextLink>
                                )
                        )}
                    {/* // Load skeleton  */}
                    {isLoading && <CategorySkeleton num={5} />}
                    {/* // Dot Menu */}
                    <GridItem p='4' colSpan={{ sm: '2', md: '1' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                size='sm'
                                colorScheme='messenger'
                                aria-label='show-more'
                                icon={<BsThreeDots />}
                            ></MenuButton>
                            <MenuList p='2' pos='absolute' right='-8'>
                                {categorys.map(
                                    (cate, idx) =>
                                        idx >= breakPoint && (
                                            <NextLink
                                                href={`/category/${cate?.slug}`}
                                                key={idx}
                                            >
                                                <MenuItem cursor='pointer'>
                                                    {cate?.title}
                                                </MenuItem>
                                            </NextLink>
                                        )
                                )}
                            </MenuList>
                        </Menu>
                    </GridItem>
                </Grid>
            </Container>
        </Flex>
    )
}
