import { RES_MENU_IMG } from "@/app/utils/links";
import { itemListProps } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";


export const ResMenuItemList = ({data} : itemListProps) => {
  return (
    <div>  
        {
            data.map((item) => (
                
                <div key={item.card?.info?.name} className="border-b border-black mb-4 px-1 py-4 flex justify-between bg-gray-100">
                    <div className="max-w-[650px]">
                        <div className="md:w-full w-[250px]">
                            <span className=" md:font-bold md:tracking-normal tracking-tight">{item.card?.info?.name}</span> - <span>{item.card?.info?.price ? item.card?.info?.price/100 : 100} Rs.</span>                       
                        </div>
                        <div className="inline-flex items-center text-white bg-green-700 gap-1 px-2 py-1 rounded-lg my-1">
                            <Star fill="white" strokeWidth={0} />  <span>{item?.card?.info?.ratings?.aggregatedRating?.rating}</span>
                           
                        </div>
                        <p className="text-sm text-gray-600 pt-2">{item.card?.info?.description}</p>
                        </div>
                        <div className="md:block hidden">
                            <Image
                                src={RES_MENU_IMG + item.card?.info?.imageId}
                                alt="menu-image"
                                height={50}
                                width={200}
                                className="object-cover items-end rounded-lg w-auto h-auto"
                            />
                            <div className="absolute -my-9 ml-16">
                                <button className="bg-black text-white py-2 px-4 rounded-lg">Add +</button>
                            </div>
                        </div>
                </div>
            ))
        }    
    </div>     
  );
};
