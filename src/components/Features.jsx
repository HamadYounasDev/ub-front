import React from "react";

const Features = () => {
  return (
    <div>
      <div className="border border-black"></div>
      <div class="relative isolate overflow-hidden py-14">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:text-center">
            <p class="text-5xl font-serif font-bold tracking-tight text-black">
              Start a Rewarding Journey
            </p>
            <p class="mt-6 font-sans text-lg leading-8 text-gray-900">
              Earning rewards through our loyalty program is fast, easy, and most importantly, free! Take advantage of exclusive member-only discounts, earn Trip Coins by booking, and use them to save instantly.
            </p>
          </div>
          <div class="mx-auto mt-8 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-4xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div class="relative px-10 py-5 border rounded-lg pl-16 bg-gray-100">
                <dt class="text-base font-bold leading-7 text-black">
                  <div class="absolute left-2 top-5 flex h-10 w-10 items-center justify-center text- rounded-lg bg-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>

                  </div>
                  Travel Rewards
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-900">
                  Travel Rewards
                  Unlock member-only discounts and deals.
                </dd>
              </div>
              <div class="relative px-10 py-5 border rounded-lg pl-16 bg-gray-100">
                <dt class="text-base font-bold leading-7 text-black">
                  <div class="absolute left-2 top-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                    </svg>

                  </div>
                  Super Savings
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-900">
                  Super Savings
                  Earn Trip Coins and use them to save on travel.
                </dd>
              </div>
              <div class="relative px-10 py-5 border rounded-lg pl-16 bg-gray-100">
                <dt class="text-base font-bold leading-7 text-black">
                  <div class="absolute left-2 top-5 flex h-10 w-10 items-center justify-center text- rounded-lg bg-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>

                  </div>
                  Reliable Support
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-900">
                  Reliable Support
                  We're available whenever you need us, 24/7.
                </dd>
              </div>
              <div class="relative px-10 py-5 border rounded-lg pl-16 bg-gray-100">
                <dt class="text-base font-bold leading-7 text-black">
                  <div class="absolute left-2 top-5 flex h-10 w-10 items-center justify-center text- rounded-lg bg-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>

                  </div>
                  Free Access
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-900">
                  Free Access
                  It doesn't cost anything to join. Membership lasts a lifetime.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
