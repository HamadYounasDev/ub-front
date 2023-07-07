import React, { createContext, useState } from 'react';

// context
const MyContext = createContext();

// provider
const MyContextProvider = ({ children }) => {
  const [destinationDetails, setDestinationDetails] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [selectedFreelancer, setSelectedFreelancer] = useState(null)
  return (
    <MyContext.Provider value={{ destinationDetails, setDestinationDetails, selectedHotel, setSelectedHotel, selectedFreelancer, setSelectedFreelancer }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
