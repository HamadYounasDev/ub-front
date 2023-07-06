import React, { useState } from "react";
import SingleItem from "./SingleItem";
import Modal from "./Modal";

const FreelancerSelector = () => {
    const [confirmationModal, setConfirmationModal] = useState(false)
    const handleHotelSelection = () => {
        setConfirmationModal(true)
      }
     
  return (
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Freelancer Selector</h2>
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <SingleItem handleItemSelection={handleHotelSelection} />
          <SingleItem handleItemSelection={handleHotelSelection} />
          <SingleItem handleItemSelection={handleHotelSelection} />
          <SingleItem handleItemSelection={handleHotelSelection} />
        </div>
      </div>

    
      <Modal open={confirmationModal} setOpen={setConfirmationModal} />

    </div>
  );
};

export default FreelancerSelector;
