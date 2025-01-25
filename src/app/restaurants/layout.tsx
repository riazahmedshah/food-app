import {Appbar} from "@/components/Appbar"

export default function RestaurantPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <Appbar/>
        <main className="max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
