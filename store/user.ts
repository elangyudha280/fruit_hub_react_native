import { create } from "zustand";


const useUser = create((set,get)=>({
    name:'',
    setName:(data:string)=>{
         set({name:data})
    }
}))

export default useUser;