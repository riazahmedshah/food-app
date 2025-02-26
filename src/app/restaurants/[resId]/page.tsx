/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { RES_MENU } from "@/utils/links";
import { ResMenuCard } from "@/components/ResMenuCard";
import {ResInfoCard} from "@/components/ResInfoCard";
import * as React from "react"
import { ResInfoProps } from "@/types";


type Param = Promise<{resId:number}>



const RestaurantMenu =  ({params}:{params:Param}) => {
    const {resId} =  React.use(params);
    const[resInfo, setResInfo] = React.useState<ResInfoProps | null>(null)
    const[resMenu, setResMenu] = React.useState<any>([])
    const[showIndex,setShowIndex] = React.useState(0);

    React.useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(RES_MENU + resId);
                const data = await response.json();

                setResInfo(data?.data?.cards[2]?.card?.card?.info);
                //console.log(data?.data?.cards[2]?.card?.card);
                
                const resCategory = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((menu:any) => menu?.card?.card?.["@type"] ===    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
                
                setResMenu(resCategory);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }
        getData()
    },[resId]);

    if(!resInfo) return;
    return(
        <div className="mt-32 max-w-4xl mx-auto">
            <div>
                <ResInfoCard name={resInfo?.name} cuisines={resInfo.cuisines} locality={resInfo.locality} city={resInfo.city} avgRatingString={resInfo.avgRatingString}/>
            </div>
            {/* Menu Items */}
            <div>
                {
                    resMenu.map((c:any, idx:any) => (
                        <div key={idx}>
                            <ResMenuCard 
                            title={c?.card?.card?.title} 
                            itemCards = {c.card?.card?.itemCards}
                            showItems = {idx === showIndex ? true : false}
                            setShowIndex = {() => setShowIndex(idx)}
                            />
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}

export default RestaurantMenu;