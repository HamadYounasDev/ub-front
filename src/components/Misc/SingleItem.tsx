import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleItem = ({ handleItemSelection, data, type }) => {
  const [hotels, setHotels] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
        try {
          let url = ''
          url = (type == 'hotel') ? `http://localhost/ub_back/wp-json/wp/v2/hotel/${data?.ID}` :  `http://localhost/ub_back/wp-json/wp/v2/freelancer/${data?.ID}`           
          const res = await axios.get(
           url
          );
          setHotels(res.data);
        } catch (error) {
          console.error(error);
        }
    };
    fetchHotels();
  }, [data]);


  return (
    <>
      <div onClick={() => handleItemSelection(data)}>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              // src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
              src={hotels?.ACF?.images[0] ? hotels?.ACF?.images[0] : "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"}
              style={{
                width: '280px',
                height: '280px'
              }}
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{hotels?.title?.rendered}</h3>
        </a>
      </div>
    </>
  );
};

export default SingleItem;
