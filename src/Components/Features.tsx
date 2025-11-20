import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import p2p from "../assets/p2p.png";
import verf from "../assets/userverification.png";
import analysis from "../assets/analysis.png";

const Features = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-12 md:gap-16 lg:gap-24 py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Key Features
        </h1>

        {/* Feature 1: P2P Airtime Exchange */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 xl:gap-24 w-full max-w-6xl mx-auto">
          <div className="p2p-text flex-1 order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl font-semibold">
              P2P Airtime Exchange
            </h2>
            <p className="mt-3 md:mt-4 text-gray-400 text-sm sm:text-base">
              Our platform enables users to seamlessly buy and sell airtime
              credits directly with each other, fostering a community-driven
              marketplace that offers competitive rates and convenience.
            </p>
            <ul className="text-gray-400 mt-4 md:mt-6 space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 md:gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base">
                  Community-driven approach to credit management.
                </p>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base">Effortless transactions.</p>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base">Cost saving.</p>
              </li>
            </ul>
          </div>
          <div className="airtime-image flex-1 order-1 lg:order-2">
            <img
              src={p2p}
              alt="Airtime Exchange"
              className="w-full max-w-sm md:max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Feature 2: Multi-Layered User Verification */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 xl:gap-24 w-full max-w-6xl mx-auto">
          <div className="airtime-image flex-1 order-1">
            <img
              src={verf}
              alt="User Verification"
              className="w-full max-w-sm md:max-w-md mx-auto"
            />
          </div>
          <div className="p2p-text flex-1 order-2">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Multi-Layered User Verification
            </h2>
            <p className="mt-3 md:mt-4 text-gray-400 text-sm sm:text-base">
              CreditEase prioritizes user security through a robust verification
              process.
            </p>
            <ul className="text-gray-400 mt-4 md:mt-6 space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 md:gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base">
                  One time verification codes.
                </p>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base">Photo ID upload.</p>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base">Facial recognition.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 3: Transaction Tracking and Analysis */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 xl:gap-24 w-full max-w-6xl mx-auto">
          <div className="p2p-text flex-1 order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Transaction Tracking and Analysis
            </h2>
            <p className="mt-3 md:mt-4 text-gray-400 text-sm sm:text-base">
              Users can track their monthly airtime purchases and analyze their
              data usage patterns.
            </p>
            <ul className="text-gray-400 mt-4 md:mt-6 space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 md:gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base">
                  Detailed transaction history.
                </p>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base">Usage pattern insights.</p>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base">
                  Monthly spending reports.
                </p>
              </li>
            </ul>
          </div>
          <div className="airtime-image flex-1 order-1 lg:order-2">
            <img
              src={analysis}
              alt="Transaction Analysis"
              className="w-full max-w-sm md:max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
