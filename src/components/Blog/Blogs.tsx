import React from "react";
import HeroBanner from "../Misc/HeroBanner";
import Filters from "../BookingFlow/Filters";
import TopItems from "../Misc/TopItems";

const Blogs = () => {
  return (
    <div>
      <HeroBanner />
      <div className="row">
        <div className="grid grid-cols-12 gap-4 px-24 my-10">
          <div className="col-span-3">
            <Filters />
          </div>
          <div className="col-span-9">
            {/* <TopItems data={} />{" "} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
