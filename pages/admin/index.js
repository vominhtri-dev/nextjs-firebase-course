import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Index = () => {
	const router = useRouter()
	useEffect(() => {
		if (router.pathname === '/admin') {
			router.push('/admin/dashboard')
		}
	}, [router])

	return <></>
}

Index.getLayout = function getLayout(page) {
	return <>{page}</>
}

export default Index
