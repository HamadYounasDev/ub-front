import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DestinationListing from "./components/DestinationListing";
import DestinationDetail from "./components/DestinationDetail";
import HotelDetail from "./components/HotelDetail";
import FreelancerDetails from "./components/FreelancerDetails";
import HotelSelector from "./components/HotelSelector";
import FreelancerSelector from "./components/FreelancerSelector";
import { BookingSuccess } from "./components/BookingSuccess";

const App = () => {
  return (
      <div>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/destinations" element={<DestinationListing />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
          <Route path="/freelancer/:id" element={<FreelancerDetails />} />
          <Route path="/selecthotel" element={<HotelSelector />} />
          <Route path="/selectfreelancer" element={<FreelancerSelector />} />
          <Route path="/bookingSuccess" element={<BookingSuccess   />} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;