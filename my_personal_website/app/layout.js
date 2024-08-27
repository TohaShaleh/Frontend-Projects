
import Footer from "@/Components/Footer";
import "./globals.css";
import Header from "@/Components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="flex flex-col min-h-screen"> 


        <Header/>   

         <main className="flex-grow bg-slate-300">

         {children}

         </main>

         <Footer/>
    

      </body>
      


    </html>
  );
}
