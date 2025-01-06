import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-base-100">
      {/* Top Row */}
      <div className="bg-blue-600 h-[56px] flex items-center justify-between px-20 text-white">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <CiLocationOn />
            <span>House 14, Block# B, Banasree, Dhaka-1219</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdOutlineEmail />
            <span>info@microdeft.com</span>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1736143386/xbfcskaccoyidfrtwmrx.png"
            alt="Social Icons"
            className="h-6"
          />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between w-[80%] mx-auto py-5">
        {/* Logo */}
        <div>
          <img
            src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1736143386/qwwmsh1pyaaizuqixwgx.png"
            
            className="h-12"
          />
          
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1736143386/hehsyatfmzj05mwg66au.png"
            
            className="h-12"
          />
          
        </div>

        {/* Navigation Links */}
        <div>
          <div className="flex space-x-8 text-gray-700 font-semibold">
            <h6>Home</h6>
            <h6>About</h6>
            <h6>Products</h6>
            <h6>Services</h6>
            <h6>Projects</h6>
            <h6>Blog</h6>
            <h6>Career</h6>
            <h6>Contact Us</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
