const Create = () => {
  return (
    <div className="sectionGap">
      {/* <h1 className="globalHead text-center mb-[76px]">About us</h1> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[76px] items-center">
        <div className="h-[424px] ">
          <img
            src="/serviceCreate.png"
            alt=""
            className="h-full w-full object-cover rounded-[8px]"
          />
        </div>
        <div>
          <p className="heroPara text-[#FE8E38] pb-[6px]">design studio</p>
          <h2 className="globalHead pb-[10px]">
            We create stunning home designs
          </h2>
          <p className="heroPara text-[#131212]/[.6] pb-[30px]">
            We are passionate, knowing that people live, work, play and inhabit
            the spaces and places we imagine and envision for our clients. To
            those wanting to make an impact with design.We are passionate,
            knowing that people live, work, play and inhabit the spaces and
            places we imagine and envision for our clients. To those wanting to
            make an impact with design.We are passionate, knowing that people
            live, work, play and inhabit the spaces and places we imagine and
            envision for our clients. To those wanting to make an impact with
            design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Create;
