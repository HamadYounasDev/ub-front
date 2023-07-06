import React from "react";
import SingleItem from "./SingleItem";
import { useNavigate } from "react-router-dom";

const HotelSelector = () => {
  const navigate = useNavigate()
  const handleHotelSelection = () => {
    navigate('/selectfreelancer')
  }
  return (
    <>
      <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="sr-only">Products</h2>
          <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <SingleItem handleItemSelection={handleHotelSelection} />
            <SingleItem handleItemSelection={handleHotelSelection} />
            <SingleItem handleItemSelection={handleHotelSelection} />
            <SingleItem handleItemSelection={handleHotelSelection} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelSelector;
