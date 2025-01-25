import { ShoppingCart, User } from "lucide-react"



export const Appbar = () => {
    return(
        <div className="">
        <div className="shadow-md py-5 fixed inset-x-0 top-0 z-10 bg-gray-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-2">
                <div className="font-extrabold text-4xl font-mono">
                    Food<span className="font-sans font-extrabold text-2xl text-violet-600">Z&#39;ee</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                    <p className="flex gap-1 items-center"><ShoppingCart/> Cart</p>
                    <p className="flex gap-1 items-center"><User size={18}/> Sign In</p>
                </div>
            </div>
        </div>
        </div>
    )
}