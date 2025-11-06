import Googleplay from "../assets/GooglePlay.svg";
import apple from "../assets/Buttons.svg";

const Management = () => {
  return (
    <div className="w-full py-16 flex justify-center items-center bg-[#ededf3]  px-4">
      <div className="w-full max-w-2xl text-center gap-6 flex flex-col items-center">
        <h1 className="text-4xl font-semibold">
          Unlock a world of seamless credit management
        </h1>
        <p className="text-gray-700">
          Download CreditEase now on the App Store or Google Play. Your gateway
          to effortless transactions, secure financial insights, and a
          community-driven approach to mobile credit. Join us in redefining the
          way you manage your credit!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button className="flex items-center justify-center gap-2 bg-black px-6 py-3 rounded hover:bg-gray-800 transition">
            <img src={Googleplay} alt="Google Play" className="w-5 h-5" />
            <span className="text-white">Get on Android</span>
          </button>

          <button className="flex items-center justify-center gap-2  bg-[#dedee5] px-6 py-3 rounded hover:bg-gray-100 transition">
            <img src={apple} alt="Apple App Store" className="w-5 h-5" />
            <span className="text-black">Get on iOS</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Management;
