import React from 'react'
import Main from './src/pages/Main'
import Album from './src/pages/Album'
import TabBar from './src/components/TabBar'
import {StatusBar}from 'react-native'

export default App  =>{
  return(
   <React.Fragment>
     <StatusBar barStyle="light-content" />
     <Main/>
     

     <TabBar/>
   </React.Fragment>
  )
}