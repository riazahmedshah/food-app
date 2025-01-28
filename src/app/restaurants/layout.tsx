import {Appbar} from "@/components/Appbar"
import StoreProvider from "../StoreProvider";

export default function RestaurantPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col">
        <Appbar/>
        <main className="">
          {children}
        </main>
      </div>
    </StoreProvider>
  );
}
