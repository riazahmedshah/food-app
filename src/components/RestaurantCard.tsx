import { RES_IMAGE_URL } from "@/utils/links";
import { resDataProps } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";




export const RestaurantCard = ({areaName,avgRatingString,cloudinaryImageId,cuisines,name} : resDataProps) => {
    return(
            <div className="p-2 h-auto max-w-[280px] hover:border hover:border-black ">
                <div className="relative group">
                    <Image src={RES_IMAGE_URL+cloudinaryImageId} alt="Res-Img" width={100} height={10} className="object-cover w-full h-44 rounded-xl"/>
                    <div className="absolute h-10 w-[262px] shadow-2xl p-1 rounded-b-xl text-white text-center text-xl font-bold -mt-10 bg-gradient-to-t from-zinc-950 via-zinc-800 to-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">40% off</div>
                </div>
                <div className="py-2 px-3">
                    <h1 className="font-semibold text-xl">{name}</h1>
                    <h2 className="text-sm text-gray-700">{cuisines.join(", ").slice(0,30) + "..."}</h2>
                    <h2 className="text-sm flex items-center gap-2 ">Rating - {avgRatingString} 
                        <Star size={15} className="text-white bg-green-500 size-5 rounded-full font-bold p-[2px]"/>
                    </h2>
                    <h2 className="text-sm text-gray-700">Address - {areaName}</h2>
                </div>
            </div>
    )
}