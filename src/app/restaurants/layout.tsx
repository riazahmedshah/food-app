
import  ResHeader  from "@/components/ResHeader";
import StoreProvider from "../StoreProvider";

export default function RestaurantPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col">
        <ResHeader/>
        <main className="">
          {children}
        </main>
      </div>
    </StoreProvider>
  );
}
