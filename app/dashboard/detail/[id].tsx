import React from 'react'

// import component
import { SafeAreaView } from 'react-native-safe-area-context'
import { View,ScrollView,Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
function DetailFood() {
    let params = useLocalSearchParams()
    console.log(params)
  return (
    <SafeAreaView>
        <Text>detail</Text>
    </SafeAreaView>
  )
}

export default DetailFood