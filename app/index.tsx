
import React from 'react'

// import Component
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView,Text,StatusBar } from 'react-native'
import {StyledComponent} from 'nativewind'
// import utils


const HomePage = ()=>{
  return (
    <SafeAreaView >
        <StyledComponent component={ScrollView} className='relative w-full p-5 bg-red-500'>
            <Text className="text-red-500">hello workd</Text>
        </StyledComponent>
    </SafeAreaView>
  )
}

export default HomePage