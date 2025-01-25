import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className={`text-4xl text-orange-500 font-semibold ${poppins.className}`}>
        Food Ordering Application!
      </h1>
  </div>

  );
}
