import { Minus, PlusIcon } from "lucide-react"
import { ResMenuItemList } from "./ResMenuItemList";

interface ResMenuProps{
     title:string;
     itemCards: [
        {card:{
            info:{
                id:string;
                name:string;
                price:number;
                ratings:{
                    aggregatedRating:{
                        rating:string;
                    }
                };
                description:string;
                imageId:string;


            }
        }}
     ];
     showItems:boolean;
     setShowIndex: () => void
}

export const ResMenuCard = ({title, itemCards, showItems, setShowIndex}:ResMenuProps) => {
    const handleDiv = () => {
        setShowIndex();
    }
    return(
        <div className=" bg-gray-100  py-1 px-2 rounded-lg shadow-md border border-gray-200 mb-2">
            <div className="flex items-center justify-between mb-1 py-2 px-1 " onClick={handleDiv}>
                <h1 className="md:text-xl text-lg font-medium md:font-semibold">{title} - ({itemCards.length})</h1>
                {showItems !== true ? <PlusIcon/> : <Minus/>}
            </div>
            {showItems && <ResMenuItemList data={itemCards}/>}
        </div>
    )
}