import React from 'react'
import {  Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {ContainerTabList, ContainerTab} from './styles'
import TabPanelMonth from '../TabPanel'


const Tab = () => {

  return (
   
  <Tabs>
    <ContainerTabList>
      <ContainerTab 
       selectedClassName = 'active'
       disabledClassName = ''>
         Mensal
      </ContainerTab>
      

      <ContainerTab 
      selectedClassName = 'active'
      disabledClassName = ''>
        Anual
      </ContainerTab>
    </ContainerTabList>
  
 
    <TabPanel>
     <TabPanelMonth  isMonth/>
    </TabPanel>
    <TabPanel>
      <TabPanelMonth />
    </TabPanel>
   
  </Tabs>
  
  )
}

export default Tab