import React, { useState,useEffect } from 'react'

// import Component
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView,Text,StatusBar,View,useWindowDimensions,Image,Dimensions, Pressable,TextInput, Alert} from 'react-native'
import {StyledComponent} from 'nativewind'

// import utils
import {Link, router} from 'expo-router'

interface firstnameInterface {
  error:boolean,
  value:string
}

function PageLogin()  {

  let [firstname,setFirstName] = useState<firstnameInterface>({
    error:false,
    value:''
  })

  // event handle submit
  const handleSubmit = ()=>{
    if(firstname.value.trim() === ''){
        setFirstName(state => ({
          ...state,
          error:true
        }))
      return
    }

    // arahkan ke dashboard
      router.replace('/dashboard')
  }

  return (
    <>
    <SafeAreaView>
        <ScrollView >
          <StyledComponent component={View} className={`relative w-full   overflow-auto flex flex-col min-h-screen
            `}>
            {/* top */}
            <View className={`relative w-full  p-5  flex justify-center items-center  bg-c-orange-200 
              `}>
              <View className="flex flex-col p-2 ">
                <Image source={require('@/assets/images/fruit_bucket2.png')} className=''/>
                <Image source={require('@/assets/images/ellipse1.png')} className='mt-2'/>
              </View>

            </View>

            {/* bottom */}
            <View className={'relative w-full  p-5 flex-1 h-full flex justify-center'}>
                    <View className=' flex flex-col gap-2'>
                        {/*//! title */}
                        <Text className='text-c-iris-500 font-medium text-left text-[18px]'>What is your firstname?</Text>

                        {/* input */}
                        <View className='mb-2'>
                          <TextInput className=' py-3  rounded-md'  autoComplete='off' cursorColor={'#FFA451'} underlineColorAndroid={'#FFA451'}  placeholder='Your Name'
                            onChangeText={(value)=>{
                              setFirstName({
                                error:false,
                                value
                              })
                            }}
                          />  
                          {
                            firstname.error && <Text className=' text-red-400'>Firstname cannot be empty </Text>
                          }
                        </View>
                        
                       
                        {/* button */}
                        <Pressable  className='group-isolate  bg-c-orange-200 rounded-md p-4' onPress={handleSubmit}>
                           <Text className='text-white text-center text-[17px] font-medium'>Start Ordering</Text>
                        </Pressable>
                    </View>
                </View>
            
          </StyledComponent>
        </ScrollView>
    </SafeAreaView>

    <StatusBar translucent={false} backgroundColor={'#FFA451'} barStyle={'light-content'}/>
    </>
  )
}

export default PageLogin