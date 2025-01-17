// import { CiPhone } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <>
      <div className="sectionGap flex flex-col md:flex-row font-Inter">
        {/* Form Section */}
        <div className="w-full md:w-1/2 pe-0 md:pe-10 lg:pe-20">
          <h2 className="text-lg font-semibold mb-4">Send us a message</h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium mb-1">
                Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium mb-1">
                Phone*
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Phone"
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows="4"
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 p-2 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Get a quote
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        {/* <div className="w-full md:w-1/2 p-4 mt-10 md:mt-0">
					<div className="my-auto">
						<h2 className="heroHead mb-4">Contact Details</h2>
						<p className="text-sm text-gray-600 mb-6">
							Lorem ipsum dolor sit amet consectetur. Amet vitae scelerisque
							vulputate orci eu amet turpis amet. habitant amet
						</p>
						<ul className="space-y-4">
							<li className="flex items-center">
								<span className="w-10 h-10 bg-orange-400 text-white flex justify-center items-center rounded-md mr-3">
									<HiOutlineLocationMarker />
								</span>
								Plot-46, Road-7B, Block-H, Banani, Dhaka-1213
							</li>
							<li className="flex items-center">
								<span className="w-10 h-10 bg-orange-400 text-white flex justify-center items-center rounded-md mr-3">
									<CiPhone />
								</span>
								+8801817509399
								<br />
								+8801977509399
							</li>
							<li className="flex items-center">
								<span className="w-10 h-10 bg-orange-400 text-white flex justify-center items-center rounded-md mr-3">
									<MdEmail />
								</span>
								ashraf@authenticzaman.com
								<br />
								akmashraf1985@gmail.com
							</li>
						</ul>
					</div>
				</div> */}

        <div className="w-full md:w-1/2 p-4 mt-10 md:mt-0">
          <div className="my-auto">
            <h2 className="heroHead mb-4">Contact Details</h2>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur. Amet vitae scelerisque
              vulputate orci eu amet turpis amet. habitant amet
            </p>
            <ul className="space-y-4">
              <li className="grid grid-cols-[40px_1fr] gap-5 items-center">
                <span className="w-10 h-10 bg-orange-400 text-white flex justify-center items-center rounded-md">
                  <HiOutlineLocationMarker />
                </span>
                <span>Plot-0, Road-0B, Block-L, Dhanmondi</span>
              </li>
              <li className="grid grid-cols-[40px_1fr] gap-5 items-center">
                <span className="w-10 h-10 bg-orange-400 text-white flex justify-center items-center rounded-md">
                  {/* <CiPhone /> */}
                  <FiPhoneCall />
                </span>
                <span>
                  +8801000000000
                  <br />
                  +8801000000000
                </span>
              </li>
              <li className="grid grid-cols-[40px_1fr] gap-5 items-center">
                <span className="w-10 h-10 bg-orange-400 text-white flex justify-center items-center rounded-md">
                  <MdEmail />
                </span>
                <span>
                  abc@abc.com
                  <br />
                  amabhrrd@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
