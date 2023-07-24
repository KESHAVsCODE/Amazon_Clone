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
    </div>
  );
};

export default FooterBottom;
