import React from "react";
import { useNavigate } from "react-router-dom";

const TopItems = ({ data, heading, price, subCat }) => {
  const navigate = useNavigate();
  

  const handleNavigation = (id) => {
    navigate(`/destination/${id}`);
  };
  console.log('data', data)
  
  return (
    <div>
      {data && (
        <div className="bg-white my-10">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-5">
              {heading}
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {data?.map((item, index) => {
                return (
                  <div
                  key={index}
                    className="group relative"
                    onClick={() => {
                      handleNavigation(item?.id);
                    }}
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={item?.ACF?.image[0] ? item?.ACF?.image[0] : "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"}
                        // style={{
                        //   width: '261px',
                        //   height: '350px'
                        // }}
                        alt="Front of men&#039;s Basic Tee in black."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                        
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span>
                            {item?.title?.rendered}
                        </h3>
                        {
                          subCat && <p className="mt-1 text-sm text-gray-500">Black</p>
                        }
                      </div>
                      {
                        price && <p className="text-sm font-medium text-gray-900">$35</p>
                      }
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopItems;
