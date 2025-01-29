"use client"
import { Checkout } from "@/components/Checkout";
import { useAppSelector } from "@/lib/hook";
const Cart = () => {
    const items = useAppSelector((store) => store.cartReducer)
    return(
        <div>
            <div className="my-28 max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold">Your cart items</h1>
                <div className="">
                    <Checkout data={items}/>
                </div>
            </div>
        </div>
    )
}

export default Cart;