
import React from 'react'

// import Component
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView,Text,StatusBar,View } from 'react-native'
import {StyledComponent} from 'nativewind'


// import utils


const HomePage = ()=>{
  return (
  
    <>
      <SafeAreaView>
        <StyledComponent component={ScrollView} className='relative w-full  bg-red-500 h-full'>
          <View className={'relative w-full p-5 bg-cyan-500'}>

          </View>
        </StyledComponent>
      </SafeAreaView>

        <StatusBar  barStyle={'dark-content'} translucent={false}/>
    </>
  )
}

export default HomePage