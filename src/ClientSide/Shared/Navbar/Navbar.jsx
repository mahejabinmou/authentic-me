/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const location = useLocation();
	const isActive = (path) => location.pathname === path;

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const [isDropdown2Open, setIsDropdown2Open] = useState(false);

	const toggleDropdown2 = () => {
		setIsDropdown2Open(!isDropdown2Open);
	};

	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const handleMenu = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const menuClose = () => {
		setOpen(false);
	};
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className="">
			{/* Fixed Navbar */}
			<nav
				className={`lg:hidden absolute inset-0 z-50 fix ${
					scrolled ? "hidden" : ""
				}`}
			>
				<div className="navbarLeftRightSpace flex justify-between items-center  font-helvetica font-normal">
					<div className="headerLogo">
						<Link to="/">
							<img
								className="h-full w-full object-cover"
								src="/AuthenticBanner.png"
								alt="brand logo"
							/>
						</Link>
					</div>
					<div>
						<IoMenu
							className="text-[#FE8E38]   md:h-[35px] h-[28px] w-full"
							onClick={handleMenu}
						></IoMenu>
					</div>
					{open && (
						<ul className="px-[32px] py-[12px] absolute top-0 right-0 bg-white w-[100%] z-50 transition-transform duration-1000 ease-in-out">
							<div className="pb-[30px] flex justify-between items-center border-b-2 border-gray-200">
								<div className="headerLogo">
									<Link to="/">
										<img
											className="h-full w-full object-cover"
											src="/AuthenticBanner.png"
											alt="brand logo"
										/>
									</Link>
								</div>
								<div
									className="md:text-[38px] text-[35px] font-title"
									onClick={handleClose}
								>
									<MdClose className="text-[#FE8E38]" />
								</div>
							</div>
							<div className="mobileMenuParent23">
								<Link to="/" onClick={menuClose}>
									<li
										className={`mt-2 px-4 py-2 ${
											isActive("/")
												? "bg-[#FE8E38] text-white font-bold rounded-md"
												: "text-black hover:text-[#FE8E38]"
										}`}
									>
										Home
									</li>
								</Link>
								<Link to="/aboutUs" onClick={menuClose}>
									<li
										className={`mt-2 px-4 py-2 ${
											isActive("/about")
												? "bg-[#FE8E38] text-white font-bold rounded-md"
												: "text-black hover:text-[#FE8E38]"
										}`}
									>
										About Us
									</li>
								</Link>

								<li className="relative">
									<Link to="/service">
										<button
											onClick={toggleDropdown2}
											className={`flex items-center w-full text-left px-4 py-2 mt-2 ${
												isActive("/courses")
													? "bg-[#FE8E38] text-white font-bold rounded-md"
													: "text-black hover:text-[#FE8E38]"
											}`}
										>
											Services
										</button>
									</Link>
								</li>
								<li className="relative">
									<button
										onClick={toggleDropdown}
										className={`flex items-center w-full text-left px-4 py-2 mt-2 ${
											isActive("/portfolio")
												? "bg-[#FE8E38] text-white font-bold rounded-md"
												: "text-black hover:text-[#FE8E38]"
										}`}
									>
										<Link to="/portfolio">Portfolio </Link>
									</button>
								</li>

								{/* <Link to="/review" onClick={menuClose}>
                  <li
                    className={`mt-2 px-4 py-2 ${
                      isActive("/verify")
                        ? "bg-[#FE8E38] text-white font-bold rounded-md"
                        : "text-black hover:text-[#FE8E38]"
                    }`}
                  >
                    review
                  </li>
                </Link> */}

								<Link to="/contact" onClick={menuClose}>
									<li
										className={`mt-2 mb-2 px-4 py-2 ${
											isActive("/contact")
												? "bg-[#FE8E38] text-white font-bold rounded-md"
												: "text-black hover:text-[#FE8E38]"
										}`}
									>
										Contact us
									</li>
								</Link>
							</div>
						</ul>
					)}
				</div>
			</nav>

			{/* large screen nav */}
			<nav className="hidden lg:block w-full lg:z-50 absolute inset-x-0">
				{/* <div className="flex justify-between items-center"> */}
				<div className="largeScreenMenu bg-transparent font-helvetica font-normal flex justify-between place-content-baseline">
					<div className="headerLogo">
						<Link to="/">
							<img
								className="h-full w-full object-cover"
								src="/AuthenticBanner.png"
								alt="brand logo"
							/>
						</Link>
					</div>

					<div>
						<div className="mobileMenuParent">
							<Link to="/" onClick={menuClose}>
								<li
									className={`text-[#FFFFFF] hover:text-[#FE8E38] px-3 py-1 ${
										isActive("/") ? "text-[#FE8E38]" : ""
									}`}
								>
									Home
								</li>
							</Link>

							<Link to="/aboutUs" onClick={menuClose}>
								<li
									className={`text-[#FFFFFF] hover:text-[#FE8E38] px-3 py-1 ${
										isActive("/About") ? "text-[#FE8E38]" : ""
									}`}
								>
									About Us
								</li>
							</Link>

							<Link to="/service" onClick={menuClose}>
								<li
									className={`text-[#FFFFFF] hover:text-[#FE8E38] px-3 py-1 ${
										isActive("/courses") ? "text-[#FE8E38]" : ""
									}`}
								>
									Services
								</li>
							</Link>

							<Link to="/portfolio" onClick={menuClose}>
								<li
									className={`text-[#FFFFFF] hover:text-[#FE8E38] px-3 py-1 ${
										isActive("/whatsnew") ? "text-[#FE8E38]" : ""
									}`}
								>
									Portfolio
								</li>
							</Link>

							{/* <Link to="/review" onClick={menuClose}>
                <li
                  className={`text-[#FFFFFF] hover:text-[#FE8E38] px-3 py-1 ${
                    isActive("/verify") ? "text-[#FE8E38]" : ""
                  }`}
                >
                  Review
                </li>
              </Link> */}

							<Link to="/contact" onClick={menuClose}>
								<li
									className={`text-[#FFFFFF] hover:text-[#FE8E38] px-3 py-1 ${
										isActive("/contact") ? "text-[#FE8E38]" : ""
									}`}
								>
									Contact Us
								</li>
							</Link>
						</div>
					</div>
					{/* <Link>
            <button className="homeLargeAppoinMent bg-[#FE8E38]  text-[#FFFFFF]  ">
              Enroll Now
            </button>
          </Link> */}
				</div>
				{/* </div> */}
			</nav>
		</div>
	);
};

export default Navbar;
