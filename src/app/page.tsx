import Banner from "@/components/Banner";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Register from "@/components/Register";
import Service from "@/components/Service";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Service />
      <Showcase />
      <Feedback />
      <Register />
      <Footer />
    </div>
  );
}
