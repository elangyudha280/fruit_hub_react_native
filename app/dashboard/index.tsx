import React from 'react'

// import component
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView,View,StatusBar,Image, Pressable,Text,TextInput } from 'react-native'

// import utils
import {Link, router} from 'expo-router'

function PageDashboard() {
  return (
    <>
        <SafeAreaView>
            <ScrollView className='relative h-full w-full'>
                {/*//! navbar */}
                <View className='relative w-full flex flex-row justify-center  p-2 '>
                    {/* navbar container */}
                    <View className='w-full p-2 flex  justify-between flex-row items-center '>
                        <Image source={require('@/assets/images/nav_icon.png')} className=''/>    

                        <Pressable className='flex gap-1 items-center'>
                            <Image source={require('@/assets/images/cart.png')} className=''/>  
                            <Text className='text-[10px]'>My Bucket</Text>
                        </Pressable>
                    </View>
                </View>

                {/*//! content */}
                <View className='relative px-5 w-full'>
                    {/*//! title */}
                    <Text className='text-[23px] text-c-iris-200'>
                        Hello Kante, <Text className='font-medium text-c-iris-500'>What fruit salad combo do you want today?</Text>
                    </Text>

                    {/*//! input search */}
                    <View className='relative w-full mt-7 flex flex-row'>
                        {/*//! input */}
                        <View className='flex-1 px-2 bg-[#F3F4F9] rounded-md flex flex-row items-center'>
                            <Image source={require('@/assets/images/search.png')} className=''/> 
                            <TextInput className='flex-1  p-2 rounded-md' placeholder='Search for fruit salad combos' placeholderTextColor={'#86869E'}/>
                        </View>

                        {/* //! input filter */}
                        <Image source={require('@/assets/images/bar.png')} className='self-center ml-3'/> 
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    <StatusBar translucent={false} backgroundColor={'#fff'}/>
    </>
  )
}

export default PageDashboard