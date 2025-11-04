import Googleplay from "../assets/GooglePlay.svg";
import apple from "../assets/Buttons.svg";
import chart from "../assets/chart.svg";
import data from "../assets/image10.svg";

const Main = () => {
  return (
    <section className="flex justify-center px-4 py-8 md:py-12">
      <div className="container max-w-[1240px] relative">
        {/* Floating chart - left side */}
        <div className="hidden lg:block absolute left-0 top-3/5 -translate-y-1/2 -translate-x-1/4 z-20">
          <img src={chart} alt="" className="w-45 xl:w-52 drop-shadow-xl" />
        </div>

        {/* Floating data - right side */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 z-20">
          <img src={data} alt="" className="w-40 xl:w-48 drop-shadow-xl" />
        </div>

        {/* Main content container */}
        <div className="bg-[#eaeaf1] rounded-2xl relative overflow-hidden">
          <div className="flex flex-col items-center py-16 md:py-24 px-4 md:px-8">
            <h1 className="text-center font-myfont text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-[60px] max-w-4xl mb-4">
              Simplify Your Airtime Transactions with{" "}
              <span className="text-blue-600">Credit</span>Ease
            </h1>

            <p className="text-center font-myfont text-base md:text-lg text-[#9E9E9E] font-medium mb-10">
              Buy, Sell, and Manage Airtime with Ease
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <button className="flex items-center justify-center gap-2 bg-black p-3 rounded hover:bg-gray-800 transition">
                <img src={Googleplay} alt="Google Play" className="w-5 h-5" />
                <span className="text-white">Get on Android</span>
              </button>

              <button className="flex items-center justify-center gap-2 bg-[#dedee5] p-3 rounded hover:bg-gray-100 transition">
                <img src={apple} alt="Apple App Store" className="w-5 h-5" />
                <span className="text-black">Get on iOS</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
