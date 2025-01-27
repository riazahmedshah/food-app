import { ResInfoProps } from "@/types"
import { Star } from "lucide-react"





export const ResInfoCard = ({avgRatingString, city, cuisines, locality, name,} : ResInfoProps) => {
    // console.log("Res Data Info: ", location);

  return (
    <div className="mb-4">
        <div className="pb-4 pt-2 border-b border-gray-400 md:mx-0 px-3">
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
        </div>
    </div>
  )
}
