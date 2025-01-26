/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { RES_MENU } from "@/app/utils/links";
import ResMenuCard from "@/components/ResMenuCard";
import * as React from "react"


type Param = Promise<{resId:number}>

const RestaurantMenu =  ({params}:{params:Param}) => {
    const {resId} =  React.use(params);

    const[resInfo, setResInfo] = React.useState<any>([])
    const[resMenu, setResMenu] = React.useState<any>([])
    

    React.useEffect(() => {
        const getData = async () => {
            const response = await fetch(RES_MENU+resId);
            const data = await response.json();
            const apiResponse = data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards.slice(2)
            const menuApi = data.data.cards[2].card.card;
            // console.log("Res Info: ",data.data);
            setResMenu(apiResponse);
            setResInfo(menuApi);
        }
        getData()
    },[resId]);

    return(
        <div className="mt-32 max-w-4xl mx-auto">
            Id: {resId}
            {
                resMenu.map((resMenu:any, idx:number) => (
                    <div key={idx}>
                    </div>
                ))
            }
            <ResMenuCard name={resInfo.info.name} cuisines={resInfo.info.cuisines} locality={resInfo.info.locality} city={resInfo.info.city} avgRatingString={resInfo.info.avgRatingString} />
            
        </div>
    )
}

export default RestaurantMenu;