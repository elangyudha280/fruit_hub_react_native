import React, { useState } from 'react'

// import component
import { SafeAreaView } from 'react-native-safe-area-context'
import { View,ScrollView,Text,StatusBar,Image, Pressable } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import dataMakanan from '@/data/food'
import formatRupiah from '@/utils/formatRupiah'

import { Ionicons } from '@expo/vector-icons'
function DetailFood() {
    let {id} = useLocalSearchParams()

    let [count,setCount] = useState(0)

    let detailFood = dataMakanan.find(el => el.id == id)
  return (
    <>
         <SafeAreaView>
            <ScrollView className='relative h-full w-full bg-c-orange-200'>
              <View className='relative w-full   overflow-auto flex flex-col min-h-screen'>
                  {/* top */}
                  <View className={`relative w-full  p-5  flex justify-center items-center  bg-c-orange-200 
              `}>
                <Pressable onPress={()=>{router.replace('/dashboard')}} className='p-2 bg-white self-start flex gap-x-2 flex-row rounded-lg mb-5'>
                    <Image source={require('@/assets/images/back_arrow.png')} className='border-2  object-contain p-0 m-0'/>
                    <Text className='pr-2'>
                        Go Back
                    </Text>
                </Pressable>
                <View className="flex flex-col p-2 ">
                    <Image source={detailFood?.poster} className='h-[200px] w-[200px]'/>
                </View>
                  </View>
                  {/* bottom */}
                    <View className={'relative  flex-1 h-full rounded-t-3xl bg-white'}>
                        {/* header */}
                        <View className='relative w-full px-6 py-8 border-b-[1px] border-b-slate-200'>
                            {/* title */}
                            <Text className='w-full text-c-iris-500 text-[25px] font-medium'>
                            {detailFood?.title}
                            </Text>
                            {/* info */}
                            <View className='relative w-full mt-3 flex flex-row items-center'>
                                {/* increment decrement */}
                                <View className='flex-1 '>
                                    <View className='flex flex-row gap-4 items-center'>
                                        <Pressable onPress={()=>{
                                            setCount(count ==0 ? count : count--)
                                        }} className={`w-[35px] h-[35px] rounded-full  flex items-center justify-center
                                             ${count<1 ? 'border-[0px] bg-[#f8a1cb36]' : 'border-[1px]'}
                                            `}>
                                        <Ionicons name="remove" size={32} color={count <1 ? "orange" :"black"}/>
                                        </Pressable>

                                        <Text className='text-[20px]'>
                                           {count}
                                        </Text>

                                        <Pressable
                                        onPress={()=>{
                                            setCount(count++)
                                        }}
                                        className={`w-[35px] h-[35px] rounded-full  flex items-center justify-center 
                                            ${count>0 ? 'border-[0px] bg-[#f8a1cb36]' : 'border-[1px]'}
                                            `}>
                                            <Ionicons name="add" size={32} color={count > 0 ? "orange" :"black"} />
                                        </Pressable>
                                    </View>
                                </View>
                                {/* harga */}
                                <Text className='font-medium text-c-iris-200 text-[20px]'>
                                    {formatRupiah(detailFood?.price as number)}
                                </Text>
                            </View>
                        </View>
                        {/* body */}
                        <View className='flex-1 
                        '>
                            <View className='border-b-[1px] border-b-slate-200 px-6 py-8'>
                                <Text className='text-[19px] border-b-[1px] inline w-[170px] font-medium border-b-c-orange-200'>
                                One Pack Contains:
                                </Text>    
                                <Text className='text-[13px] mt-4'>
                                Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.
                                </Text>           
                            </View>

                            {/* action */}
                            <View className='flex-1 '>
                                <Text className='px-6 pt-8 text-c-iris-200 font-medium flex-1'>
                                If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make
                                </Text>

                                <View className='relative  flex  h-[70px] flex-row p-3'>
                                    <View className='flex-1 flex justify-center'>
                                        <Pressable className={`w-[50px] h-full rounded-full  flex items-center justify-center bg-[#f8a1cb36] `}>
                                        <Ionicons name="heart-outline" size={32} color="orange"/>
                                        </Pressable>
                                    </View>   
                                    <Pressable className='flex-1 w-full h-full bg-c-orange-200 rounded-md flex justify-center items-center'>
                                         <Text className='text-white font-medium text-[17px]'>
                                         Add To Basket    
                                        </Text>       
                                    </Pressable>
                                </View>
                            </View>

                        </View>

                    </View>
              </View>
            </ScrollView>
        </SafeAreaView>
        <StatusBar translucent={false} backgroundColor={'#FFA451'} barStyle={'light-content'}/>
    </>
  )
}

export default DetailFood