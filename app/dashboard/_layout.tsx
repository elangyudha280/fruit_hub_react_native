import {Stack} from 'expo-router'

const LayoutDetail = ()=>{
    return (
    <Stack>
         <Stack.Screen name='index' options={{
            headerShown:false
         }} />
        <Stack.Screen name='detail/[id]' options={{
            headerShown:false
         }}/>
    </Stack>
    )
}

export default LayoutDetail