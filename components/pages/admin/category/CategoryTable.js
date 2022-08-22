import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Heading,
    TableCaption,
} from '@chakra-ui/react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../../../../firebase.config'
import TdSkeleton from '../TdSkeleton'
import DeleteModel from './DeleteModel'
import { useDispatch, useSelector } from 'react-redux'
import {
    addCategory,
    resetLoading,
} from '../../../../redux/slice/adminCategorySlice'
import UpdateModel from './UpdateModel'
import Pagination from '../../../Pagination'
import usePagi from '../../../../hook/usePagi'

const CategoryTable = () => {
    const { categorys, isLoading, trigger } = useSelector(
        (sta) => sta.adminCategory
    )
    const {
        list,
        currentPage,
        pageSize,
        changePrevPage,
        changeNextPage,
        chagePage,
    } = usePagi({
        sizePageValue: 5,
        listData: categorys,
    })
    const dispatch = useDispatch()

    // fetch admin category
    useEffect(() => {
        async function getAdminCategory() {
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
        getAdminCategory()

        return () => {
            dispatch(resetLoading())
        }
    }, [trigger, dispatch])

    return (
        <Box>
            <Heading mb='4' as='h5' size='md'>
                Danh sách danh mục
            </Heading>
            <TableContainer>
                <Table variant='simple'>
                    {categorys.length === 0 && !isLoading && (
                        <TableCaption>Danh sách danh mục trống</TableCaption>
                    )}

                    <Thead>
                        <Tr>
                            <Th>STT</Th>
                            <Th>Tên danh mục</Th>
                            <Th>Slug</Th>
                            <Th>Hành động</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {!isLoading &&
                            list.map((cate, idx) => (
                                <Tr key={cate._id}>
                                    <Td>{idx + 1}</Td>
                                    <Td>{cate?.title}</Td>
                                    <Td>{cate?.slug}</Td>
                                    <Td>
                                        <DeleteModel cate={cate} />
                                        <UpdateModel cate={cate} />
                                    </Td>
                                </Tr>
                            ))}

                        {isLoading && <TdSkeleton col={4} row={5} />}
                    </Tbody>
                </Table>
            </TableContainer>

            {/* Pagination */}
            <Pagination
                pageSize={pageSize}
                pageLength={categorys.length}
                currentPage={currentPage}
                onNextPage={changeNextPage}
                onPrevPage={changePrevPage}
                onChosePage={chagePage}
            />
        </Box>
    )
}

export default CategoryTable
