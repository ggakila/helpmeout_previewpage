import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Previewcontent from "@/components/Previewcontent"
import Savevid from "@/components/Savevid"
export default function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden px-[100px] flex flex-col items-center gap-[40px]">
      <Header />
      <Previewcontent/>
      <Savevid/>
      <Footer/>
      
    </div>
  )
}
