import Googleplay from "../assets/GooglePlay.svg";
import apple from "../assets/Buttons.svg";
import chart from "../assets/chart.svg";
import data from "../assets/image10.svg";

const Main = () => {
  return (
    <>
      <section className="flex justify-center">
        <div className="container max-w-[1240px] h-[976px] shrink-0 bg-[#eaeaf1] flex justify-center rounded-2xl">
          <div className="main-text inline-flex flex-col mt-[20%] w-3xl">
            <h1 className="text-center font-myfont text-5xl font-semibold leading-[60px] px-32">
              Simplify Your Airtime Transactions with{" "}
              <span className="text-blue-600">Credit</span>Ease
            </h1>
            <p className="text-center font-myfont text-lg text-[#9E9E9E] font-medium">
              Buy, Sell, and Manage Airtime with Ease
            </p>
            <div className="btn flex justify-center gap-3 mt-10">
              <button className="flex items-center gap-1 bg-black p-3 rounded">
                <img src={Googleplay} alt="" />
                <p className="text-white">Get on Andriod</p>
              </button>
              <button className="flex border border-black p-3 rounded">
                <img src={apple} alt="" />
                <p className="text-black">Get on Andriod</p>
              </button>
            </div>
            <div className="chart absolute top-2/3 left-3">
              <img src={chart} alt="" />
            </div>
            <div className="chart absolute top-3/4 right-3 ">
              <img src={data} alt="" className="w-lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
