import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';


const Footer = () => {
  return (
    <div>
<<<<<<< HEAD:src/components/Footer.jsx
      <div className="my-4xl relative" style={{ height: "500px" }}>
        <div className="relative" style={{ height: "100%" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://a6e8z9v6.stackpathcdn.com/traveltour/homepages/golf/wp-content/uploads/sites/5/2021/07/page-title-bg.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              filter: "brightness(50%)",
              zIndex: -1,
              height: "100%",
            }}
          />
          <div className="py-40 max-w-840 mx-auto">
            <div className="mx-auto">
              <div className="pb-50 text-center">
                <span className="text-white font-medium mb-15">Subscribe to our newsletter today!</span>
                <div className="mb-15">
                  <h3 className="text-4xl font-bold font-serif text-white">Join our subscribers list to get the latest news, updates and <br /> special offers directly in your inbox!</h3>
                </div>
              </div>
            </div>
            <div className="w-60 mx-auto flex justify-center">
              <div className="py-10">
                <form className="flex items-center">
                  <input className="bg-gray-100 text-gray-800 p-2 rounded-l-full flex-grow" placeholder="Your Email Address" type="email" name="ne" size="30" required />
                  <input className="bg-blue-500 text-white px-4 py-2 rounded-r-full cursor-pointer hover:bg-blue-600" type="submit" value="Subscribe" />
                </form>
              </div>
=======
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Flowbite
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
>>>>>>> 6a8591d0b3c74da6ad0a4f7a1c170ff00948d6b8:src/components/Misc/Footer.jsx
            </div>
          </div>
        </div>
      </div>







      <div class="bg-blue-500 text-white py-16">
        <div class="font-sans text-base leading-8 text-white box-border border-0 outline-none align-baseline mx-auto max-w-8xl border-gray-700 overflow-hidden px-18 sm:px-30">
          <div class="font-sans text-base leading-8 text-white box-border border-0 outline-none align-baseline m-0 p-0 float-left w-1/4 pl-20 pr-10 border-gray-700">
            <div id="text-1" class="widget widget_text traveltour-widget">
              <div class="pb-35">
                <div class="">
                  <h3 class="font-serif text-white text-3xl font-bold">Travel Tour<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span></h3>
                </div>
              </div>
              12 Main tPt. London
              <div class="gdlr-core-space-shortcode mt-15"></div>
              +44 3656 4567
              <div class="gdlr-core-space-shortcode mt-15"></div>
              contact@traveltourtheme.com
              <div className="mt-35"></div>
              <div className="flex gap-1 bg-transparent text-black" id="gdlr-core-social-network-1">
                <a href="#url" target="_blank" className="text-white border border-white border-2 mr-2 w-12 h-12 flex items-center justify-center rounded-full" title="facebook" rel="noopener">
                  <BsFacebook className="h-6 w-6" />
                </a>
                <a href="#url" target="_blank" className="text-white border border-white border-2 mr-2 w-12 h-12 flex items-center justify-center rounded-full" title="twitter" rel="noopener">
                  <BsTwitter className="h-6 w-6" />
                </a>
                <a href="#" target="_blank" className="text-white border border-white border-2 mr-2 w-12 h-12 flex items-center justify-center rounded-full" title="instagram" rel="noopener">
                  <BsInstagram className="h-6 w-6" />
                </a>
              </div>

            </div>
          </div>
          <div class="font-sans text-base leading-8 text-white box-border border-0 outline-none align-baseline bg-transparent m-0 p-0 float-left w-1/4 pl-20 pr-10 border-gray-700">
            <h3 class="">
              <span class="text-2xl font-sans text-white font-bold">About Us</span>
            </h3>
            <div class="menu-about-us-container">
              <ul id="menu-about-us" class="gdlr-core-custom-menu-widget gdlr-core-menu-style-plain">
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5361">
                  <a href="https://demo.goodlayers.com/traveltour/homepages/golf/about-us-4/" class="text-white">Our Story</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5363">
                  <a href="https://demo.goodlayers.com/traveltour/homepages/golf/blog-3-columns/" class="text-white">Travel Blog &amp; Tips</a>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5364">
                  <a href="#" class="text-white">Working With Us</a>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5365">
                  <a href="#" class="text-white">Be Our Partner</a>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5530">
                  <a href="#" class="text-white">Packages</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="font-sans text-base leading-8 text-white box-border border-0 outline-none align-baseline bg-transparent m-0 p-0 float-left w-1/4 pl-20 pr-10 border-gray-700">
            <h3 class="">
              <span class="text-2xl font-sans text-white font-bold">Support</span>
            </h3>
            <div class="flex flex-column gap-1">
              <ul id="menu-about-us-1" class="gdlr-core-custom-menu-widget gdlr-core-menu-style-plain">
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5361">
                  <a href="https://demo.goodlayers.com/traveltour/homepages/golf/about-us-4/" class="text-white">Our Story</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5363">
                  <a href="https://demo.goodlayers.com/traveltour/homepages/golf/blog-3-columns/" class="text-white">Travel Blog &amp; Tips</a>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5364">
                  <a href="#" class="text-white">Working With Us</a>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5365">
                  <a href="#" class="text-white">Be Our Partner</a>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5530">
                  <a href="#" class="text-white">Packages</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="font-sans text-base leading-7 text-white box-border border-0 outline-none align-baseline bg-transparent m-0 p-0 float-left w-1/4 pl-20 pr-10 border-gray-700">
            <h3 class="">
              <span class="text-2xl font-sans text-white font-bold">Pay Safely With Us</span>
            </h3>
            <div class="textwidget">
              <p>The payment is encrypted and transmitted securely with an SSL protocol.</p>
              <img decoding="async" loading="lazy" class="alignnone size-full wp-image-5360" src="https://demo.goodlayers.com/traveltour/main4/wp-content/uploads/2019/04/creditcard-logo.png" alt="" width="254" height="47" />
            </div>
          </div>
        </div>
      </div>


      <div class="font-sans py-7 flex align-center justify-center text-base leading-8 box-border border-0 outline-none align-baseline bg-transparent m-0 p-0 border-gray-300 bg-gray-900 bg-blue-900">
        <div class="traveltour-copyright-wrapper">
          <div class="traveltour-container">
            <div class="traveltour-item-pdlr">
              <span class="text-white">&copy;2022 Travel Tour by GoodLayers. All Rights Reserved |</span>
              <a href="#" class="text-white ml-2">Privacy Policy</a>
              <a href="#" class="text-yellow-700 ml-2">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Footer;
