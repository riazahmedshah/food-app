"use client"
import { ShoppingCart, User } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation";


interface AppbarProps {
    title: string; 
    cartCount?: number;
    userName?: string; 
    onSignInClick?: () => void; 
    onCartClick?: () => void; 
  }

  
  export const Appbar: React.FC<AppbarProps> = ({cartCount,title,onCartClick,onSignInClick,userName}) => {
      const path = usePathname();

     console.log(path)
    
    //console.log("Items: ",item);
    return(
        
              <div className="shadow-md py-5 fixed inset-x-0 top-0 z-10 bg-gray-50">
                <div className="md:max-w-6xl max-w-2xl mx-auto flex justify-between items-center px-2">
                  <div className="font-extrabold text-4xl font-mono">
                    <Link href="/restaurants">
                    {title.split("'")[0]}
                    <span className="font-sans font-extrabold text-2xl text-violet-600">
                      {title.split("'")[1]}
                    </span>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    {path !== "/restaurants/cart" && 
                    <p
                      className="flex gap-1 items-center cursor-pointer"
                      onClick={onCartClick}
                    >
                      <Link href="/restaurants/cart"><ShoppingCart /></Link>
                      <span>({cartCount})</span>
                    </p>}
                    <p
                      className="flex gap-1 items-center cursor-pointer"
                      onClick={onSignInClick}
                    >
                      <User size={18} /> {userName === "Guest" ? "Sign In" : userName}
                    </p>
                  </div>
                </div>
              </div>
            );
}