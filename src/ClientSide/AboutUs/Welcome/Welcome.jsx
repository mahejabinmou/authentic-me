const Welcome = () => {
  return (
    <div className="sectionGap">
      {/* <h1 className="globalHead text-center mb-[76px]">About us</h1> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[76px] items-center">
        <div className="h-[424px] ">
          <img
            src="/welcome.png"
            alt=""
            className="h-full w-full object-cover rounded-[8px]"
          />
        </div>
        <div>
          <p className="heroPara text-[#FE8E38] pb-[6px]">Welcome to</p>
          <h2 className="globalHead pb-[10px]">Authentic Zaman</h2>
          <p className="heroPara text-[#131212]/[.6] pb-[30px]">
            We are passionate, knowing that people live, work, play and inhabit
            the spaces and places we imagine and envision for our clients. To
            those wanting to make an impact with design.
          </p>

          <div className="flex flex-row items-start gap-[12px] mb-[25px]">
            <img
              src="/icons_plan.png"
              alt=""
              className="w-[24px] h-[24px] object-cover"
            />
            <div>
              <h1 className="menuHead pb-[6px]">Qualified Planning</h1>
              <p className="heroPara text-[#131212]/[.6]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start gap-[12px]">
            <img
              src="/profession.png"
              alt=""
              className="w-[24px] h-[24px] object-cover"
            />
            <div>
              <h1 className="menuHead pb-[6px]">Professional Design</h1>
              <p className="heroPara text-[#131212]/[.6]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
