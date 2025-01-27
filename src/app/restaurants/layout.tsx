import {Appbar} from "@/components/Appbar"

export default function RestaurantPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="min-h-screen flex flex-col">
        <Appbar/>
        <main className="">
          {children}
        </main>
      </div>
  );
}
