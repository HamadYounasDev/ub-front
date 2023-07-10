import React, { useState, useEffect } from "react";

const Filters = ({ singleFilter, setFilterArr }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilter = (event) => {
    const filterValue = event.target.value;
    if (selectedFilters.includes(filterValue)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== filterValue));
    } else {
      setSelectedFilters([...selectedFilters, filterValue]);
    }
  };

  useEffect(() => {
    setFilterArr(selectedFilters);
  }, [selectedFilters]);

  return (
    <>
      <div>
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Destination Type</h3>
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {singleFilter?.map((item) => (
            <li className="w-full  rounded-t-lg dark:border-gray-600" key={item}>
              <div className="flex items-center pl-3">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value={item}
                  checked={selectedFilters.includes(item)}
                  onChange={handleFilter}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label className="w-full py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item}</label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Filters;
