import React from 'react'
import {Container, Content} from './styles'

import Tab from '../../components/Tabs'
     
import 'react-tabs/style/react-tabs.css';

const Home = () => {
  return(
    <Container>
      <Content>
        <Tab />
      </Content>
       
    </Container>
  )
}

export default Home