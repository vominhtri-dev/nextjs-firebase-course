import { useEffect, useState } from 'react'

const usePagi = ({ sizePageValue, currentPageValue = 1, listData }) => {
    const [list, setList] = useState([]) // list of page ex: [post1, post2, ...]
    const [currentPage, setCurrentPage] = useState(currentPageValue) // default current is 1

    useEffect(() => {
        const idxOfLast = currentPage * sizePageValue // 1 * 3 = 3
        const idxOfFirst = idxOfLast - sizePageValue // 3 - 3 = 0
        const currentCourse = listData.slice(idxOfFirst, idxOfLast)
        setList(currentCourse)
    }, [listData, currentPage])

    const changePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1)
        }
    }
    const changeNextPage = () => {
        const lastPage = Math.ceil(listData.length / sizePageValue)
        if (currentPage < lastPage) {
            setCurrentPage((prev) => prev + 1)
        }
    }

    return {
        list,
        setList,
        pageSize: sizePageValue,
        currentPage,
        setCurrentPage,
        changePrevPage,
        changeNextPage,
    }
}

export default usePagi
