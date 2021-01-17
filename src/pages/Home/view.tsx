import Layout from '@common/Layout'
import React from 'react'

interface Props {
    isLoading?: boolean
}

const View: React.FC<Props> = ({ isLoading }) => (<Layout showLoader={isLoading}>
    Home
    </Layout>)

export default View
