import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div className="sectionGap">
      {/* <h1 className="globalHead text-center mb-[76px]">About us</h1> */}
      <div className="flex flex-col items-center justify-center mb-[76px] overflow-hidden">
        <h2 className="globalHead text-center">About us</h2>
        <div className="flex items-center mt-[12px]">
          <div className="w-[280px] h-[1px] bg-gray-300"></div>
          <div className="w-[15px] h-[15px] bg-[#FE8E38] rounded-full mx-2"></div>
          <div className="w-[280px] h-[1px] bg-gray-300"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[76px] items-center">
        <div className="h-[424px] ">
          <img
            src="/aboutImg.png"
            alt=""
            className="h-full w-full object-cover rounded-[8px]"
          />
        </div>
        <div>
          <p className="heroPara text-[#131212]/[.6]">
            At Authentic Zaman we believe in offering an exceptional experience
            for every customer. Explore our extensive range of premium products
            and services that are designed to meet your unique needs. looking
            for expert advice, or ready to make your next purchase, we are here
            to guide you every step of the way.Our collection is carefully
            curated to ensure only the highest quality, providing you with
            options that will exceed your expectations. From the moment you step
            into our world, you&apos;ll discover why we’re known for more than
            just our products—we’re about creating experiences that matter.
            Start your journey with us today and see how we go above and beyond
            to deliver the best for you. Let us show you why [Your Website Name]
            is where your search for excellence begins.
          </p>
          <p className="heroPara text-[#131212]/[.6]">
            Start your journey with us today and see how we go above and beyond
            to deliver the best for you. Let us show you why [Your Website Name]
            is where your search for excellence begins.
          </p>
          <div className="globalBtnDiv mt-[30px]">
            <button className="globalBtn">
              More details
              <MdArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
