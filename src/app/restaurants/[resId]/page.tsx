/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { RES_MENU } from "@/app/utils/links";
import {ResInfoCard} from "@/components/ResInfoCard";
//import { ResMenuCard } from "@/components/ResMenuCard";
import * as React from "react"


type Param = Promise<{resId:number}>

const RestaurantMenu =  ({params}:{params:Param}) => {
    const {resId} =  React.use(params);

    const[resInfo, setResInfo] = React.useState<any>([])
    const[resMenu, setResMenu] = React.useState<any>([])
    

    React.useEffect(() => {
        console.log(resMenu);
        const getData = async () => {
            try {
                const response = await fetch(RES_MENU + resId);
                const data = await response.json();

                const menuApiResponse = 
                    data.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(2)
                    ?.map((card: { card: { itemCards: any; }; })  => card?.card?.itemCards)
                    .flat() || [];
                
                const resInfoApi = data.data.cards[2]?.card?.card || {};

                setResMenu(menuApiResponse);
                setResInfo(resInfoApi);

                //console.log("Restaurant Info: ", resInfoApi);
                console.log("Restaurant Menu Info: ", menuApiResponse);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }
        getData()
    },[resId]);

    // const { name, description, ratings, price,imageId } = menu.itemCards.card.info;
    // const{ rating } = ratings.aggregatedRating;

    //if(!resMenu || !resInfo) return;

    return(
        <div className="mt-32 max-w-4xl mx-auto">
            <div>
                <ResInfoCard name={resInfo?.info?.name} cuisines={resInfo?.info?.cuisines} locality={resInfo?.info?.locality} city={resInfo?.info?.city} avgRatingString={resInfo?.info?.avgRatingString}/>
            </div>

            {/* Menu Items */}
            {/* <div>
                {resMenu.map((menu: any, idx: number) => (
                    <div key={idx}>
                        <ResMenuCard 
                             
                            name={menu?.card?.info?.name} 
                            description={menu?.card?.info?.description} 
                            rating={menu?.card?.info?.rating} 
                            price={menu?.card?.info?.price} 
                            imageId={menu?.card?.info?.imageId} 
                        />
                    </div>
                ))}
            </div> */}
            
        </div>
    )
}

export default RestaurantMenu;