import logo from "../assets/Logo.svg";

const MyComponent = () => {
  return (
    <>
      <div className="navbar flex w-full py-[16px] px-[100px] justify-between items-center">
        <div className="nav-list flex align-middle gap-8">
          <p className="text-[15px] font-semibold cursor-pointer">Home</p>
          <p className="text-[15px] font-semibold cursor-pointer">FAQ</p>
          <p className="text-[15px] font-semibold cursor-pointer">Stories</p>
          <p className="text-[15px] font-semibold cursor-pointer">Resources</p>
        </div>
        <div className="nav-logo flex items-center ">
          <img src={logo} alt="Logo" />
          <p className="text-lg  font-bold">
            <span className="text-blue-600">Credit</span>Ease
          </p>
        </div>
        <div className="btn flex items-center">
          <div className="signup flex py-[10px] px-[30px] items-center gap-2.5  align-middle ">
            signUp
          </div>
          <div className="signIn flex py-[10px] px-[30px] items-center gap-2.5 border-solid border-2 align-middle border-blue-600 bg-blue-600 rounded">
            signIn
          </div>
        </div>
      </div>
    </>
  );
};

export default MyComponent;
