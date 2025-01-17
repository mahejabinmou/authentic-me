import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import AboutUs from "./ClientSide/AboutUs/AboutUs";
import Contact from "./ClientSide/ContactUs/contact";
import Home from "./ClientSide/Home/Home";
import Portfolio from "./ClientSide/Portfolio/Portfolio";
import Portfoliodetail from "./ClientSide/portfolioDetail/portfoliodetail";
import Service from "./ClientSide/Service/Service";
import Footer from "./ClientSide/Shared/Footer/Footer";
import Navbar from "./ClientSide/Shared/Navbar/Navbar";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>,
	},
	{
		path: "/navbar",
		element: <Navbar></Navbar>,
	},
	{
		path: "/aboutUs",
		element: <AboutUs></AboutUs>,
	},
	{
		path: "/service",
		element: <Service></Service>,
	},
	{
		path: "/portfolio",
		element: <Portfolio></Portfolio>,
	},
	{
		path: "/portfolio-detail",
		element: <Portfoliodetail></Portfoliodetail>,
	},
	{
		path: "/contact",
		element: <Contact></Contact>,
	},
	{
		path: "/footer",
		element: <Footer></Footer>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
