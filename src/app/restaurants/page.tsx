/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { RestaurantCard } from "@/components/RestaurantCard";
import Link from "next/link";
import { useEffect, useState } from "react";

const RestaurantPage = () => {
    const[restaurantData,setRestaurantData] = useState<any>([]);
    const[filteredList, setFilteredList] = useState<any>([]);
    const[search,setSearch] = useState<string>("");
    //console.log("Serach ELemnt: ",search);

    const resData = async () => {
        const response = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.584023&lng=77.2484181&carousel=true&third_party_vendor=1");
        const data = await response.json();
        const apiResponse = data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        setRestaurantData(apiResponse);
        setFilteredList(apiResponse);
        //console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };
    
    useEffect(() => {
        resData();
        
    },[]);

    if(!restaurantData) return 



    return(
        <div className="">
        <div className="relative mt-28 ">
            <div className="flex items-center gap-20 py-10">
                <button 
                    onClick={() => {
                        const filteredRestaurant = restaurantData.filter((res:any) => res?.info?.avgRatingString > 4.3);
                        setFilteredList(filteredRestaurant);
                    }}
                    className="mx-4 px-4 py-2 border  rounded-lg bg-violet-800 text-white font-semibold">Top Rated Restaurant</button>
                <div>
                    <input 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Restaurants" type="text" 
                        className="shadow-lg py-3 px-5 rounded-l-full w-[500px] "/>
                    <button 
                        onClick={() => {
                            const searchedRes = restaurantData.filter((res:any) => res?.info?.name.toLowerCase().includes(search.toLowerCase()));
                            setFilteredList(searchedRes);
                        }}
                        className="border-l-0 shadow-lg bg-violet-800 text-white py-[12px] px-5 rounded-r-full">search</button>
                </div>
            </div>
            <h1 className="text-4xl font-bold py-2 px-2">See All Restaurants</h1>
            <div className="grid md:grid-cols-4 grid-cols-2  gap-4">
                {filteredList.map((res:any) => (
                    <div key={res?.info?.id}>
                        <Link href={`/restaurants/${res?.info?.id}`}>
                        <RestaurantCard name={res?.info.name} cloudinaryImageId={res?.info?.cloudinaryImageId} cuisines={res?.info?.cuisines} avgRatingString={res?.info?.avgRatingString} areaName={res?.info?.areaName}/>
                        </Link>
                    </div>
                    
                ))}
            </div>
            
        </div>
        </div>
    )
}

export default RestaurantPage;