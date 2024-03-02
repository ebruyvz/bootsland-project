import Navbar from "./Navbar";
import Header from "./Header";
import Info from "./Info";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Header />
      <div className="bg-[#F8FCFF]">
        <Info />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
