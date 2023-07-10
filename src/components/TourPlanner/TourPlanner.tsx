import React, { useState, useEffect, useContext } from "react";
import Modal from "../Misc/Modal";
import axios from "axios";
import { MyContext } from "../../contexts/DestinationDetails";

const TourPlanner = () => {
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [fuelPrice, setFuelPrice]= useState(null)
  const {destinationDetails} = useContext(MyContext)
  const handleTourPlannerSubmit = (data) => {
    setConfirmationModal(true);
  };
  useEffect(()=>{
    axios.get('http://localhost/ub_back/wp-json/ub/v1/getFuelPrice')
    .then((res)=>{
      setFuelPrice(res.data.slice(0,9))
    })
  },[])

  console.log(destinationDetails?.title?.rendered)

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 my-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <form>

        <div className="mb-6 flex gap-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price of Fuel per Liter
            </label>
            <h1>
              {fuelPrice}
            </h1>
          </div>


          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select your Car's Horse Power
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>70cc</option>
              <option>150cc</option>
              <option>660cc</option>
              <option>1000cc</option>
              <option>1200cc</option>
              <option>1800cc</option>
              <option>3000cc</option>
              <option>4000cc</option>
            </select>
          </div>


          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Choosen Destination
            </label>

            <figure>
              <img
                className="h-auto max-w-full rounded-lg w-full"
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                alt="image description"
              />
              <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                Destination 01
              </figcaption>
            </figure>
          </div>


          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Choosen Hotel
            </label>

            <figure>
              <img
                className="h-auto max-w-full rounded-lg w-full"
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                alt="image description"
              />
              <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                Hotel 01
              </figcaption>
            </figure>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Choosen Freelancer
            </label>

            <figure>
              <img
                className="h-auto max-w-full rounded-lg w-full"
                src="data:image/jpeg;base64,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"
                alt="image description"
              />
              <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                Freelancer 01
              </figcaption>
            </figure>
          </div>

          <button
            onClick={handleTourPlannerSubmit}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      <Modal open={confirmationModal} setOpen={setConfirmationModal} />
    </div>
  );
};

export default TourPlanner;
