
export const Checkout = () => {
    return(
        <div className="pt-5 grid grid-cols-3 gap-2">
            <div className="col-span-2 bg-green-300 space-y-3">
                <div className="grid grid-cols-5 pl-2 py-2 font-semibold border-b border-black mb-2 ">
                    <p className="col-span-2">Items</p>
                    <p>Amount</p>
                    <p>Quntity</p>
                    <p>Sub total</p>
                </div>
                <div className="pl-2 grid grid-cols-5 items-start border border-black py-2">
                    <div className="flex gap-4 col-span-2">
                        <h1 className="size-20 border border-black text-center bg-gray-300"></h1>
                        <div>
                            <h2 className="text-lg font-bold">Item Name</h2>
                            <h2>Cuisine, cuisine</h2>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold">259-Rs.</p>
                    </div>
                    <div>
                        <p className="font-bold">- 1 +</p>
                    </div>
                    <div>
                        <p className="font-bold">sub-totol</p>
                    </div>
                    
                </div>
                
                
            </div>
            <div className="bg-violet-300 border border-black">
                right portion
            </div>
        </div>
    )
}