import React from "react";
import { useNavigate } from "react-router-dom";

const TopItems = ({ data, heading, check }) => {
  const navigate = useNavigate();
  
  const handleNavigation = (id) => {
    navigate(`/destination/${id}`);
  };
  
  return (
    <div>
      {data && (
        <div class="bg-white">
          <div class="mx-auto max-w-2xl mb-8 px-4 pt-12 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8">
            <h2 class="text-3xl font-serif font-bold tracking-tight text-black">
              {heading}
            </h2>
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {data?.map((item) => {
                console.log(item)
                return (
                  <div
                    class="group relative"
                    onClick={() => {
                      handleNavigation(item?.id);
                    }}
                  >
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={check == "yes" ? item?.ACF?.images?.[0] ?? '' : item?.ACF?.image?.[0] ?? ''}
                        // src={item?.ACF?.image[1]}
                        alt="Front of men&#039;s Basic Tee in black."
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div class="mt-4 flex justify-between">
                      <div>
                        <h3 class="text-medium font-serif text-black">
                        
                            <span
                              aria-hidden="true"
                              class="absolute inset-0"
                            ></span>
                            {item?.title?.rendered}
                        </h3>
                        <p class="mt-1 text-sm text-gray-900">{item?.ACF?.description.slice(0,75)}...</p>
                      </div>
                      <p class="text-sm font-medium text-gray-900">${item?.ACF?.price}</p>
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
