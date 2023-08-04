import { useNavigate } from "react-router-dom";
import yourAccountData from "../../constants/yourAccountData";

const Account = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-4">
      <h1 className=" text-3xl pb-4">Your Account</h1>
      <div className="mx-auto grid grid-cols-3 gap-5">
        {yourAccountData.map((category) => {
          return (
            <div
              onClick={() => navigate(category.id)}
              key={category.id}
              className="h-[100px] flex border  border-amazonBorder rounded-lg  px-[18px] py-[14px]
                             cursor-pointer hover:bg-zinc-100"
            >
              <div>
                <img
                  src={category.image}
                  alt={`${category.id}-image`}
                  className="w-12"
                />
              </div>
              <div className="pl-3">
                <h2 className="text-base leading-8 font-medium">
                  {category.title}
                </h2>
                <p className="text-sm leading-5">{category.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Account;
