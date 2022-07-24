import React from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'

const index = () => {
	return <div>index</div>
}

index.getLayout = function getLayout(page) {
	return <AdminLayout>{page}</AdminLayout>
}

export default index
