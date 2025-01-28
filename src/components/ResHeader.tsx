"use client"
import { useAppSelector } from "@/lib/hook"
import { Appbar } from "./Appbar"

const ResHeader = () => {
    const item = useAppSelector((store) => store.cartReducer)
    return(
        <Appbar 
          title="FoodZ'ee"
          cartCount={item.length}
          userName="John Doe"
          cartPage={true}
          />
    )
}
 export default ResHeader