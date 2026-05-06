import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Carousel from "./components/Carousel.jsx";
import Services from "./components/Services.jsx";
import Booking from "./components/Booking.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-barber-black text-barber-white">
      <Header />
      <Hero />
      <Carousel />
      <Services />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
