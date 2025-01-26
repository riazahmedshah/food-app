/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Minus, PlusIcon } from "lucide-react"
import { ResMenuItemList } from "./ResMenuItemList";
import { useState } from "react";

// interface ResMenuProps{
//     // name:string;
//     // description:string;
//     // rating:string;
//     // price:number;
//     // imageId:string;
//     // title:string;
// }

export const ResMenuCard = ({data}:any) => {
    const[showItems, setShowItems] = useState(false)
    const handleDiv = () => {
        setShowItems(!showItems);
    }
    //console.log("Data: ",data);
    return(
        <div className=" bg-gray-100  py-1 px-2 rounded-lg shadow-md border border-gray-200 mb-2">
            <div className="flex items-center justify-between mb-1 py-2 px-1 " onClick={handleDiv}>
                <h1 className="md:text-xl text-lg font-medium md:font-semibold">{data.card?.card?.title} - ({data.card?.card?.itemCards.length})</h1>
                {showItems !== true ? <PlusIcon/> : <Minus/>}
            </div>
            {showItems && <ResMenuItemList data={data.card?.card?.itemCards}/>}
        </div>
    )
}