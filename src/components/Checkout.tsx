/* eslint-disable @typescript-eslint/no-explicit-any */

import { RES_MENU_IMG } from "@/utils/links";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Checkout = ({ data }: any) => {
    
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        const initialQuantities: { [key: string]: number } = {};
        data.forEach((item: any) => {
            initialQuantities[item.card?.info?.id] = 1;
        });
        setQuantities(initialQuantities);
    }, [data]);

    const handleIncQuantity = (id: string) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: (prevQuantities[id] || 0) + 1
        }));
    }

    const handleDecQuantity = (id: string) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max((prevQuantities[id] || 0) - 1, 0)
        }));
    }

    const totalAmount = data.reduce((sum: number, item: any) => {
        const itemQuantity = quantities[item.card?.info?.id] || 0;
        const itemPrice = item.card?.info?.price / 100 || 0;
        return sum + (itemQuantity * itemPrice);
    }, 0);


  console.log("Data: ", data);
  return (
    <div className="pt-5 grid grid-cols-3 gap-2">
      <div className="col-span-2  space-y-3">
        <div className="grid grid-cols-5 pl-2 py-4 font-semibold border-b border-black mb-2 ">
          <p className="col-span-2">Items</p>
          <p>Amount</p>
          <p>Quntity</p>
          <p>Sub total</p>
        </div>
        {data.map((item: any) => (
          <div key={item.card?.info?.id}>
            <div className="pl-2 grid grid-cols-5 items-start border-b-2 py-2">
              <div className="flex gap-4 col-span-2">
                <Image 
                    src={RES_MENU_IMG + item.card?.info?.imageId}
                    alt="menu-image"
                    height={50}
                    width={50}
                    className="object-cover items-end rounded-lg w-auto h-auto"/>
                <div>
                  <h2 className="text-lg font-bold">{item.card?.info?.name}</h2>
                  <h2>{item.card?.info?.category}</h2>
                </div>
              </div>
              <div>
                <p className="font-bold">{item.card?.info?.price /100} - Rs.</p>
              </div>
              <div className="w-24 grid grid-cols-3 gap-4 justify-between px-3 border border-black">
                <div className="border-r border-black pr-4">
                    <button className="" onClick={() => handleDecQuantity(item.card?.info?.id)}>-</button>
                </div>
                <p className="text-center">{quantities[item.card?.info?.id] || 0}</p>
                <div className="border-l border-black pl-2">
                    <button className="" onClick={() => handleIncQuantity(item.card?.info?.id)}>+</button>
                </div>
              </div>
              <div>
                <p className="font-bold">{quantities[item.card?.info?.id] * item.card?.info?.price /100} Rs.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className=" border border-black p-2 rounded-lg">
            <h1 className="font-bold text-xl pb-2 border-b border-black">Cart Total</h1>
            <div className="flex justify-between items-center py-3 border-b">
                <h3 className="font-semibold">Sub total - </h3>
                <p>{totalAmount} - Rs.</p>
            </div>
            <div className="flex justify-between items-center border-b py-2">
                <p className="font-semibold">Shipping</p>
                <p className="text-blue-600 text-sm">badalpur, Delhi, India</p>
            </div>
            <div className="flex items-center justify-between border-b py-2">
                <p className="font-bold">To Pay</p>
                <p className="font-semibold text-lg">{totalAmount}</p>
            </div>
            <div className="text-center pt-4 pb-2" >
                <button className="w-full py-3 px-2 bg-violet-600 text-white">
                    Payment
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
