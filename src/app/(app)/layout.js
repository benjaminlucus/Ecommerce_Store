import { DM_Sans } from "next/font/google";
import './global.css' // Make sure the path points to your CSS file
import Navbar from "./(home)/Navbar";
import Footer from "./(home)/Footer";

const dmsans = DM_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Multitalent Store",
  description:
    "The Multitalent Store is your one-stop shop for all things creative and innovative.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmsans.className} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1 bg-[#F4F4F0]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
