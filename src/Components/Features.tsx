import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import p2p from "../assets/p2p.png";
import verf from "../assets/userverification.png";
import analysis from "../assets/analysis.png";

const Features = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center gap-24 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Key Features
        </h1>
        {/* Body  */}
        <div className="airtime-exchange flex justify-between items-center space-x-24 w-full max-w-6xl mx-auto">
          <div className="p2p-text flex-1">
            <h2 className="text-2xl">P2P Airtime Exchange</h2>
            <p className="mt-4 text-gray-400 text-base">
              Our platform enables users to seamlessly buy and sell airtime
              credits directly with each other, fostering a community-driven
              marketplace that offers competitive rates and convenience.
            </p>
            <ul className="text-gray-400 mt-6 space-y-2">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0"
                />
                <p>Community-driven approach to credit management.</p>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0"
                />
                <p>Effortless transactions.</p>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0"
                />
                <p>Cost saving.</p>
              </li>
            </ul>
          </div>
          <div className="airtime-image flex-1">
            <img
              src={p2p}
              alt="Airtime Exchange"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
        <div className="airtime-exchange flex justify-between items-center space-x-24 w-full max-w-6xl mx-auto">
          <div className="airtime-image flex-1">
            <img
              src={verf}
              alt="Airtime Exchange"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="p2p-text flex-1">
            <h2 className="text-2xl">Multi-Layered User Verification</h2>
            <p className="mt-4 text-gray-400 text-base">
              Multi-Layered User Verification: CreditEase prioritizes user
              security through a robust verification process.
            </p>
            <ul className="text-gray-400 mt-6 space-y-2">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0"
                />
                <p>One time verification codes.</p>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0"
                />
                <p>Photo Id upload.</p>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0"
                />
                <p>Facial recognition.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="airtime-exchange flex justify-between items-center space-x-24 w-full max-w-6xl mx-auto">
          <div className="p2p-text flex-1">
            <h2 className="text-2xl">Transaction Tracking and Analysis</h2>
            <p className="mt-4 text-gray-400 text-base">
              Users can track their monthly airtime purchases and analyze their
              data usage patterns.
            </p>
            <ul className="text-gray-400 mt-6 space-y-2">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0"
                />
                <p>Community-driven approach to credit management.</p>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0"
                />
                <p>Effortless transactions.</p>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 flex-shrink-0"
                />
                <p>Cost saving.</p>
              </li>
            </ul>
          </div>
          <div className="airtime-image flex-1">
            <img
              src={analysis}
              alt="Airtime Exchange"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
