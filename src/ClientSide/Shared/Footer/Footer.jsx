// eslint-disable-next-line no-unused-vars
import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      {/* foooter content */}
      <div className=" relative md:hidden block  ">
        <div className="absolute inset-0 sectionTop  text-white/[.8] ">
          <div className="bg-[#131212] sectionPadding">
            <div className=" pb-[50px] grid grid-cols-1 px-0  gap-y-[50px]">
              <div className="">
                <div className="footerLogoparent mb-[25px]">
                  {/* <img className="h-full w-full object-cover" src="https://i.ibb.co.com/C5kSmh8/layer-1-1-66f24f9bd9b5b.webp" alt="brand logo" /> */}
                  <img
                    className="h-full w-full object-cover"
                    src="/AuthenticBanner.png"
                    alt="brand logo"
                  />
                </div>

                <div className="flex  flex-row mt-[20px] gap-x-[10px]">
                  <a
                    href="https://www.facebook.com/profile.php?id=61557983775555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#FE8E38] text-[#FE8E38] px-[8px] rounded-full py-[8px]"
                  >
                    <SlSocialFacebook size={28} className="footerSocailIcon" />
                  </a>
                  <a
                    href="https://www.instagram.com/at_eduden/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#FE8E38] text-[#FE8E38] px-[8px] rounded-full py-[8px]"
                  >
                    <FaInstagram size={28} className="footerSocailIcon" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/edu-den/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#FE8E38] text-[#FE8E38] px-[8px] rounded-full py-[8px]"
                  >
                    <CiTwitter size={28} className="footerSocailIcon" />
                  </a>
                </div>
              </div>

              <div className="">
                <h2 className="footerMenuTextTitle">Quick Link</h2>
                <Link to="/">
                  <p className="footerMenuText  flex flex-row items-center gap-x-[10px] pb-1">
                    About
                  </p>
                </Link>
                <Link to="/about">
                  <p className="footerMenuText  flex flex-row items-center gap-x-[10px] pb-1">
                    Service
                  </p>
                </Link>
                <Link to="/courses">
                  <p className="footerMenuText  flex flex-row items-center gap-x-[10px] pb-1">
                    Portfolio
                  </p>
                </Link>
                <Link to="/contactus">
                  <p className="footerMenuText  flex flex-row items-center gap-x-[10px] pb-1">
                    Review
                  </p>
                </Link>
                <Link to="/contactus">
                  <p className="footerMenuText  flex flex-row items-center gap-x-[10px] pb-1">
                    Contact us
                  </p>
                </Link>
              </div>

              <div className="text-white">
                <h2 className="footerMenuTextTitle">Our Services</h2>

                <p className="footerMenuText  flex flex-row items-center gap-x-[10px] pb-2">
                  Interior Design YouTube
                </p>

                <p className="footerMenuText flex flex-row items-center gap-x-[10px] pb-2">
                  Shower Includser
                </p>
                <p className="footerMenuText flex flex-row items-center gap-x-[10px] pb-2">
                  Interior Design
                </p>
                <p className="footerMenuText flex flex-row items-center gap-x-[10px] pb-2">
                  Assembly Work
                </p>
              </div>

              <div className="text-white">
                <h2 className="footerMenuTextTitle">Contact Us</h2>
                <div className=" md:pb-[10px] lg:pb-[10px] xl:pb-[10px] 2xl:pb-[10px] pb-2">
                  <p
                    className=" footerMenuText
     md:pb-[2px] lg:pb-[2px] xl:pb-[2px] 2xl:pb-[2px] "
                  >
                    Plot-0, Road-0B, Block-L, Dhanmondi
                  </p>
                  <p
                    className=" footerMenuText
    "
                  >
                    Dhaka-1213
                  </p>
                </div>

                <div className=" pb-2 ">
                  <p
                    className=" footerMenuText
     md:pb-[2px] lg:pb-[2px] xl:pb-[2px] 2xl:pb-[2px]"
                  >
                    +8801000000000
                  </p>
                  <p
                    className=" footerMenuText
    "
                  >
                    +8801000000000
                  </p>
                </div>
                <div className=" md:pb-[10px] lg:pb-[10px] xl:pb-[10px] 2xl:pb-[10px] pb-2">
                  <p
                    className=" footerMenuText
     md:pb-[2px] lg:pb-[2px] xl:pb-[2px] 2xl:pb-[2px] "
                  >
                    Location:
                  </p>
                  <p
                    className=" footerMenuText
    "
                  >
                    abc@abc.com
                  </p>
                  <p
                    className=" footerMenuText
    "
                  >
                    amabhrrd@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <hr className="border-1 border-[#FFFFFF]" />

            <div className="py-[25px] px-[30px] 2xl:py-[30px]  md:px-[50px]  lg:px-[60px] xl:px-[100px] text-center">
              <div
                className="flex justify-center items-center space-x-[40px]
          "
              >
                <p
                  className="copyWritePara
 "
                >
                  Copyright © 2024 Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* large */}
      <div className="relative hidden md:block  ">
        <div className="absolute inset-0   sectionTop  text-white/[.8]">
          <div className=" sectionPadding  bg-[#131212]  grid grid-cols-2 lg:grid-cols-4 justify-center  items-start gap-x-[100px] ">
            <div className="md:mb-[50px]">
              <div className="footerLogoparent mb-[25px]">
                {/* <img className="h-full w-full object-cover" src="https://i.ibb.co.com/C5kSmh8/layer-1-1-66f24f9bd9b5b.webp" alt="brand logo" /> */}
                <img
                  className="h-full w-full object-cover"
                  src="/AuthenticBanner.png"
                  alt="brand logo"
                />
              </div>
              <div className="">
                <p className="footerHeaderLogoText ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <div className="flex flex-row mt-[20px] gap-x-[10px]">
                  <a
                    href="https://www.facebook.com/profile.php?id=61557983775555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#FE8E38] text-[#FE8E38] px-[8px] rounded-full py-[8px]"
                  >
                    <SlSocialFacebook size={30} className="footerSocailIcon" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/edu-den/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#FE8E38] text-[#FE8E38] px-[8px] rounded-full py-[8px]"
                  >
                    <CiTwitter size={30} className="footerSocailIcon" />
                  </a>
                  <a
                    href="https://www.instagram.com/at_eduden/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#FE8E38] text-[#FE8E38] px-[8px] rounded-full py-[8px]"
                  >
                    <FaInstagram size={30} className="footerSocailIcon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:justify-self-center">
              <h2 className="footerMenuTextTitle">Quick links</h2>
              <Link to="/">
                <p className="footerMenuText  flex flex-row items-center gap-x-[10px]">
                  About
                </p>
              </Link>
              <Link to="/about">
                <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                  Service
                </p>
              </Link>
              <Link to="/courses">
                <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                  Portfolio
                </p>
              </Link>
              <Link to="/contactus">
                <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                  Review
                </p>
              </Link>
              <Link to="/contactus">
                <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                  Contact us
                </p>
              </Link>
            </div>

            <div className="text-white">
              <h2 className="footerMenuTextTitle">Our Services</h2>

              <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                Interior Design
              </p>

              <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                Shower Includser
              </p>
              <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                Interior Design
              </p>
              <p className="footerMenuText flex flex-row items-center gap-x-[10px]">
                Assembly Work
              </p>
            </div>

            <div className="text-white">
              <h2 className="footerMenuTextTitle">Contact Us</h2>
              <div className="md:pb-[10px]">
                <p className="text-[14px] leading-[21px]   footerMenuText md:pb-[2px]">
                  Plot-0, Road-0B, Block-L, Dhanmondi
                </p>
              </div>

              <div className="">
                <p className="footerMenuText md:pb-[2px]">+8801000000000 </p>
                <p className="footerMenuText">+8801000000000</p>
              </div>

              <div className="md:pb-[10px]">
                <p className="text-[14px] leading-[21px] footerMenuText    md:pb-[2px]">
                  abc@abc.com
                </p>
                <p className="text-[14px] leading-[21px]   footerMenuText">
                  amabhrrd@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* <hr className="absolute inset-x-0  w-[80%] mx-auto border border-[#FFFFFF]/[.2]" /> */}
          <hr className="absolute inset-x-0 border-1 border-[#FFFFFF]/[.2]" />

          <div className="pt-[25px] bg-[#131212]   px-[30px] 2xl:pt-[30px]  md:px-[50px]  lg:px-[60px] xl:px-[100px] text-center">
            <div className="flex justify-center items-center space-x-[40px]">
              <p className="copyWritePara mb-5 ">
                Copyright © 2024 Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
