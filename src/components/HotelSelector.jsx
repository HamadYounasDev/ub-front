import React, { useContext } from "react";
import SingleItem from "./SingleItem";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../contexts/DestinationDetails";

const HotelSelector = () => {
  const { destinationDetails, setSelectedHotel } = useContext(MyContext);
  const navigate = useNavigate();
  console.log('selected Destination',destinationDetails)
  const handleHotelSelection = (hotel) => {
    setSelectedHotel(hotel)
    navigate("/selectfreelancer");
  };
  return (
    <>
      <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-10">
            Products
          </h2>
          <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {destinationDetails?.ACF?.related_hotels?.map((item) => (
              <SingleItem
                key={item.id}
                handleItemSelection={handleHotelSelection}
                data={item}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelSelector;