"use client"
import { RES_MENU } from "@/app/utils/links";
import * as React from "react"


type Param = Promise<{resId:number}>

const RestaurantMenu =  ({params}:{params:Param}) => {
    const {resId} =  React.use(params);
    

    React.useEffect(() => {
        const getData = async () => {
            const response = await fetch(RES_MENU+resId);
            const data = await response.json();
            console.log("Res Info: ",data) 
        }
        getData()
    },[resId]);

    return(
        <div className="mt-32">
            Id: {resId}
        </div>
    )
}

export default RestaurantMenu;