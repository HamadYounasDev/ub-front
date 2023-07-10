import React, { useContext, useState } from "react";
import SingleItem from "./SingleItem";
import Modal from "./Modal";
import { MyContext } from "../contexts/DestinationDetails";

const FreelancerSelector = () => {
  const { selectedHotel, setSelectedFreelancer, destinationDetails, selectedFreelancer } = useContext(MyContext);
  console.log("selected Hotel", selectedHotel);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const handlerFreelancerSelection = (data) => {
    setSelectedFreelancer(data)
    setConfirmationModal(true);
  };

  console.log('selected Freelancer',selectedFreelancer)

  return (
    <div class="">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-3xl font-serif font-bold tracking-tight text-black mb-10">
          Freelancer
        </h2>
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
