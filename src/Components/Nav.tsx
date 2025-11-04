import logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 lg:px-24">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
        {/* Logo - centered on mobile, left on desktop */}
        <div className="flex items-center gap-2 order-2 md:order-1">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <p className="text-lg font-bold">
            <span className="text-blue-600">Credit</span>Ease
          </p>
        </div>

        {/* Nav Links - hidden on mobile */}
        <div className="hidden lg:flex items-center gap-8 order-1 md:order-2">
          <a
            href="#home"
            className="text-[15px] font-semibold hover:text-blue-600 transition cursor-pointer"
          >
            Home
          </a>
          <a
            href="#faq"
            className="text-[15px] font-semibold hover:text-blue-600 transition cursor-pointer"
          >
            FAQ
          </a>
          <a
            href="#stories"
            className="text-[15px] font-semibold hover:text-blue-600 transition cursor-pointer"
          >
            Stories
          </a>
          <a
            href="#resources"
            className="text-[15px] font-semibold hover:text-blue-600 transition cursor-pointer"
          >
            Resources
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 order-3">
          <button className="hidden sm:block py-2 px-6 font-semibold hover:text-blue-600 transition">
            Sign Up
          </button>
          <button className="py-2 px-6 font-semibold bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
