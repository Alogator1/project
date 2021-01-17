import Layout from '@common/Layout'
import React from 'react'

interface Props {
    isLoading?: boolean
    goToTasks?: ()=>void
}

const View: React.FC<Props> = ({ isLoading, goToTasks }) => (<Layout showLoader={isLoading}>
    <p onClick={goToTasks}>Home</p>
    </Layout>)

export default View
