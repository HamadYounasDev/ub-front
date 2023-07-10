import React, { useEffect } from "react";

const SingleItem = ({handleItemSelection, data}) => {
  useEffect(()=> {
    console.log("data",data);
  },[])
  return (
    <>
    <div onClick={()=>handleItemSelection(data)}>
      <a href="#" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={data?.image}
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            class="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-bold font-serif text-lg text-black">{data?.post_title}</h3>
        <p class="mt-1 text-lg font-small text-gray-900">{data?.post_type}</p>
      </a>
    </div>
    </>
  );
};

export default SingleItem;
