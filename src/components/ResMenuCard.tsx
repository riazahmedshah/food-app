

import { Star } from "lucide-react"


interface ResMenuProps{
    name:string;
    cuisines:string[];
    locality:string;
    city:string;
    avgRatingString:string;
}


const ResMenuCard = ({avgRatingString, city, cuisines, locality, name,} : ResMenuProps) => {
    // console.log("Res Data Info: ", location);

  return (
    <div className="">
        <div className="pb-4 pt-2 border-b border-gray-400">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl">{name}</h2>
                <p className="bg-violet-700 text-white flex items-center gap-2 p-2 rounded-lg">{avgRatingString} <Star  fill="#ffffff" strokeWidth={0} className="size-4"/> </p>
            </div>
            <div className="space-y-1 pt-1">
                <p className="text-lg tracking-wide text-gray-500">{cuisines.join(", ")}</p>
                <p className="text-md text-violet-600">{locality}, {city}</p>
            </div>
        </div>
        <div>
            {/* menu items */}
        </div>
    </div>
  )
}

export default ResMenuCard