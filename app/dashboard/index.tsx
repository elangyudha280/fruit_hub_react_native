import React from 'react'

// import component
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView,View,StatusBar,Image, Pressable,Text,TextInput,FlatList } from 'react-native'

// import utils
import {Link, router} from 'expo-router'
import dataMakanan from '@/data/food'
import formatRupiah from '@/utils/formatRupiah'
import Swiper from 'react-native-swiper'
import useUser from '@/store/user'
import { State } from 'react-native-gesture-handler'
function PageDashboard() {

    let name = useUser((state:any) => state.name)
    const goToDetail = (id:number|string)=>{
        router.push(`dashboard/detail/${id}`)
    }
  return (
    <>
        <SafeAreaView>
            <ScrollView className='relative h-full w-full bg-white z-[10]'>
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
                <View className='relative px-5 w-full pb-8'>
                    {/*//! title */}
                    <Text className='text-[23px] text-c-iris-200'>
                        Hello {name === '' || name === undefined ? 'Guest' : name}, <Text className='font-medium text-c-iris-500'>What fruit salad combo do you want today?</Text>
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

                    {/*//! card content */}
                    <View className='relative w-full mt-7'>
                        <Text className='text-c-iris-500 text-2xl  font-bold'>Recommended Combo</Text>
                        <View className='mt-4 '>
                        <Swiper showsButtons={false}
                            showsPagination={false}
                            height={240}
                        >
                            {
                                dataMakanan?.map((el,index)=>{
                                    return (
                                        <Pressable
                                        onPress={()=>{goToDetail(el.id)}}
                                        className={`relative w-full h-full  p-5 rounded-md bg-[${el.color}]`} key={el.id}>
                                                 <Image source={require('@/assets/images/love_orange.png')} className='scale-150 absolute right-5 top-[20px]'/>
                                                {/* header */}
                                                <View className='w-full flex items-center'>
                                                    <Image source={el.poster} className='w-[100px] h-[100px]'/>
                                                </View>
                                                <Text className='text-center mt-3 text-[20px] font-bold line-clamp-1'>{el.title}</Text>
                                                    <View className='flex-1 flex flex-row justify-center items-center box-border mt-3 w-full '>
                                                        <View className='flex-1  h-full flex flex-row items-center'>
                                                          <Text className=' text-c-orange-200 text-[20px] font-medium'>
                                                             {formatRupiah(el.price)}
                                                          </Text>
                                                        </View> 

                                                        <Pressable className='w-[50px] h-full bg-c-orange-200/20 rounded-full flex justify-center items-center'>
                                                        <Image source={require('@/assets/images/plus_orange.png')} className='scale-150'/>
                                                            </Pressable>    
                                                    </View>
                                        </Pressable>
                                    )
                                })
                            }
                        </Swiper>
                        </View>
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    <StatusBar translucent={false} backgroundColor={'#fff'}/>
    </>
  )
}

export default PageDashboard