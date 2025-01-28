

import { Checkout } from "@/components/Checkout";
const Cart = () => {
    return(
        <div>
            <div className="my-28 max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold">Your cart items</h1>
                <div className="">
                    <Checkout/>
                </div>
            </div>
        </div>
    )
}

export default Cart;