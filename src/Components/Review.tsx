import avatar from "../assets/avatar.png";

const Review = () => {
  return (
    <div className="review-section py-12  ">
      <div className="container mx-auto px-4 ">
        <div className="flex  items-center ">
          {/* Review 1 */}
          <div className="review-card p-4 bg-[#e3e5f680] rounded-sm shadow-md">
            <p className="mb-4 text-center text-slate-300">
              "CreditEase has transformed the way I manage my airtime credits.
              The P2P exchange is seamless and secure!"
            </p>
            <div className="">
              <div className="flex justify-center">
                <img src={avatar} alt="" />
              </div>

              <h3 className=" text-center text-slate-400">- John D.</h3>
            </div>
          </div>
          {/* Review 2 */}
          <div className="review-card p-12 bg-[#E9EBFC80] rounded-sm shadow-md">
            <p className="mb-4 text-center">
              "The user verification process gave me confidence in using the
              platform. Highly recommended!"
            </p>
            <div className="">
              <div className="flex justify-center">
                <img src={avatar} alt="" />
              </div>

              <h3 className=" text-center">- John D.</h3>
            </div>
          </div>
          {/* Review 3 */}
          <div className="review-card p-6 bg-[#e3e5f680] rounded-sm shadow-md">
            <p className="mb-4 text-center text-slate-300">
              "I love how I can track my airtime purchases and analyze my usage
              patterns. CreditEase is a game-changer!"
            </p>
            <div className="">
              <div className="flex justify-center">
                <img src={avatar} alt="" />
              </div>

              <h3 className=" text-center text-slate-400">- John D.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
