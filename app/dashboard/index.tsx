import React from 'react'

// import component
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView,View,StatusBar,Image, Pressable,Text } from 'react-native'

// import utils
import {Link, router} from 'expo-router'

function PageDashboard() {
  return (
    <>
        <SafeAreaView>
            <ScrollView className='relative h-full w-full'>
                {/*//! navbar */}
                <View className='relative w-full  p-2 mx-auto'>
                    {/* navbar container */}
                    <View className='max-w-md p-2 flex  justify-between flex-row items-center'>
                        <Image source={require('@/assets/images/nav_icon.png')} className=''/>    

                        <Pressable className='flex gap-1 items-center'>
                            <Image source={require('@/assets/images/cart.png')} className=''/>  
                            <Text className='text-[10px]'>My Bucket</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    <StatusBar translucent={false} backgroundColor={'#fff'}/>
    </>
  )
}

export default PageDashboard