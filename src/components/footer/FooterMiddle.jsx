import { logo, indiaFlag } from "../../assets/images";

const FooterMiddle = () => {
  return (
    <div className="w-full bg-amazon_light text-white">
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="w-full grid grid-cols-4 place-content-center">
            <div>
              <h3 className="text-white text-base font-bold mb-3">
                Get to Know Us
              </h3>
              <ul className="flex flex-col gap-1">
                <li className="footerLink">About Us</li>
                <li className="footerLink">Careers</li>
                <li className="footerLink">Press Releases</li>
                <li className="footerLink">Amazon Science</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-base font-bold mb-3">
                Connect with Us
              </h3>
              <ul className="flex flex-col gap-1">
                <li className="footerLink">Facebook</li>
                <li className="footerLink">Twitter</li>
                <li className="footerLink">Instagram</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-base font-bold mb-3">
                Make Money with Us
              </h3>
              <ul className="flex flex-col gap-1">
                <li className="footerLink">Sell on Amazon</li>
                <li className="footerLink">Sell under Amazon Accelerator</li>
                <li className="footerLink">Protect and Build Your Brand</li>
                <li className="footerLink">Amazon Global Selling</li>
                <li className="footerLink">Become an Affiliate</li>
                <li className="footerLink">Fulfillment by Amazon</li>
                <li className="footerLink">Advertise Your Products</li>
                <li className="footerLink">Amazon Pay on Merchants</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-base font-bold mb-3">
                Let Us Help You
              </h3>
              <ul className="flex flex-col gap-1">
                <li className="footerLink">Covid-19 and Amazon</li>
                <li className="footerLink">Your Account</li>
                <li className="footerLink">Returns Centre</li>
                <li className="footerLink">100% Purchase Protection</li>
                <li className="footerLink">Amazon App Download</li>
                <li className="footerLink">Help</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-6 items-center justify-center py-6">
        <div className="footerItemHover">
          <img className="w-14 pt-1" src={logo} alt="logo" />
        </div>
        <div className="flex gap">
          <p className="footerItemHover">English</p>
        </div>
        <div className="footerItemHover">
          <img src={indiaFlag} alt="indian-flag-image" className="w-6" />
          <p>India</p>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
