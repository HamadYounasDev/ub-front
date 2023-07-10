import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';


const Footer = () => {
  return (
    <div>
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
