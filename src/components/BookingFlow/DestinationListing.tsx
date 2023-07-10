import React, { useEffect, useState } from "react";
import HeroBanner from "../Misc/HeroBanner";
import axios from "axios";
import TopItems from "../Misc/TopItems";
import Filters from "./Filters";

const DestinationListing = () => {
  const [reserved, setReserved] = useState([]);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/ub_back/wp-json/wp/v2/destination")
      .then((res) => {
        setDestinations(res.data);
        setReserved(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [filterArr, setFilterArr] = useState([]);

  useEffect(() => {
    if (filterArr.length > 0) {
      const filteredDestinations = reserved.filter((destination) =>
         filterArr.some(item => destination.ACF.type.includes(item))
      );
      setDestinations(filteredDestinations);
    } else {
      setDestinations(reserved);
    }
  }, [filterArr]);

  return (
    <div>
      <HeroBanner />
      <div className="row">
        <div className="grid grid-cols-12 gap-4 px-24 my-10">
          <div className="col-span-3">
            <Filters
              singleFilter={reserved[0]?.ACF?.type}
              setFilterArr={setFilterArr}
            />
          </div>
          <div className="col-span-9">
            <TopItems data={destinations} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationListing;
