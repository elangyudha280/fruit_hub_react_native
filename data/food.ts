

interface food{
    id:string|number,
    title:string,
    poster:any,
    price:number,
    color:string
}

const dataMakanan : food[] = [
    {
        id:1,
        title:"Honey lime combo",
        poster:require('@/assets/images/food1.png'),
        price:2000,
        color:'#f5c8de92'
    },
    {
        id:2,
        title:"Berry mango combo",
        poster:require('@/assets/images/food2.png'),
        price:8000,
        color:'#ffae6328'
    },
    {
        id:3,
        title:"Quinoa fruit salad",
        poster:require('@/assets/images/food3.png'),
        price:8000,
        color:'#9267fc1b'
    }
]

export default dataMakanan;