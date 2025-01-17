import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Marcury = () => {
  const logos = [
    { id: 1, name: "MNR", image: "/m1.png" },
    { id: 2, name: "MGH", image: "/m2.png" },
    { id: 3, name: "ArchsDoers", image: "/m3.png" },
    { id: 4, name: "Shanta", image: "/m4.png" },
    { id: 5, name: "Six", image: "/m5.png" },
    { id: 6, name: "Unico's", image: "/m6.png" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div
      className="mt-[60px]  md:mt-[80px] 
      lg:mt-[80px]
     xl:mt-[100px]
      2xl:mt-[100px] overflow-hidden font-InstrumentSans"
    >
      {/* Title and Description */}

      {/* Sliding Logos */}
      <div className="relative border  border-t-[#000000]/[.20]  border-b-[#000000]/[.20]  bg-[#F1F1F4]/[.50]">
        <Slider {...settings}>
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="px-[10px]" // Adds space between slides
            >
              <div className=" flex justify-center items-center">
                <div className="flex justify-center w-[180px] h-[100px] items-center  py-[10px] ">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="object-contain  w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Marcury;
