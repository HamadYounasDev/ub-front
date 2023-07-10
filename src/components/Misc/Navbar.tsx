import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [weather, setWeather] = useState()
  const navigate = useNavigate();
  const handleHomeNav = () => {
    navigate("/");
  };
  const handleDestinationNav = () => {
    navigate("/destinations");
  };
  let apiKey = "28a9b26783d5b53ed2f25d7dd7717889";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then((res) => {
    setWeather(res.data.main.temp);
  });
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="cursor-pointer flex flex-1 items-center justify-between sm:items-stretch ">
              <div
                className="flex flex-shrink-0 items-center"
                onClick={() => {
                  handleHomeNav();
                }}
              >
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>

              <div className="sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <div className="text-white rounded-md px-3 py-2 text-sm font-medium">
                    <Link to="/blogs">Blogs</Link>
                  </div>
                  <div
                    onClick={() => handleDestinationNav()}
                    className="text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Destinations
                  </div>
                  <div className="text-white rounded-md px-3 py-2 text-sm font-medium">
                    <Link to="/register">Register</Link>
                  </div>
                  <div className="text-white rounded-md px-3 py-2 text-sm font-medium">
                    <Link to="/login">Login</Link>
                  </div>
                  <div className="text-white rounded-md px-3 py-2 text-sm font-medium">
                    {weather}°C
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
