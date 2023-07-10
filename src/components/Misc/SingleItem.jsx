import React, { useEffect } from "react";

const SingleItem = ({handleItemSelection, data}) => {
  useEffect(()=> {
    console.log("data",data);
  },[])
  return (
    <>
    <div onClick={()=>handleItemSelection(data)}>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={data?.image}
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
<<<<<<< HEAD:src/components/SingleItem.jsx
        <h3 class="mt-4 text-bold font-serif text-lg text-black">{data?.post_title}</h3>
        <p class="mt-1 text-lg font-small text-gray-900">{data?.post_type}</p>
=======
        <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
>>>>>>> 6a8591d0b3c74da6ad0a4f7a1c170ff00948d6b8:src/components/Misc/SingleItem.jsx
      </a>
    </div>
    </>
  );
};

export default SingleItem;
