
import React from 'react'

// import Component
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView,Text,StatusBar,View,useWindowDimensions,Image,Dimensions, Pressable } from 'react-native'
import {StyledComponent} from 'nativewind'

// import image

// import utils
import {Link} from 'expo-router'
const HomePage = ()=>{
  let {height} = useWindowDimensions();
  return (
    <>
        <SafeAreaView>
            <ScrollView style={{marginTop:StatusBar.currentHeight !== undefined ? -StatusBar.currentHeight : 0}} >
              <StyledComponent component={View} className={`relative w-full  overflow-auto flex flex-col min-h-screen
                `}>
                {/* top */}
                <View className={`relative w-full  p-5  flex justify-center items-center  bg-c-orange-200 
                  `}>
                  <View className="flex flex-col p-2 ">
                    <Image source={require('@/assets/images/fuit_bucket1.png')} className=''/>
                    <Image source={require('@/assets/images/ellipse1.png')} className='mt-2'/>
                  </View>

                </View>
                {/* bottom */}
                <View className={'relative w-full  p-5 flex-1 h-full flex justify-center items-center'}>
                    <View className=' flex flex-col gap-2'>
                        {/*//! title */}
                        <Text className='text-c-iris-500 font-medium text-left text-[18px]'>Get The Freshest Fruit Salad Combo</Text>
                        {/*//! description */}
                        <Text className='text-c-iris-200  text-left text-[15px] mb-5'>
                        We deliver the best and freshest fruit salad in town. Order for a combo today!!!
                        </Text>
                        {/* button */}
                        <Link href={'login/'} className='group-isolate text-white bg-c-orange-200 rounded-md p-4 active:bg-transparent active:border-[1px] active:border-c-orange-200 active:text-c-orange-200  text-center' >
                            Let’s Continue
                        </Link>
                    </View>
                </View>
              </StyledComponent>
            </ScrollView>
        </SafeAreaView>

    <StatusBar translucent={false} backgroundColor={'#FFA451'} barStyle={'light-content'}/>
    </>
  )
}

export default HomePage