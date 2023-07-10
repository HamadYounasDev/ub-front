import React, { useContext, useState } from "react";
import Modal from "../Misc/Modal";
import { MyContext } from "../../contexts/DestinationDetails";
import SingleItem from "../Misc/SingleItem";

const FreelancerSelector = () => {
  const { selectedHotel, setSelectedFreelancer, destinationDetails, selectedFreelancer } = useContext(MyContext);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const handlerFreelancerSelection = (data) => {
    setSelectedFreelancer(data)
    setConfirmationModal(true);
  };


  return (
<<<<<<< HEAD:src/components/FreelancerSelector.jsx
    <div class="">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-3xl font-serif font-bold tracking-tight text-black mb-10">
=======
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-10">
>>>>>>> 6a8591d0b3c74da6ad0a4f7a1c170ff00948d6b8:src/components/BookingFlow/FreelancerSelector.jsx
          Freelancer
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {destinationDetails?.ACF?.related_freelancers?.map((item) => (
            <SingleItem
              key={item.id}
              handleItemSelection={handlerFreelancerSelection}
              data={item}
            />
          ))}
        </div>
      </div>

      <Modal open={confirmationModal} setOpen={setConfirmationModal} />
    </div>
  );
};

export default FreelancerSelector;
