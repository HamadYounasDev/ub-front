import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="relative isolate overflow-hidden py-14 sm:py-22">
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
          ></div>
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
          ></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-6xl font-serif font-bold tracking-tight text-black sm:text-6xl">
              About Us
            </h2>
            <p className="mt-6 font-sans text-lg leading-8 text-black">
              We are a part of the Travel.com Group, a NASDAQ listed company since 2003 (NASDAQ: TCOM) with over 45,100 employees and over 400 million members, making it one of the leading online travel agencies in the world.
              <br />

              With more than 1.4 million hotels in 200 countries and regions, we've built an extensive hotel network to give our customers a fantastic choice of accommodation. Our far-reaching flight network has over 2 million individual flight routes connecting more than 5,000 cities around the globe. When you combine this with our 24/7 English customer service and various other travel products, you can trust us to take care of your next trip.
            </p>
          </div>
          <div className="mx-auto font-sans mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-blue-500 sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="#" className="hover:text-blue-900">
                Open roles <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#" className="hover:text-blue-900">

                Incredible Deals <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#" className="hover:text-blue-900">
                Travel Worry-free <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#" className="hover:text-blue-900">
                Meet our leadership <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse font-sans">
                <dt className="text-base leading-7 text-gray-900">
                  Offices worldwide
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">
                  12
                </dd>
              </div>
              <div className="flex flex-col-reverse font-sans">
                <dt className="text-base leading-7 text-gray-900">
                  Full-time colleagues
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">
                  300+
                </dd>
              </div>
              <div className="flex flex-col-reverse font-sans">
                <dt className="text-base leading-7 text-gray-900">
                  Hours per week
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">
                  40
                </dd>
              </div>
              <div className="flex flex-col-reverse font-sans">
                <dt className="text-base leading-7 text-gray-900">Paid time off</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">
                  Unlimited
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
