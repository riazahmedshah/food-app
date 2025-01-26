/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RES_MENU_IMG } from "@/app/utils/links";
import { Star } from "lucide-react"
import Image from "next/image";

// interface ResMenuProps{
//     // name:string;
//     // description:string;
//     // rating:string;
//     // price:number;
//     // imageId:string;
//     // title:string;
// }

export const ResMenuCard = ({data}:any) => {
    //console.log("Data: ",data);
    return(
        <div className="pt-10">
            <div>
                <span>{data.card?.card?.title}</span>
            
                {/* <div>
                    <h3>{name}</h3>
                    <p>{price}</p>
                    <p className="flex items-center text-sm text-green-900"><Star fill="green" strokeWidth={0}/>{rating}</p>
                    <p>{description}</p>
                </div> */}
                {/* <Image src={RES_MENU_IMG+imageId} alt="menu-image" height={50} width={50}/> */}
            
            </div>
        </div>
    )
}