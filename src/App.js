import React from "react";
import { Routes, Route } from "react-router-dom";
import {MyContextProvider} from "./contexts/DestinationDetails";
import Homepage from "./components/BookingFlow/Homepage";
import Navbar from "./components/Misc/Navbar";
import Footer from "./components/Misc/Footer";
import DestinationListing from "./components/BookingFlow/DestinationListing";
import DestinationDetail from "./components/BookingFlow/DestinationDetail";
import HotelDetail from "./components/BookingFlow/HotelDetail";
import FreelancerDetails from "./components/BookingFlow/FreelancerDetails";
import HotelSelector from "./components/BookingFlow/HotelSelector";
import FreelancerSelector from "./components/BookingFlow/FreelancerSelector";

const App = () => {
  return (
    <MyContextProvider>
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
        </Routes>
        <Footer />
      </div>
      </MyContextProvider>
  );
};

export default App;