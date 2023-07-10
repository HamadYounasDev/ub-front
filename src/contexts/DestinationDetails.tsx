import React, { createContext, useState, ReactNode } from 'react';

interface MyContextProviderProps {
  children: ReactNode;
  // Define other types for props here
}


interface MyContextProviderStates {
  destinationDetails: any;
  setDestinationDetails: React.Dispatch<React.SetStateAction<any>>;
  selectedHotel: any;
  setSelectedHotel: React.Dispatch<React.SetStateAction<any>>;
  selectedFreelancer: any;
  setSelectedFreelancer: React.Dispatch<React.SetStateAction<any>>;
}

const MyContext = createContext<MyContextProviderStates>({} as MyContextProviderStates);

// provider
const MyContextProvider = ({ children }: MyContextProviderProps) => {
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
