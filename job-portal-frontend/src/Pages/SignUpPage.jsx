import { IconArrowLeft, IconHexagonLetterH } from "@tabler/icons-react";
import SignUp from "../Components/SignUpLogIn/SignUp";
import LogIn from "../Components/SignUpLogIn/LogIn";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

const SignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className=" bg-mine-shaft-950 font-[poppins] min-h-screen overflow-hidden relative">
      <Button
        leftSection={<IconArrowLeft size={20} />}
        className="!absolute left-5 z-10"
        my="md"
        color="orient.4"
        variant="light"
        onClick={() => navigate("/")}
      >
        Home
      </Button>
      <div
        className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 transition-all ease-in-out duration-1000 ${
          location.pathname == "/signup" ? "-translate-x-1/2" : "translate-x-0"
        }`}
      >
        <LogIn />
        {/* Left section */}
        <div
          className={`w-1/2 h-full bg-mine-shaft-900 flex flex-col gap-2 justify-center items-center ${
            location.pathname == "/signup"
              ? "rounded-r-[200px]"
              : "rounded-l-[200px]"
          }`}
        >
          <div className="flex gap-1 items-center text-orient-400">
            <IconHexagonLetterH className="h-20 w-20 stroke={2.5}" />
            <div className="text-6xl">HireNest </div>
          </div>
          <div className="text-2xl font-semibold text-mine-shaft-100">
            Find the Jobs, made just for you
          </div>
        </div>
        {/* Right section */}
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
