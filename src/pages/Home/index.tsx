import React from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import View from './view'

type Props = RouteComponentProps
 
const Home: React.FC<Props> = () =>{ 
    const isLoading = useSelector<ReduxState, boolean>(
        (state) => state.user.isLoading
      )

return <View isLoading={isLoading} />}

export default Home
