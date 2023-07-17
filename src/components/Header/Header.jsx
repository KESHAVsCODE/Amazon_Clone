import { logo } from "../../assets/images";
const Header = () => {
  return (
    <div className=" flex bg header-container">
      <section>
        <div>
          <span className="">
            <img src={logo} alt="amazon-logo" />
          </span>
          <span>.in</span>
        </div>
      </section>

      <div>
        <p className="font-medium">Amazon</p>
      </div>
    </div>
  );
};

export default Header;
