import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('https://a6e8z9v6.stackpathcdn.com/traveltour/homepages/landing/wp-content/uploads/sites/8/2022/08/landing-hero-bg.jpg')",height: "100vh" }}>
        <div class="relative isolate px-6 lg:px-8">
          <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl">
            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div class="mx-auto max-w-2xl py-24 sm:py-32 lg:py-36">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
              <div class="relative flex font-sans items-center rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.
                <a class="font-semibold text-indigo-600">
                  <span class="absolute inset-0" aria-hidden="true"></span>Read
                  more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              <div class="bg-blue-500 text-white inline-block py-3 px-4 text-lg font-medium rounded-full">
                V5
              </div>
            </div>
            <div class="text-center">
              <h1 class="font-serif text-7xl tracking-tight font-bold tracking-tight text-Black sm:text-7xl">
                Travel Tour
              </h1>
              <p class="text-base font-sans text-black md:text-lg">
                <span className="font-sans text-2xl font-bold">#1</span> The most complete tour management system for tour <br /> and hotel booking. 👍
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a class="bg-blue-500 font-sans hover:bg-blue-600 text-white cursor-pointer rounded-md px-3 px-7 py-3 text-base font-18">
                  Get started
                </a>
                <a class="bg-white text-blue-500 border border-blue-500 cursor-pointer font-sans text-white rounded-md px-3 px-7 py-3 text-base font-18">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
          <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
          </div>
        </div>
      </div>
    </div>






  );
};

export default Hero;
