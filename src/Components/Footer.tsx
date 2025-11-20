import logo from "../assets/Logo.svg";
import facebook from "../assets/facebook.svg";
import google from "../assets/google.svg";
import instagram from "../assets/instagram.svg";
import apple from "../assets/Buttons.svg";

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="logo mb-4">
              <img src={logo} alt="Logo" className="w-8 h-8 inline-block" />
              <span className="text-lg font-bold ml-2">
                <span className="text-blue-600">Credit</span>Ease
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-xs">
              Generate outside the box thinking with the possibility to target
              the low.
            </p>
            <div className="flex items-center gap-4">
              <img
                src={facebook}
                alt="Facebook"
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src={google}
                alt="Google"
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src={apple}
                alt="Apple"
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src={instagram}
                alt="Instagram"
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>

          {/* Products Section */}
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-lg mb-1">Products</h1>
            <p className="text-gray-400 text-sm cursor-pointer hover:text-gray-300 transition-colors">
              Features
            </p>
            <p className="text-gray-400 text-sm cursor-pointer hover:text-gray-300 transition-colors">
              Solutions
            </p>
            <p className="text-gray-400 text-sm cursor-pointer hover:text-gray-300 transition-colors">
              Integrations
            </p>
            <p className="text-gray-400 text-sm cursor-pointer hover:text-gray-300 transition-colors">
              Enterprise
            </p>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-lg mb-1">Resources</h1>
            <p className="text-gray-400 text-sm cursor-pointer hover:text-gray-300 transition-colors">
              Partners
            </p>
            <p className="text-gray-400 text-sm cursor-pointer hover:text-gray-300 transition-colors">
              Community
            </p>
            <p className="text-gray-400 text-sm cursor-pointer hover:text-gray-300 transition-colors">
              Developers
            </p>
            <p className="text-gray-400 text-sm cursor-pointer hover:text-gray-300 transition-colors">
              App
            </p>
            <p className="text-gray-400 text-sm cursor-pointer hover:text-gray-300 transition-colors">
              Blog
            </p>
          </div>

          {/* Company Section */}
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-lg mb-1">Company</h1>
            <p className="text-gray-400 text-sm cursor-pointer hover:text-gray-300 transition-colors">
              About us
            </p>
            <p className="text-gray-400 text-sm cursor-pointer hover:text-gray-300 transition-colors">
              News
            </p>
            <p className="text-gray-400 text-sm cursor-pointer hover:text-gray-300 transition-colors">
              Leadership
            </p>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center py-6 text-gray-400 text-sm">
          &copy; 2025 CreditEase. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
