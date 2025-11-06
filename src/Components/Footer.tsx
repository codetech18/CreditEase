import logo from "../assets/Logo.svg";
import facebook from "../assets/facebook.svg";
import google from "../assets/google.svg";
import instagram from "../assets/instagram.svg";
import apple from "../assets/Buttons.svg";

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto px-4 py-4 mt-8 flex justify-around ">
        <div className="credit-ease. w-3xs">
          <div className="logo">
            <img src={logo} alt="Logo" className="w-8 h-8 inline-block" />
            <span className="text-lg font-bold">
              <span className="text-blue-600">Credit</span>Ease
            </span>
          </div>
          <p className="text-gray-400">
            Generate outside the box thinking with the possibility to target the
            low.
          </p>
          <div className="logos"></div>
          <img
            src={facebook}
            alt="Facebook"
            className="w-6 h-6 inline-block mr-4"
          />
          <img
            src={google}
            alt="Google"
            className="w-6 h-6 inline-block mr-4"
          />
          <img src={apple} alt="Google" className="w-6 h-6 inline-block mr-4" />
          <img
            src={instagram}
            alt="Instagram"
            className="w-6 h-6 inline-block"
          />
        </div>
        <div className="Products flex flex-col gap-3">
          <h1 className="font-bold text-lg">Products</h1>
          <p className="text-gray-400">Features</p>
          <p className="text-gray-400">Solutions</p>
          <p className="text-gray-400">Integrations</p>
          <p className="text-gray-400">Enterprise</p>
        </div>
        <div className="Products flex flex-col gap-3">
          <h1 className="font-bold text-lg">Products</h1>
          <p className="text-gray-400">Partners</p>
          <p className="text-gray-400">Community</p>
          <p className="text-gray-400">Developers</p>
          <p className="text-gray-400">App</p>
          <p className="text-gray-400">Blog</p>
        </div>
        <div className="Products flex flex-col gap-3">
          <h1 className="font-bold text-lg">Company</h1>
          <p className="text-gray-400">About us</p>
          <p className="text-gray-400">News</p>
          <p className="text-gray-400">Leadership</p>
        </div>
      </footer>
      <div className="copyright text-center py-4 my-5 text-gray-400 ">
        <p>&copy; 2025 CreditEase. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
