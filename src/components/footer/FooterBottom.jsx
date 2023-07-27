import footerCategoryData from "../../constants/footerCategoryData";
const FooterBottom = () => {
  return (
    <div className="w-full bg-footerBottom py-8">
      <div className="max-w-5xl mx-auto">
        <div className="w-full grid grid-cols-5 gap-3 place-content-center text-gray-400">
          {footerCategoryData.map((category) => {
            return (
              <div className="group cursor-pointer" key={category.id}>
                <h3 className="w-24 font-semibold text-[12px] group-hover:underline text-[#DDD] leading-3 mb-[2px]">
                  {category.title}
                </h3>
                <p className="w-24 tracking-tight text-[12px] text-[#999] group-hover:underline leading-3 ">
                  {category.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-4 mt-10 mb-[2px] text-[#DDD] text-[12px] font-semibold">
          <h3 className="hover:underline ">Condition of Use & Sale</h3>
          <h3 className="hover:underline ">Privacy Notice</h3>
          <h3 className=" hover:underline ">Interest-Based Ads</h3>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-[12px] text-[#DDD] mb-[2px]">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
